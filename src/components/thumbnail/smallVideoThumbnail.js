"use client";
import React from 'react';
import Image from 'next/image'
import SampleImage from '@/assets/sample.png'
import { useRouter } from 'next/navigation';
function smallVideoThumbnail(props) {
    const router = useRouter();
    return (
        <div
        className='float-left w-3/12 h-[200px] mr-10 small-video-thumbnail relative cursor-pointer'
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