"use client";
import React, { useState, useEffect } from "react";
import Related_Product from "./related_product";
import DentalInsurance from "./blog_detail2";
import Blog_Review from "./blog_review";

interface BlogPageNavigationProps {
  image: { title: string; description: string; icon: string; }[];
  resetTrigger: number; // a counter that increments on each profile click
}

export default function Blog_Page_Navigation({ image, resetTrigger }: BlogPageNavigationProps) {
  const [activePage, setActivePage] = useState("related-products");

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
      return <DentalInsurance />;
    }
    if (activePage === "reviews") {
      return <Blog_Review />;
    }
    return null;
  };

  return (
    <div className="flex w-full flex-col justify-center items-center mt-4 md:mt-8">
      {/* Navigation Buttons */}
      <div className="w-full md:border-b md:border-t md:border-black flex items-center md:justify-center justify-between">
        <button
          onClick={() => setActivePage("related-products")}
          className={`w-[120px] md:w-[366px] h-[70px] md:border border-black ${activePage === "related-products"
              ? "bg-white text-blue-900 border-b-4 md:border-b-8 border-blue-900"
              : "bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          상품특징
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[120px] md:w-[366px] h-[70px] md:border border-black ${activePage === "details"
              ? "bg-white text-blue-900 border-b-4 md:border-b-8 border-blue-900"
              : "bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          보장내역
        </button>
        <button
          onClick={() => setActivePage("reviews")}
          className={`w-[120px]  md:w-[366px] h-[70px] md:border border-black ${activePage === "reviews"
              ? "bg-white text-blue-900 border-b-4 md:border-b-8 border-blue-900"
              :"bg-white text-[#8f8f8f] border-b-2 border-[#8f8f8f]"
            }`}
        >
          가입안내
        </button>
      </div>

      {/* Render the content dynamically */}
      <div className="mt-8">{renderContent()}</div>
    </div>
  );
}