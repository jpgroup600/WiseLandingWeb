'use client'
import React, { useState, useEffect } from 'react'
import { webData } from './data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from 'next/image';
import { useVideoLoader } from '@/app/hooks/videoLoader';
function WebPortfolio() {
    const [isMobile, setIsMobile] = useState(false);
    const { videoUrls, loading } = useVideoLoader(webData);
    console.log(videoUrls);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        handleResize();
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderContent = (item: typeof webData[0]) => {
        return (
            <a href={item.link ?? ''} target='_blank' rel='noopener noreferrer'>
                <div className='w-full h-[250px] md:h-[400px] relative max-md:rounded-lg'>
                    <video 
                        src={videoUrls.get(item.src) || undefined} 
                        className='w-full h-full object-cover max-md:rounded-lg'
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                    />
                    <div className='absolute bottom-0 left-0 w-full h-full bg-black/40 text-white text-center max-md:rounded-lg'>
                        <div className='w-full h-full flex items-center font-[900] justify-center nexonReg-font text-xl md:text-2xl
                    tracking-wider hover:underline transition-all duration-300 cursor-pointer'>
                            직접 보기
                        </div>
                    </div>
                </div>
            </a>
        )
    }
    return (
        <div className='w-full max-w-[1200px] mx-auto'>
            <div className="relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    className='w-full h-[250px] md:h-[400px] max-md:rounded-lg'
                >
                    {webData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full h-[250px] md:h-[400px] px-[5%] max-md:rounded-lg'>
                                {renderContent(item)}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination absolute -bottom-[30px]"></div>
            </div>
        </div>
    )
}

export default WebPortfolio;