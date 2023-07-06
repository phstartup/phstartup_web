"use client"
import React from 'react';
import Style from '@/utils/Style';
import Profile from '@/assets/profile.png'
import Image from 'next/image';

function Banner(props) {


    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className='h-[200px] w-[200px] mr-[10px] absolute bottom-0 left-0'>
                <Image
                    src={Profile}
                    width={200}
                    height={200}
                    className='rounded-[100px] cursor-pointer border-2 bg-black dark:bg-white'
                    alt={"Profile"}
                />
            </div>
        )
    }

    return (
        <div className={Style.cardContainerWithoutPadding + " mb-[20px]"}>
            <div className='w-full float-left text-sm mt-[20px] min-h-[400px] overflow-hidden relative'>
                <div className='w-full float-left h-[400px]'>

                </div>
                <div>
                    {
                        renderProfile()
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;