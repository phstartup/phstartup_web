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
        className='float-left w-screen relative h-4/5'
        >
            <div
            className='float-left w-screen h-4/5'
            >
                <Image
                    src={SampleImage}
                    className='w-full h-full'
                    alt='Sample Image'
                />
            </div>
            <div
            className='w-full absolute bottom-10 left-0 px-[100px]'
            >
                <span className='text-6xl'>Prosperna</span>
                <div
                className='left w-full flex items-center content-center'
                >
                    <SvgIcon
                        component={PlayCircle}
                        className='text-6xl float-let cursor-pointer'
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