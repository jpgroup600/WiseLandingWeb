import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { SubmitFormsInterface } from '@/app/constants/default';

// It's better to use environment variables for sensitive information
const uri = "mongodb+srv://jaco4368:OTwNzMfWdOJfo8Yo@cluster0.4ffsb.mongodb.net/waroo?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await client.connect();
    
    // Get the database and collection
    const database = client.db('waroo');
    const collection = database.collection('leads');

    // Parse the request body
    const body = await request.json();
    const send_data ={
      companyName: body.companyName,
      userName: body.userName,
      rank: body.rank,
      phone: body.phone,
      createdAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    }

    // Insert the document
    const result = await collection.insertOne(send_data);
    
    if(result.insertedId){
      const response = await fetch("https://hook.eu2.make.com/qhe1rm42utunh3htatvjfnahogxiw2km",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(send_data),
      });
      console.log(response);
    }

    return NextResponse.json(
      { 
        message: 'Lead added successfully', 
        insertedId: result.insertedId 
      }, 
      { status: 200 }
    );

    



  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to add lead' }, 
      { status: 500 }
    );
  } finally {
    // Close the connection
    await client.close();
  }
}

// Optionally, add GET method to retrieve leads
export async function GET() {
  try {
    await client.connect();
    
    const database = client.db('waroo');
    const collection = database.collection('leads');

    const leads = await collection.find({}).toArray();

    return NextResponse.json(leads);

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' }, 
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}



