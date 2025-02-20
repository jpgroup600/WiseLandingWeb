"use client";
import { useState } from "react";
import Image from "next/image";
import { FaSquarePhone } from "react-icons/fa6";
import { LuHeartCrack } from "react-icons/lu"; // Example icon
import { LiaToothSolid } from "react-icons/lia"; // Example tooth icon
import { LuBicepsFlexed } from "react-icons/lu";

// Interface and Data
interface MenuItem {
  title: string;
  content: string[];
  icon: React.ReactNode;
}

const menuData: { [key: string]: MenuItem } = {
  Teeth: {
    title: "Teeth",
    content: ["Teeth Whitening", "Dental Implants", "Braces", "Root Canal"],
    icon: <LiaToothSolid className="text-4xl text-blue-800" />,
  },
  Cancer: {
    title: "Cancer",
    content: [
      "Chemotherapy",
      "Radiation Therapy",
      "Surgery",
      "Palliative Care",
    ],
    icon: <LuHeartCrack className="text-4xl text-red-600" />,
  },
  Health: {
    title: "Health",
    content: ["Full Body Checkup", "Blood Tests", "ECG", "X-Ray"],
    icon: <LuBicepsFlexed className="text-4xl text-blue-600" />,
  },
  Dementia: {
    title: "Dementia",
    content: [
      "Memory Tests",
      "Cognitive Therapy",
      "Daily Assistance",
      "Medication",
    ],
    icon: <LuHeartCrack className="text-4xl text-yellow-600" />,
  },
};

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMobileMenu, setSelectedMobileMenu] = useState<string | null>(
    null
  );

  // A helper function to only trigger hover effects on desktop
  const handleDesktopHover = () => {
    if (window.innerWidth >= 768) {
      setShowDropdown(true);
    }
  };

  // Mobile menu content renderer
  const renderMobileContent = () => {
    if (!selectedMobileMenu)
      return (
        <div className="text-gray-500 text-center school-font p-4">
          Select a category to view services
        </div>
      );

    return (
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900 mb-4">
          {menuData[selectedMobileMenu].title}
        </h3>
        <ul className="space-y-2">
          {menuData[selectedMobileMenu].content.map((service, index) => (
            <li key={index} className="text-gray-600">
              • {service}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white w-full border-b border-gray-200 shadow-md md:px-[5%] py-[10px] px-[30px]
    md:h-[110px]
    ">
      <div className="nav-wrapper flex flex-row gap-2 justify-between items-center max-w-[1440px] mx-auto">
        <div className="logo-wrapper flex flex-row gap-2 w-[50px] md:w-[200px]">
          <Image src="/Navbar/logo.png" alt="logo" width={100} height={100} />

        </div>
        <div className="phone-wrapper">
          <a href="tel:01041142998">
            <div className="phone-container flex justify-center flex-row items-center gap-2 bg-[#8435C6]  h-[35px] w-[120px] rounded-full
            md:w-[150px] md:h-[50px]
            
            ">
              <FaSquarePhone className="text-white text-[22px] md:text-[35px]" />
              <span className="text-white font-[700]">전화상담</span>
            </div>
          </a>
        </div>  
      </div>

    </div>
  );
}
