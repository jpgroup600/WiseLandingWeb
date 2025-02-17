import Image from "next/image";
import ProfileList from "./profile_list/profile_list";

export default function Body() {
  return (
    <div className='w-full h-auto '> {/* Force white background */}
      {/* Hero Image Section */}

      {/* Recommendation Heading */}
      <div className="w-full flex items-center  md:mt-24 justify-center my- md:my-12">
        <div className="w-full md:w-[100%] bg-[#f2f2f2] py-4  "> 
          <h1 className="text-xl md:text-3xl font-bold text-black text-center nexonReg-font">
            이런 분들에게 추천합니다!
          </h1>
        </div>
      </div>

      {/* Profile Cards Section */}
      <div className="w-full">
        <ProfileList />
      </div>

    </div>
  )
}