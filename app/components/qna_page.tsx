"use client";
import React, { useState } from "react";
import { Qna } from "../constants/default";

function Qna_Page({ qna }: { qna: Qna[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 border-2">
      <h2 className="text-2xl font-bold mb-6 text-center">자주 묻는 질문</h2>
      
      <div className="space-y-4">
        {qna.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <span className="text-sm font-bold pr-[5px] 
              md:text-lg">{item.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 text-[14px] md:text-lg "
                dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qna_Page;