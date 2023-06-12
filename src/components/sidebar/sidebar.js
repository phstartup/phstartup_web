"use client"
import String from '@/utils/String';
import { SvgIcon } from '@mui/material';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { HandshakeRounded, SecurityOutlined } from '@mui/icons-material';
const menu = String.loggedInMenu
function sidebar(props) {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div
            className='w-full float-left min-h-[100vh] mt-[80px] bg-white dark:bg-gray-800 relative'>
            {
                menu && menu.map((item) => (
                    <div
                        onClick={() => {
                            router.push('/' + item.route)
                        }}
                        className={'w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold cursor-pointer ' + (pathname.match(item.route) ? 'font-bold' : '')}>
                        <SvgIcon component={item.icon} 
                            className={pathname.match(item.route) ? 'dark:text-white text-black' : 'text-gray-500'}
                        />
                        <span className='text-sm ml-[10px]'>{item.title}</span>
                    </div>
                ))
            }
            <div className='absolute bottom-[100px] left-0 flex items-center content-center h-[50px] justify-center w-full'>
                <SvgIcon component={HandshakeRounded} className='cursor-pointer'/>
                <SvgIcon component={SecurityOutlined} className='ml-[10px] cursor-pointer'/>
            </div>
        </div>
    );
}

export default sidebar;