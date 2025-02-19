"use client";
import React, { useState, useEffect,useRef } from "react";
import Related_Product from "./related_product";
import DentalInsurance from "./portfolio/blog_detail2";
import Qna_Page from "./qna_page";
import { PortDataInterface, CardDataInterface, QnaDataInterface } from "@/app/constants/default";

interface BlogPageNavigationProps {
  image: CardDataInterface[];
  resetTrigger: number; // a counter that increments on each profile click
  qna: QnaDataInterface[];
  port: PortDataInterface[];

}

export default function Blog_Page_Navigation({ image, resetTrigger,qna,port }: BlogPageNavigationProps) {
  const [activePage, setActivePage] = useState("related-products");
  const navBarRef = useRef<HTMLDivElement>(null);

  // Reset activePage to "related-products" whenever resetTrigger changes.
  useEffect(() => {
    setActivePage("related-products");
  }, [resetTrigger]);

  // Render content based on the activePage
  const renderContent = () => {
    if (activePage === "related-products") {
      return <Related_Product product_dat={image} />;
    }
    if (activePage === "details") {
      return <DentalInsurance port={port} />;
    }
    if (activePage === "reviews") {
      return <Qna_Page qna={qna} />;
    }
    return null;
  };

  return (
    <div className="flex w-full flex-col justify-center items-center  md:mt-6">
      {/* Navigation Buttons */}
      <div className="w-full font-semibold  md:border-b md:border-t md:border-black flex items-center md:justify-center justify-between"
      ref={navBarRef}
      >
        <button
          onClick={() => setActivePage("related-products")}
          className={`w-[123px] md:w-[366px] h-[50px] md:h-[70px] md:border border-[#8435C6] ${activePage === "related-products"
              ? "bg-white text-[#8435C6] border-b-8 md:border-b-8 border-[#8435C6]"
              : "bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          상품특징
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[123px] md:w-[366px] h-[50px] md:h-[70px] md:border  border-[#8435C6] ${activePage === "details"
              ? "bg-white text-[#8435C6] border-b-8 md:border-b-8 border-[#8435C6]"
              : "bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          포트폴리오
        </button>
        <button
          onClick={() => setActivePage("reviews")}
          className={`w-[123px]  md:w-[366px] h-[50px] md:h-[70px] md:border border-[#8435C6] ${activePage === "reviews"
              ? "bg-white text-[#8435C6] border-b-8 md:border-b-8 border-[#8435C6]"
              :"bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          가입안내
        </button>
      </div>

      {/* Render the content dynamically */}
      <div className="mt-8 max-w-[1440px] mx-auto w-[80%]">{renderContent()}</div>
    </div>
  );
}