"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
function SmallVideoThumbnail(props) {
    const router = useRouter();
    return (
        <div
        className='float-left lg:w-[24%] xl:w-[24%] 2xl:w-[24%] xs:w-[100%] sm:w-[100%] md:w-[48%] h-[250px] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] small-video-thumbnail relative cursor-pointer mb-10'
        onClick={() => {
            router.push('/company?id=' + props.data?.id)
        }}
        >
            <img
                src={props.data?.settings?.banner}
                alt={props.data?.settings?.banner}
                className='w-full h-full'
                />
            <div
            className='absolute px-5 py-5 bottom-0 profile-card-title w-full font-bold text-white'
            >
                <p>{props.data?.name}</p>
            </div>
        </div>
    );
}

export default SmallVideoThumbnail;