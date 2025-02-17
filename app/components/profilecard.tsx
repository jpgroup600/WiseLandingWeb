import Image from 'next/image';
import { HiChevronDown } from 'react-icons/hi'; // Down icon import


interface ProfileCardProps {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
  isSelected: boolean;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  age, 
  description, 
  imageUrl,
  isSelected 
}) => {
  return (
    <div className={`w-full   ${
      isSelected ? "border-[#8435C6] border-4 "  : "border-gray-200 md:border-4" 
    } md:rounded-2xl md:shadow-lg flex content-center `}>
      
      <div className="md:w-[400px] w-full  h-[150px] md:h-[550px] justify-center gap-3 items-center flex flex-row  md:flex-col">
        {/* Title - Black text forced */}
       
        {/* Image with light gray border */}
        <div className="flex justify-center   md:gap-7  items-center flex-col  ">
        <div className="text-[13px] school-font md:text-[35px] md:font-bold text-gray-900 items-center order-2 md:order-1 flex flex-col mt-2 ">
          {name}
        </div>
    <div className='md:order-2  w-[60px] h-[60px] md:w-[150px] md:h-[150px] order-1'>
          <Image
            src={imageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-200" // Light border
          />
          </div>
        </div>

        {/* Info Section - Dark gray text */}
        <div className='px-2 flex flex-col gap-1.5 md:gap-6'>
        <div className="md:text-center flex flex-col gap-1.5 md:gap-6 ">
          <h2 className=" text-[13px]  md:text-[25px] font-semibold text-black md:text-gray-900">
            {name}({age})
          </h2>
          <p className="text-gray-700 font-medium w-[190px]   md:h-[130px]  md:w-[240px]  text-[12px]  md:text-[20px] nexonReg-font"
          dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        {/* Button - Blue when selected */}
        <div className={`flex items-center   md:items-center border   rounded-lg  md:mx-auto w-[190px]  md:w-[250px]  md:mb-4 ${
            isSelected 
              ? "bg-[#8435C6]  text-white" 
              : "bg-[#8f8f8f]  text-gray-700"
          } md:rounded-lg font-medium border-2 ${
            isSelected ? "border-[#150f96] " : "border-gray-200"
          } transition-all`}>
          <button className=" justify-center items-center md:items-center flex w-full md:text-[28.5px] h-[10px] font-semibold text-white md:h-[60px]" >
            <span className='noto-sans-kr text-center'>보장 확인</span>
          </button>
          <HiChevronDown className="text-[35px] text-black  md:hidden  " />
 
          
        </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;