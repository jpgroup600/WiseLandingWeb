"use client";
import { useState, useRef, useEffect } from "react";
import ProfileCard from "../profilecard";
import Blog_Page_Navigation from "../blog_page_navigation";
import Mobile_View from "../mobileview";
import { cardData, qnaData, portData } from "./data"
import { PortDataInterface, CardDataInterface, QnaDataInterface } from "@/app/constants/default";



interface Profile {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
  additionalInfo: string;
  image: CardDataInterface[];
  id: number;
  qna: QnaDataInterface[];
  port: PortDataInterface[]; 
  
}






const ProfileList: React.FC = () => {
  // State to track which profile is selected
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const blogNavRef = useRef<HTMLDivElement>(null);

  // Sample profiles data
  const profiles: Profile[] = [
    {
      id: 1,
      name: "마케팅",
      age: "남, 43세",
      description:
        "상품은 준비가 됬는데 <br> 고객한테 어떻게 알릴지가 <br>고민입니다.",
      imageUrl: "/images/marketing.jpg",
      additionalInfo:
        "이 사람은 치료가 자주 필요하고 보험 가입을 고려하고 있습니다.",
      image:cardData.data1,
      qna:qnaData.data1,
      port:portData.data1,
    },
    {
      id: 2,
      name: "개발",
      age: "여, 30세",
      description: "아이디어는 있는데 <br >어떻게 구현할지 <br> 아직 잘모르겠어요",
      imageUrl: "/images/dev.jpg",
      additionalInfo:
        "이 사람은 시간과 비용을 절감할 방법을 찾고 있습니다.",
      image:cardData.data2,
      qna:qnaData.data2,
      port:portData.data2,
    },
    {
      id: 3,
      name: "디자인/영상",
      age: "남, 50세",
      description: "상품이 있는데 <br> 매력적이게 보이고 싶은데 <br> 어떻게 하면 좋을까요?",
      imageUrl: "/images/design.jpg",
      additionalInfo:
        "이 사람은 장기적인 치료비에 대비한 보험을 찾고 있습니다.",
      image:cardData.data3,
      qna:qnaData.data3,
      port:portData.data3,
    },
    {
      id: 4,
      name: "쇼핑몰 운영",
      age: "남, 50세",
      description: "쇼핑몰 운영중에 있는데 <br> 관리할 사람이 없어서 <br> 고민이에요",
      imageUrl: "/images/shop.jpg",
      additionalInfo:
        "이 사람은 장기적인 치료비에 대비한 보험을 찾고 있습니다.",
      image:cardData.data4,
      qna:qnaData.data4,
      port:portData.data4,
    },
  ];

  // When a profile is clicked, update the selected profile and increment the counter
  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setResetTrigger((prev) => prev + 1);
    console.log(profile);
  };

  // Scroll into view when a new profile is selected
  useEffect(() => {
    // check if its mobile or pc
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    if (selectedProfile && blogNavRef.current) {
      blogNavRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProfile]);

  return (
    <div className="profilelist-container "> {/* Force white background */}
      <div className="flex flex-wrap gap-1 md:gap-7 justify-center items-center
      md:grid md:grid-cols-4 px-8 max-w-[1440px] mx-auto
      ">
        {profiles.map((profile, index) => 
        {
          
          return (
            <div
              key={index}
            className="w-full md:max-w-xs md:mb-6 cursor-pointer"
            onClick={() => handleProfileClick(profile)} // When card is clicked
          >
            <ProfileCard
              name={profile.name}
              age={profile.age}
              description={profile.description}
              imageUrl={profile.imageUrl}
              isSelected={selectedProfile?.name === profile.name}
            />
          </div>
        )
      })}
      </div>

      {/* Blog Navigation Section with ref for scrolling */}
      <div className="hidden w-full md:block" ref={isMobile ? null : blogNavRef}>
        <Blog_Page_Navigation
          image={selectedProfile ? selectedProfile.image : cardData.data1}
          qna={selectedProfile ? selectedProfile.qna : qnaData.data1}
          resetTrigger={resetTrigger}
        />
      </div>

      {/* Mobile View */}
      <div className="w-full" ref={isMobile ? blogNavRef : null}>
        <div className="md:hidden flex flex-col w-full">
          {profiles.map((profile,index) => (
            
            <Mobile_View
              qna={profile.qna}
              key={profile.id}
              image={profile.image}
              resetTrigger={resetTrigger}
              name={profile.name}
              isOpen={selectedProfile?.id === profile.id} // Check if this profile is selected
            />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
