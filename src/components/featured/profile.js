"use client";
import React from 'react';
import SampleImage from '@/assets/sample.png'
import Image from 'next/image'
import { SvgIcon } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import Button from '@/components/buttons/btn.js'

export const metadata = {
    title: 'Startup Profile'
}

function index(props) {
    return (
        <div style={{
            marginTop: 100
        }}
            className='float-left w-full relative lg:h-[80vh] 2xl:h-[80vh] sm:h-[60vh] md:h-[60vh] text-white'
        >
            <div
                className='float-left lg:h-[80vh] 2xl:h-[80vh] w-full sm:h-[60vh] md:h-[60vh]'
            >
                <Image
                    src={SampleImage}
                    className='w-full h-full'
                    alt='Sample Image'
                />
            </div>
            <div
                className='w-full h-full absolute top-0 left-0'
            >
                <div
                    className='left w-full h-full flex items-center content-center justify-center'
                >
                    <SvgIcon
                        component={PlayCircle}
                        className='lg:text-[140px] 2xl:text-[140px] sm:text-[100px] md:text-[100px] xs:text-[100px] float-left cursor-pointer'
                    />
                </div>
                <div className='lg:bottom-[60px] 2xl:bottom-[60px] sm:bottom-0 md:bottom-0 xs:bottom-0 absolute w-full lg:px-[100px] 2xl:px-[100px] sm:px-[20px] xs:px-[20px] md:px-[20px]'>
                    <div className='float-left flex justify-between w-full'>
                        <div>
                            <span className='lg:text-6xl 2xl:text-6xl sm:text-2xl xs:text-2xl md:text-2xl w-full float-left'>Prosperna</span>
                            <span className='lg:text-2xl 2xl:text-2xl sm:text-lg xs:text-lg md:text-lg w-full float-left'>Seed Round - Finance</span>
                        </div>
                        <span className='lg:text-2xl 2xl:text-2xl sm:text-lg xs:text-lg md:text-lg text-right'>Doing Fund Raising</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default index;