"use client"
import String from '@/utils/String';
import { SvgIcon } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
const menu = String.loggedInMenu
function sidebar(props) {
    const pathname = usePathname()
    return (
        <div
            className='w-full float-left min-h-[100vh] mt-[80px] bg-white dark:bg-gray-800'>
            {
                menu && menu.map((item) => (
                    <div
                        className={'w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold cursor-pointer ' + (pathname.match(item.route) ? 'font-bold' : '')}>
                        <SvgIcon component={item.icon} 
                            className={pathname.match(item.route) ? 'dark:text-white text-black' : 'text-gray-500'}
                        />
                        <span className='text-sm ml-[10px]'>{item.title}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default sidebar;