"use client";
import React from 'react';
import Image from 'next/image'
import SampleImage from '@/assets/sample.png'
import { useRouter } from 'next/navigation';
function smallVideoThumbnail(props) {
    const router = useRouter();
    return (
        <div
        className='float-left lg:w-[23%] 2xl:w-[23%] xs:w-[48%] sm:w-[48%] md:w-[48%] lg:h-[200px] 2xl:h-[200px] sm:h-[150px] md:h-[200px] xs:h-[150px] mr-[2%] small-video-thumbnail relative cursor-pointer mb-10'
        onClick={() => {
            router.push('/profile')
        }}
        >
            <Image
                src={SampleImage}
                alt='Sample Image'
                className='w-full h-full'
                />
            <div
            className='absolute px-1 py-1 bottom-1'
            >
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default smallVideoThumbnail;