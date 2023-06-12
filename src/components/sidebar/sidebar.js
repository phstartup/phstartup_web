"use client"
import String from '@/utils/String';
import { SvgIcon } from '@mui/material';
import React from 'react';
const menu = String.loggedInMenu
function sidebar(props) {
    return (
        <div className='w-[15%] float-left min-h-[100vh] mt-[80px]'>
            {
                menu && menu.map((item) => (
                    <div className='w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold cursor-pointer'>
                        <SvgIcon component={item.icon} />
                        <span className='text-sm ml-[10px]'>{item.title}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default sidebar;