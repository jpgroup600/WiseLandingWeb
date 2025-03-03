"use client";
import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./custom.css";
import Image from "next/image";
import Header_Form from "../header_form";

// Data for swiper slides
const swiperData = [
  {
    text1: "<strong>첫번째</strong> 마케팅,개발,디자이너,MD <br />  따로 찾을 필요없는<br />  올인원 솔루션을 제공합니다",
    image: "/header/1.jpeg",
    mb_text: "첫번째 마케팅,개발,<br>디자이너,MD  따로 찾을 <br>필요없는 올인원 솔루션을 <br> 제공합니다"
  },
  {

    text1: "두번째 모든 팀원이 <br />  와루에서 활동하기 때문에 <br />  팀 협업이 쉬워집니다",
    image: "/header/2.jpeg",
    mb_text: "두번째 모든 팀원이 <br />  와루에서 활동하기 때문에 <br />  팀 협업이 쉬워집니다"
  },
  {
    text1: "세번째 대행사가 아닌 <br />  내 회사를 같이 키울 파트너 <br />  (밤에도 쉬지않고 일합니다 )",
    image: "/header/3.jpg",
    mb_text: "세번째 대행사가 아닌 <br> 내 회사를 같이 키울 <br> 밤에도 쉬지않고 일하는 <br> 파트너 "
  },
  // Add more data as needed
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto h-auto flex flex-col md:flex-row md:mt-10 justify-between px-[5%]">
      {/* Text and Image */}
      <div className=" md:h-[750px] py-4">
        <div className="md:w-[700px] sm:w-[750px] w-full h-full ">
          <div className="md:text-[40px] tracking-[1px] md:mt-[0px] school-font font-extrabold mt-[10px] text-black text-center">
            <p>
              <span className="text-[#9B00FF] md:text-[50px] text-[7vw]">성공적인</span>
              <span className="text-black md:text-[50px] text-[7vw]"> 사업을 위해서는


              </span>
            </p>
            <span className="md:text-[50px] text-[7vw]">
              {isMobile ? (
                <p>성공적인 파트너가<br />있어야합니다!</p>
              ) : (
                <p>성공적인 파트너가 있어야합니다!</p>
              )}
            </span>
            <p className="text-[20px] mt-[10px] nexonReg-font text-[#3a3d53] text-center md:text-center md:text-[2rem]">
              나에게 맞는 팀은 있을까?
            </p>
          </div>

          <div className="top3-border-wrapper mt-5 px-3 flex flex-col ">
            <div className="top3-border-title school-font text-[#3a3d53] md:text-[1.5rem] text-[1rem] font-[800] ">
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
                  <div className="top3-border  flex h-[150px] md:h-[300px] px-[10%] items-center justify-center md:w-full bg-[#C6A6CD50] rounded-[10px]"
                  style={{backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  >
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center mt-2 space-x-2 mb-8 md:mb-0" />

          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="hidden md:block md:w-[40%]">
        <div className="h-[600px] flex">
          <div className=" rounded-3xl bg-[#8435C6] flex flex-col items-center w-[100%]">
            <div className="h-[50px] px-4 mt-8 mb-10">
              <div className="form-heading-wrapper h-[100%] flex items-center justify-center">
                <div className="form-heading text-[30px] text-white text-center font-[900] school-font">클릭한번으로 <br></br>내 광고 점검받기</div>
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

export default Header;
