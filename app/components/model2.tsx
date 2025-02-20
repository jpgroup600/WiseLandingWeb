"use client"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

interface Model2Props {
  onClose: () => void;
}

export default function Model2(props: Model2Props) {
  const [gender, setGender] = useState('남');

  const handleConsultation = () => {
    alert("Insurance enrollment consultation request received.\nA specialist will contact you shortly.");
  };

  const handleExistingCustomer = () => {
    alert("We've received your inquiry as an existing customer.\nWe'll contact you as soon as possible.");
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-4 rounded-3xl px-8">
        {/* text and close icon */}
        <div className="flex justify-between mt-4 ">
          <div className="font-extrabold text-[16px]">클릭한번으로 내 광고 조회하기</div>
          {/* close button */}
          <div>
            <button onClick={props.onClose} // Close button handler
              className="" >
              <IoClose className="text-2xl" />
            </button></div>


        </div>
        {/* first input */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="회사명"
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="담당자명"
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="직급"
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="연락처"
            required
          />
        </div>
        {/* submit buttons 2 */}
        <div className="w-full flex justify-between mt-2">
          <button className="w-[100%] p-3 bg-yellow-300 font-bold text-lg rounded-xl" onClick={handleExistingCustomer}>
            가입 상담 신청
          </button>
        </div>
        {/* call button and icon link */}
        <div className="h-[40px]">

        </div>

      </div>

    </>
  )
}

