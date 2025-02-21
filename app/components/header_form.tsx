"use client"
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { SubmitFormsInterface} from '@/app/constants/default'


export default function Header_Form() {

  const [userForm, setUserForm] = useState<SubmitFormsInterface>({
    companyName: "",
    userName: "",
    rank: "",
    phone: "",
  });
  const [register, setRegister] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/addLead", {
      method: "POST",
      body: JSON.stringify(userForm),
    });
    console.log(response);

    if(response.status === 200){
      alert("상담 신청이 완료되었습니다");
      setRegister(true);
    }else{
      alert("상담 신청에 실패했습니다. 다시 시도해주세요.");
    }

  };

  return (
    <div className=" mx-auto h-[95%] flex flex-col w-full bg-white rounded-3xl shadow-lg border-2 border-blue-900 relative
    pt-[5%]
    ">
      
       <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">회사명</label>
        <input type="text" name="companyName" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" 
        onChange={handleChange}
        value={userForm.companyName}
        />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">담당자명</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1"  name='userName'
        onChange={handleChange}
        value={userForm.userName}
        />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">직급</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" name='rank'
        onChange={handleChange}
        value={userForm.rank}
        />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">연락처</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" name='phone'
        onChange={handleChange}
        value={userForm.phone}
        />
      </div>



      {/* Contact Information */}
      <div className="mt-10 w-full py-4 rounded-b-2xl text-center absolute bottom-5 ">
        <button className="bg-[#FFE401] text-black text-[22px] font-bold rounded-lg flex items-center justify-center gap-1 w-full h-[68px] relative
        hover:bg-[#FFE401]/60 transition-all duration-300
        " onClick={handleSubmit}
        disabled={register}
        >
          <span className=''>내 광고 점검받기 </span>
          <FaAngleRight className='text-[40px] bg-black/70 text-white rounded-l-full py-2 absolute right-0 top-1/2 -translate-y-1/2' />
        </button>
      </div>
    </div>
  );
}
