"use client"
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import { SvgIcon } from '@mui/material';
import React from 'react';

function footer(props) {
    return (
        <div className='w-full float-left h-[60px] items-center content-center'>
            <span className='float-right cursor-pointer text-green-400'>
                <span className='text-xs font-bold'>
                    {props.title}
                </span>
                <SvgIcon 
                    component={ChevronRightOutlined}
                    className='font-bold'
                    />
            </span>
            
        </div>
    );
}

export default footer;