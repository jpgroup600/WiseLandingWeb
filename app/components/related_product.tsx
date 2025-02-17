"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';


interface RealtedTypes {
  product_dat: { title: string; description: string; icon: string; }[];

}
export default function Related_Product(prop: RealtedTypes) {
  // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
  // const products = prop.product_data || []; // Default to empty array if no data is passed

  const [even, setEven] = useState<boolean>(true);

  useEffect(() => {
    setEven(prop.product_dat.length % 2 === 0);
  }, [prop.product_dat.length]);

  return (
    <div className="flex flex-col w-full h-full px-4  gap-2  mb-2 items-center justify-center">
      {/* Card Group 1 */}
      <div className="flex flex-wrap gap-2 md:gap-6 justify-center">
        {prop.product_dat.map((card, index) => {
          // prop.product_dat.length % 2 === 0 ? setEven(true) : setEven(false);
          return (
            <div key={index} className="w-full sm:w-[480px] h-[130px] sm:h-[350px] flex items-center gap-4 rounded-2xl text-white border-[2px] border-[#e5e7eb]">
              <div className="h-[100px] ml-5 w-[150px] md:h-[150px] md:w-[250px]">
                <Image
                  src={card.icon}
                  alt={`icon-${index}`}
                  width={100}
                  height={100}
                  className='h-full w-full'
                />
              </div>
              <div className="px-10 flex flex-col items-start">
                <h1 className="md:font-[900] font-semibold text-[#8435C6] md:text-[30px] text-[15px] nexonNormal-font"
                dangerouslySetInnerHTML={{ __html: card.title }}
                ></h1>
                <p className="text-slate-900 font-medium md:font-semibold text-[13px] md:text-[25px]"
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
