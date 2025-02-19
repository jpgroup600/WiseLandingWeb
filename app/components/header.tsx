"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import Header_Form from "./header_form";

// Data for swiper slides
const swiperData = [
  {
    text1: "<strong>첫번째</strong> 마케팅,개발,디자이너,MD <br />  따로 찾을 필요없는<br />  올인원 솔루션을 제공합니다",
    image: "/lungs.png",
  },
  {

    text1: "두번째 모든 팀원이 <br />  와루에서 활동하기 때문에 <br />  팀 협업이 쉬워집니다",
    image: "/head.png",
  },
  {
    text1: "세번째 대행사가 아닌 <br />  내 회사를 같이 키울 파트너 <br />  (밤에도 쉬지않고 일합니다 )",
    image: "/teeth.png",
  },
  {
    text1: "네번쨰 마케팅과 개발의 <br />  통합 솔루션, 불편함을 <br />  자동화로 해결합니다",
    image: "/teeth.png",
  }
  // Add more data as needed
];

export default function Header() {
  return (
    <div className="max-w-[1440px] mx-auto h-auto flex flex-col md:flex-row md:mt-10 justify-between px-[5%]">
      {/* Text and Image */}
      <div className=" md:h-[750px] py-4">
        <div className="md:w-[700px] sm:w-[750px] w-full h-full ">
          <div className="md:text-[40px] school-font font-extrabold  text-black text-center">
            <p ><span className="text-[#9B00FF] text-[50px]">성공적인</span><span className="text-black text-[50px]"> 사업을 위해서는</span></p>
            <p className="text-[25px] md:text-[50px]">성공적인 파트너가 있어야합니다!</p>
            <p className="text-[20px]  nexonReg-font text-[#3a3d53] text-center
          md:text-center md:text-[2rem]
          ">나에게 맞는 팀은 있을까?</p>

          </div>


          <div className="top3-border-wrapper mt-5 px-3 flex flex-col ">
            <div className="top3-border-title school-font text-[#3a3d53] text-[1.5rem] font-[800] ">
              와루는 어떤 회사인가요?
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                el: '.custom-pagination',
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper   bg-[#ebf3fe]  border  md:w-full rounded-2xl"
              style={{ width: '100%', height: '100%' }}
            >
              {swiperData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="top3-border  flex h-[200px] md:h-[300px] md:px-[10%] items-center justify-center md:w-full bg-[#C6A6CD50] rounded-[10px]">
                    <div className="flex flex-col w-3/4">
                      <p className="nexonReg-font text-black text-[10px]  md:text-[1.5rem] space-y-4 font-[900]"
                        dangerouslySetInnerHTML={{ __html: data.text1 }}
                      >
                      </p>
                    </div>
                    <div className="w-[150px] h-[150px] flex justify-center items-center ml-10">
                      <Image
                        src={data.image}
                        width={150}
                        height={150}
                        alt="Slide image"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center mt-2 space-x-2" />

          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="hidden md:block md:w-[40%]">
        <div className="h-[600px] flex">
          <div className=" rounded-3xl bg-[#8435C6] flex flex-col items-center w-[100%]">
            <div className="h-[50px] px-4 mt-8 mb-10">
              <div className="form-heading-wrapper h-[100%] flex items-center justify-center">
                <div className="form-heading text-[30px] text-white text-center font-[900] school-font">클릭한번으로 <br></br>내 광고 조회하기</div>
              </div>
            </div>
            <div className=" h-full w-[90%]">
              <Header_Form />
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
