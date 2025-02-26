import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 md:px-16 mt-6 mx-auto">
      <div className="w-full   flex flex-col ">
        <div className=" md:text-left mb-5 ">
          {/* Hidden on mobile, visible on desktop */}
          <div className="hidden md:block md:justify-center md:mt-4 border md:border-[#bfc1c6] md:text-[8px]"></div>
        </div>

        <div className="mt-4 md:mt-0">
          <ul className="flex gap-5  justify-start flex-col md:flex-row md:justify-start">
          
            {/* Hidden on mobile, visible on desktop */}
            <span className="hidden md:block md:justify-center md:bg-[#bfc1c6] md:w-0 border md:border-[#bfc1c6] md:h-5 md:text-[8px] text-[14px] font-[900]"></span>            <li>
              <span className="text-[#555] transition-colors duration-300 cursor-pointer">
                WiseRootree
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[14px] md:text-[15px] font-bold  text-[#666] flex flex-col mt-4">
        {/* <p>
        03156 서울특별시 종로구 삼봉로 48(청진동 188) 라이나타워
        </p> */}
        <p>대표이사 김동석 사업자등록번호 : 247-48-00896</p>
        <p>주소 : 청담동 88-13번지 아리티움 202호</p>

        <p>&copy; WiseRootree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
