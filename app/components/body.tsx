import Image from "next/image";
import ProfileList from "./profile_list";

export default function Body() {
  return (
    <div className='w-full h-auto '> {/* Force white background */}
      {/* Hero Image Section */}
      <div className='w-full h-[100px] hidden md:flex justify-center items-center md:mt-8 px-4'>
        <div className="w-full h-auto shadow-lg rounded-lg overflow-hidden">
          <Image 
            src="/body/form_prize.png" 
            width={1500} 
            height={1000} 
            alt="Recommendation header"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Recommendation Heading */}
      <div className="w-full flex items-center  md:mt-24 justify-center my- md:my-12">
        <div className="w-full md:w-[80%] bg-blue-50 py-4  "> 
          <h1 className="text-xl md:text-3xl font-bold text-blue-800 text-center">
            이런 분들에게 추천합니다!
          </h1>
        </div>
      </div>

      {/* Profile Cards Section */}
      <div className="w-full   md:px-8">
        <ProfileList />
      </div>

    </div>
  )
}