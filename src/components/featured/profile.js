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
            className='float-left w-full relative lg:h-[80vh] 2xl:h-[80vh] sm:h-[60vh] md:h-[60vh]'
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
                className='w-full h-full absolute top-0 left-0 px-[10px] lg:px-[100px]]'
            >
                <div
                    className='left w-full h-full flex items-center content-center justify-center'
                >
                    <SvgIcon
                        component={PlayCircle}
                        className='text-[140px] float-left cursor-pointer'
                    />
                </div>
                <div className='bottom-[60px] absolute w-full  2xl:px-[100px]'>
                    <div className='float-left flex items-center content-center justify-between w-full'>
                        <div>
                            <span className='lg:text-6xl 2xl:text-6xl sm:text-3xl xs:text-3xl md:text-3xl w-full float-left'>Prosperna</span>
                            <span className='text-2xl w-full float-left'>Seed Round - Finance</span>
                        </div>
                        <span className='text-2xl text-right'>Doing Fund Raising</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default index;