"use client"
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";



export default function Header_Form() {

  return (
    <div className=" mx-auto h-[95%] flex flex-col w-full bg-white rounded-3xl shadow-lg border-2 border-blue-900 relative
    pt-[5%]
    ">
      
       <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">회사명</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1
        " />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">담당자명</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">직급</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" />
      </div>
      
      <div className="flex px-6 mt-8 items-center gap-2">
        <label className="block text-gray-700 text-xl font-bold mb-1 w-[30%]">연락처</label>
        <input type="text" placeholder="이름" className="border-b-2 focus:outline-none p-1 flex-1" />
      </div>



      {/* Contact Information */}
      <div className="mt-10 w-full py-4 rounded-b-2xl text-center absolute bottom-5 ">
        <button className="bg-[#FFE401] text-black text-[22px] font-bold rounded-lg flex items-center justify-center gap-1 w-full h-[68px] relative
        hover:bg-[#FFE401]/60 transition-all duration-300
        " onClick={() => alert("보험료 확인 버튼이 클릭되었습니다.")}>
          <span className=''>내 광고 조회하기 </span>
          <FaAngleRight className='text-[40px] bg-black/70 text-white rounded-l-full py-2 absolute right-0 top-1/2 -translate-y-1/2' />
        </button>
      </div>
    </div>
  );
}
