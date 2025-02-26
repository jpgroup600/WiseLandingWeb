import { NextRequest, NextResponse } from "next/server";
import { S3Client, GetObjectCommand, ListObjectsCommand} from "@aws-sdk/client-s3";


if (!process.env.R2_BUCKET_NAME || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY || !process.env.CLOUDFLARE_ACCOUNT_ID) {
    throw new Error('Missing R2 credentials');
  }
  
  const s3 = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);  // Uses the actual request URL
        const fileName = url.searchParams.get('file')?.replace(/^\//, '');
        
        if (!fileName) {
            return NextResponse.json({ error: 'fileName is required' }, { status: 400 });
        }

        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: fileName,
        });

        const response = await s3.send(command);
        
        return new NextResponse(response.Body as unknown as ReadableStream, {
            headers: {
                'Content-Type': response.ContentType || 'application/octet-stream',
            },
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 });
    }
}