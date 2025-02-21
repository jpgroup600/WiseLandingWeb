"use client"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SubmitFormsInterface } from "@/app/constants/default";
interface Model2Props {
  onClose: () => void;
}

export default function Model2(props: Model2Props) {
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

    if (response.status === 200) {
      alert("상담 신청이 완료되었습니다");
      setRegister(true);
    } else {
      alert("상담 신청에 실패했습니다. 다시 시도해주세요.");
    }

  };

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-4 rounded-3xl px-8">
        {/* text and close icon */}
        <div className="flex justify-between mt-4 ">
          <div className="font-extrabold text-[16px]">
            <p className="text-[18px] md:text-[20px]">클릭한번으로 내 광고 점검 받기</p>
            <p className="text-[20px] md:text-[20px] font-[900]">현재 신청인원 <span className="text-[#8435C6]">36</span>명</p>

          </div>
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
            className="w-full p-3 border rounded-xl border-gray-200
            "
            placeholder="회사명"
            name="companyName"
            value={userForm.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="담당자명"
            name="userName"
            value={userForm.userName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="직급"
            name="rank"
            value={userForm.rank}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="w-full p-3 border rounded-xl border-gray-200"
            placeholder="연락처"
            name="phone"
            value={userForm.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* submit buttons 2 */}
        <div className="w-full flex justify-between mt-2">
          <button
            disabled={register}
            className="w-[100%] p-3 bg-yellow-300 font-bold text-lg rounded-xl"
            onClick={handleSubmit}>
            광고 점검받기
          </button>
        </div>
        {/* call button and icon link */}
        <div className="h-[40px]">

        </div>

      </div>

    </>
  )
}

