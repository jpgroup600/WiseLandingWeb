"use client";
import React from 'react'
import Image from 'next/image';


interface RealtedTypes{
  product_dat: { title: string; description: string; icon: string; }[];

}
export default function Related_Product(prop:RealtedTypes) {
      // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
      // const products = prop.product_data || []; // Default to empty array if no data is passed
  return (
      <div className="flex flex-col w-full h-full px-2  gap-2  mb-2 items-center justify-center">
        {/* Card Group 1 */}
        <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
          {prop.product_dat.slice(0, 2).map((card, index) => (
            <div key={index} className="w-full sm:w-[480px] h-[130px] sm:h-[350px] flex items-center gap-4 rounded-2xl text-white border-[2px] border-[#e5e7eb]">
              <div className="h-[100px] w-[150px] md:h-[150px] md:w-[250px]">
                <Image
                  src={card.icon}
                  alt={`icon-${index}`}
                  width={100}
                  height={100}
                  className='h-full w-full'
                />
              </div>
              <div className="px-10 flex flex-col items-center">
                <h1 className="md:font-extrabold font-semibold text-[#150f96] md:text-[30px] text-[15px] text-center">{card.title}</h1>
                <p className="text-slate-900 font-medium md:font-semibold text-[13px] md:text-[25px] text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Card Group 2 */}
        <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
          {prop.product_dat.slice(0, 2).map((card, index) => (
            <div key={index} className="w-full sm:w-[480px] h-[130px] sm:h-[350px] flex items-center gap-4 rounded-2xl text-white border-[2px] border-[#e5e7eb]">
              <div className="h-[100px] w-[150px] md:h-[150px] md:w-[250px]">
                <Image
                  src={card.icon}
                  alt={`icon-${index}`}
                  width={100}
                  height={100}
                  className='h-full w-full'
                />
              </div>
              <div className="px-10 flex flex-col items-center">
                <h1 className="md:font-extrabold font-semibold text-[#150f96] md:text-[30px] text-[15px] text-center">{card.title}</h1>
                <p className="text-slate-900 font-medium md:font-semibold text-[13px] md:text-[25px] text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } 
