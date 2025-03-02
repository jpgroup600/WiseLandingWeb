'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { data, webData } from './data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Correct import
import { useVideoLoader } from '@/app/hooks/videoLoader';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const VideoPlayer = ({ src }: { src: string }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayPause = (videoElement: HTMLVideoElement) => {
        if (isVideoPlaying) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
        setIsVideoPlaying(!isVideoPlaying);
    };

    return (
        <>
            <video
                src={src}
                className='w-full h-full object-cover'
                muted
                loop
                playsInline
                preload="true"
                onClick={(e) => handlePlayPause(e.currentTarget)}
            />
            {!isVideoPlaying && (
                <div
                    className='absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer'
                    onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                        handlePlayPause(video);
                    }}
                >
                    <div className='w-16 h-16 bg-[#ff0033] rounded-full flex items-center justify-center'>
                        <div className='w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1'></div>
                    </div>
                </div>
            )}
        </>
    );
};

// Create a separate component for video content
const VideoContent = ({ item }: { item: typeof data[0] }) => {
    // const { videoUrls, loading } = useVideoLoader([{ src: item.src, type: 'video' }]);
    // const videoUrl = videoUrls.get(item.src) ?? null;

    if (!item.src) {
        return (
            <div className='w-full h-[250px] md:h-[300px] bg-gray-300 flex items-center justify-center'>
                Loading...
            </div>
        );
    }

    return (
        <div className='w-full h-[250px] md:h-[300px] bg-gray-300 overflow-hidden relative group max-md:rounded-lg'>
            <VideoPlayer src={item.src} />
        </div>
    );
};

export default function Portfolio() {
    const [visibleItems, setVisibleItems] = useState(6);  // Initially show 6 items
    const itemsPerLoad = 3;  // Load 3 more items each time
    
    
    

    const handleSeeMore = () => {
        setVisibleItems(prev => Math.min(prev + itemsPerLoad, data.length));
    };

    const renderContent = (item: typeof data[0]) => {
        switch (item.type) {
            case 'image':
                
                return (
                    <div className='w-full h-[250px] md:h-[300px] bg-gray-300 overflow-hidden relative group 
                    max-md:rounded-lg'>
                        <Image 
                            src={item.src} 
                            alt={item.title} 
                            width={1000} 
                            height={1000}
                            className='object-cover'
                        />
                    </div>
                );
            case 'video':
                return <VideoContent item={item} />;
            case 'youtube':
                return (
                    <div className='w-full h-[250px] md:h-[300px] bg-gray-300 overflow-hidden max-md:rounded-lg'>
                        <iframe
                            src={item.src}
                            className='w-full h-full'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='w-full flex flex-col items-center justify-center max-w-[1200px] mx-auto'>
            <div className='w-full grid md:grid-cols-3 gap-4 grid-cols-2 
            max-md:px-[5%]'>
                {data.slice(0, visibleItems).map((item, index) => (
                    <div key={index} className={`${index % 2 === 0 ? 'max-md:mt-0' : 'max-md:mt-0'}`}>
                        {renderContent(item)}
                        <div className={`w-full mt-2 mb-4 h-[50px] text-black text-center md:text-xl font-[900] nexonReg-font`}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {visibleItems < data.length && (
                <button 
                    onClick={handleSeeMore}
                    className='w-[100%] h-[50px] bg-[#8435c6] rounded-[5px] text-white text-center md:text-xl font-[900] nexonReg-font
                    hover:bg-[#6a29a6] transition-all duration-300
                    max-md:w-[90%] max-md:mx-auto'
                >
                    더 볼 수 있나요?
                </button>
            )}

           

            
        </div>
    );
};

