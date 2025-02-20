// 파일명: DentalInsurance.tsx
import React from 'react';
import { PortDataInterface } from '@/app/constants/default';
import Image from 'next/image';

interface DentalInsuranceProps {
  port: PortDataInterface[];
}

const DentalInsurance: React.FC<DentalInsuranceProps> = ({ port }) => {
  return (
    <div>
      <div className={`port-wrapper w-full grid grid-cols-2 gap-10 items-center justify-center
      md:grid-cols-3
      `}>
        {port.map((item, index) => (
        <a href={`${item.link === null ? '' : item.link}`} target='_blank' key={index}>
          <div className='port-card-container w-full h-[300px] relative border-2 border-black rounded-[5px] overflow-hidden'>
            <div className='w-full h-full flex items-start justify-center'>
              {
                item.type === 'video' ? (
                  <video 
                    src={item.src || ''} 
                    className='w-full h-[250px] object-cover' 
                    autoPlay 
                    muted 
                    loop
                  ></video>
                ) : (
                  <Image 
                    src={item.src || ''} 
                    alt={item.title || 'Portfolio image'}
                    width={500}
                    height={250}
                    className='w-full h-[250px] object-cover'
                  />
                )
              }
            </div>
            <div className='bg-black text-white absolute bottom-0 w-full text-center py-4 noto-sans-kr font-bold tracking-wider'>{item.title}</div>
          </div>
        </a>

        
        ))}

        






      </div>
    </div>

  );
};

export default DentalInsurance;



