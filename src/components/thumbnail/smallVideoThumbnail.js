"use client";
import React from 'react';
import Image from 'next/image'
import SampleImage from '@/assets/sample.png'
import { useRouter } from 'next/navigation';
function smallVideoThumbnail(props) {
    const router = useRouter();
    return (
        <div style={{
            width: '24%',
            float: 'left',
            height: 200,
            marginRight: 25,
        }}
        className='small-video-thumbnail relative cursor-pointer'
        onClick={() => {
            router.push('/profile')
        }}
        >
            <Image
                src={SampleImage}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                />
            <div style={{
                bottom: 10,
                paddingLeft: 10,
                paddingRight: 10
            }}
            className='absolute'
            >
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default smallVideoThumbnail;