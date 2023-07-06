"use client"
import React from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Add } from '@mui/icons-material';

function Services(props) {
    return (
        <div className={Style.cardContainer}>
            <h1 className='text-lg font-bold'>Pitch Decks</h1>
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='float-left flex justify-between w-full'>
                    {
                        [60, 120, 300].map((item) => (
                            <div className='w-[30%] h-[200px] border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center content-center hover:cursor-pointer hover:border hover:border-black'>

                                <div className='w-full text-center'>
                                    <span className='w-full float-left text-6xl font-bold'>
                                        <SvgIcon
                                            component={Add} />
                                    </span>

                                    <span className='w-full float-left font-semibold'>
                                        {
                                            item + " seconds pitch video"
                                        }
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;