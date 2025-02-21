"use client";

import { useState } from 'react';
import { FaSquarePhone } from "react-icons/fa6";
import { SubmitFormsInterface } from '@/app/constants/default';

const FormComponent = () => {
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
        <div className="  items-center w-full h-full  flex flex-col">
            <div className="flex flex-col w-[1200px] h-[230px] justify-center items-center mx-auto  rounded-2xl bg-[#8435C6] ">
                {/* Form Inner Section */}
                <div className="bg-white p-5 flex justify-center gap-3 w-[95%] h-[50%] ">
                    {/* Name Input */}
                    <div className="flex items-center">
                        <label htmlFor="name" className="text-black font-extrabold">
                            회사명:
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="companyName"
                            value={userForm.companyName}
                            onChange={handleChange}
                            placeholder="이름"
                            className=" border-b-2 pb-2 mt-2 text-gray-700 focus:border-[#9B00FF] focus:outline-none 
                            placeholder:pl-2
                            "
                        />
                    </div>


                    {/* Birthday Input */}
                    <div className="flex items-center">
                        <label htmlFor="Birthday" className="text-black font-extrabold">
                            담당자명:
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="Birthday"
                            value={userForm.userName}
                            onChange={handleChange}
                            maxLength={6}
                            placeholder="예) 800101"
                            className=" border-b-2 pb-2 mt-2 text-gray-700 focus:border-[#9B00FF] focus:outline-none
                            placeholder:pl-2"
                        />
                    </div>

                    {/* Birthday Input */}
                    <div className="flex items-center">
                        <label htmlFor="Birthday" className="text-black font-extrabold">
                            직급:
                        </label>
                        <input
                            type="text"
                            name="rank"
                            id="Birthday"
                            value={userForm.rank}
                            onChange={handleChange}
                            maxLength={6}
                            placeholder="예) 800101"
                            className=" border-b-2 pb-2 mt-2 text-gray-700 focus:border-[#9B00FF] focus:outline-none
                            placeholder:pl-2
                            "
                        />
                    </div>

                    {/* Phone Input */}
                    <div className="flex  items-center">
                        <label htmlFor="Phone" className="text-black ml-3 font-extrabold">
                            연락처:
                        </label>
                        
                        <input
                            type="text"
                            id="Phone"
                            name="phone"
                            value={userForm.phone}
                            onChange={handleChange}
                            maxLength={11}
                            placeholder="(-없이 입력)"
                            className=" border-b-2 pb-2 mt-2 text-gray-700 focus:border-[#9B00FF] focus:outline-none
                            placeholder:pl-2
                            "
                        />
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-center  w-full  gap-2  mt-3">
                    <button
                        onClick={handleSubmit}
                        disabled={register}
                        className="w-[95%] bg-yellow-400 text-[18px] text-black font-extrabold py-3 rounded-lg"
                    >
                        광고 점검 받기 
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6 text-black">
                <span className="font-[900] text-[30px] mr-2 school-font">내 광고 클릭한번에 점검받기</span>
                <span className='text-[45px] rounded-full text-[#8435C6]'>
                <FaSquarePhone />

                </span>
                <a href="tel:01031142998" className="flex items-center">
                  
                    <span className="text-[35px] font-extrabold text-[#8435C6]">010-3114-2998</span>
                </a>
            </div>

        </div>
    );
};

export default FormComponent;