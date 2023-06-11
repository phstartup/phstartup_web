"use client";
import React from 'react';
import SampleImage from '@/assets/sample.png'
import Image from 'next/image'
import {  SvgIcon } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import Button from '@/components/buttons/btn.js'

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
            className='w-full absolute lg:bottom-10 2xl:bottom-10 left-0 px-[10px] lg:px-[100px]] 2xl:px-[100px] sm:bottom-1 xs:bottom-1 md:bottom-1'
            >
                <span className='lg:text-6xl 2xl:text-6xl sm:text-3xl xs:text-3xl md:text-3xl text-white'>Prosperna</span>
                <div
                className='left w-full flex items-center content-center'
                >
                    <SvgIcon
                        component={PlayCircle}
                        className='text-6xl float-left cursor-pointer text-white'
                        />
                    <Button
                        title="More details"
                        onPress={() => {
                            alert('hello')
                        }}
                        />
                </div>
                
            </div>
        </div>
    );
}

export default index;