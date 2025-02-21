"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';


interface RealtedTypes {
  product_dat: { title: string; description: string; icon: string; }[];

}
export default function Related_Product(prop: RealtedTypes) {
  // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
  // const products = prop.product_data || []; // Default to empty array if no data is passed

  return (
    <div className="flex flex-col w-full h-full px-4  gap-4  mb-2 items-center justify-center">
      {/* Card Group 1 */}
      <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
        {prop.product_dat.map((card, index) => {
          // prop.product_dat.length % 2 === 0 ? setEven(true) : setEven(false);
          return (
            <div key={index} className=" px-4 w-full md:w-[480px] h-[130px] md:h-[350px] flex items-center gap-4 justify-between rounded-2xl text-white border-[2px] border-[#e5e7eb]">
              <div className='image-wrapper w-[20vw] h-[20vw] md:w-[130px] md:h-[130px]'
              >
                <Image src={card.icon} alt={card.title} width={100} height={100} className='w-full h-full' />

              </div>

              <div className=' text-wrapper w-[200px] h-[250px] pl-2 md:w-[300px] flex flex-col items-start justify-center'>
                <h1 className="md:font-[900] font-semibold text-[#8435C6] md:text-[30px] text-[15px] nexonNormal-font"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                ></h1>
                <p className="text-slate-900 font-medium md:font-semibold text-[13px] md:text-[22px] nexonNormal-font"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            </div>
          )
        })}
      </div>
      {/* Card Group 2 */}

    </div>
  );
} 
