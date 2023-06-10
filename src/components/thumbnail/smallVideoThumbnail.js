"use client";
import React from 'react';
import Image from 'next/image'
import SampleImage from '@/assets/sample.png'
function smallVideoThumbnail(props) {
    return (
        <div style={{
            width: '24%',
            float: 'left',
            height: 200,
            marginRight: 25
        }}>
            <Image
                src={SampleImage}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                />
        </div>
    );
}

export default smallVideoThumbnail;