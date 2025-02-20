import Blog_Page_Navigation from "./blog_page_navigation";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { QnaDataInterface } from "@/app/constants/default";

interface BlogPageNavigationProps {
  image: { title: string; description: string; icon: string; }[];
  name: string;
  resetTrigger: number;
  isOpen: boolean;
  qna: QnaDataInterface[];
}

export default function Mobile_View({
  image,
  resetTrigger,
  name,
  isOpen,
  qna,
}: BlogPageNavigationProps) {
  const [localIsOpen, setLocalIsOpen] = useState(isOpen);

  const toggleModal = () => setLocalIsOpen(!localIsOpen);

  useEffect(() => {
    setLocalIsOpen(isOpen);
  }, [isOpen]);

  return (
    <div className="md:hidden w-full">
      {/* Toggle Button - Centered Text */}
      <button
        onClick={toggleModal}
        className="w-full h-[45px] flex items-center bg-gray-200 border-b border-gray-400 relative"
      >
        <span className="flex-1 text-center text-[16px] md:text-lg font-bold nexonReg-font">{name}</span>
        <FaAngleDown
          className={`text-lg absolute right-2 transition-transform ${
            localIsOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Modal - Neeche Content Ko Push Karega */}
      {localIsOpen && (
        <div className="relative w-full bg-white shadow-lg z-50 mt-2  rounded-lg border border-gray-200">
          <Blog_Page_Navigation image={image} resetTrigger={resetTrigger} qna={qna} />
        </div>
      )}
    </div>
  );
}