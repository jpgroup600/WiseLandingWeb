"use client";
import React, { useState, useEffect, useRef } from "react";
import Related_Product from "./related_product";
import DentalInsurance from "./portfolio/blog_detail2";
import Qna_Page from "./qna_page";
import { PortDataInterface, CardDataInterface, QnaDataInterface } from "@/app/constants/default";

interface BlogPageNavigationProps {
  image: CardDataInterface[];
  resetTrigger: number; // a counter that increments on each profile click
  qna: QnaDataInterface[];

}

export default function Blog_Page_Navigation({ image, resetTrigger, qna }: BlogPageNavigationProps) {
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
    // if (activePage === "details") {
    //   return <DentalInsurance port={port} />;
    // }
    if (activePage === "reviews") {
      return <Qna_Page qna={qna} />;
    }
    return null;
  };

  return (
    <div className="flex w-full flex-col justify-center items-center  md:mt-6">
      {/* Navigation Buttons */}
      <div className="button-container w-full px-[10%] font-semibold  md:border-b md:border-t md:border-black flex items-center justify-center"
        ref={navBarRef}
      >
        <div className="button-wrapper w-full max-w-[1440px] mx-auto flex items-center justify-center">
          <button
            onClick={() => setActivePage("related-products")}
            className={`w-[123px] md:w-1/2 h-[50px] md:h-[100px] md:border border-[#8435C6] ${activePage === "related-products"
              ? "bg-white text-[#8435C6] border-b-8 md:border-b-8 border-[#8435C6]"
              : "bg-white text-[#8f8f8f] border-b-8 md:border-b-8 border-[#8f8f8f] border-b-[#ffffff00]"
              }`}
          >
            <span className="text-sm md:text-xl">상품특징</span>
          </button>
          <button
            onClick={() => setActivePage("reviews")}
            className={`w-[123px]  md:w-1/2 h-[50px] md:h-[100px] md:border border-[#8435C6] ${activePage === "reviews"
              ? "bg-white text-[#8435C6] border-b-8 md:border-b-8 border-[#8435C6]"
              : "bg-white text-[#8f8f8f] border-b-8 md:border-b-8 border-[#8f8f8f] border-b-[#ffffff00]"
              }`}
          >
            <span className="text-sm md:text-xl">궁금한게 있어요</span>
          </button>
        </div>
      </div>

      {/* Render the content dynamically */}
      <div className="mt-8 max-w-[1440px] mx-auto md:w-[80%] ">{renderContent()}</div>
    </div>
  );
}