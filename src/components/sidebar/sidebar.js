"use client"
import String from '@/utils/String';
import { SvgIcon } from '@mui/material';
import { Tooltip, Button } from "@material-tailwind/react";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { HandshakeRounded, Logout, SecurityOutlined, Settings } from '@mui/icons-material';
import Style from '@/utils/Style';
import { signOut } from 'next-auth/react';
const menu = String.loggedInMenu
function Sidebar(props) {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div
            className={`w-full float-left min-h-[100vh] mt-[80px] relative bg-white dark:bg-black border-r-[1px] border-r-gray-200 dark:border-r-gray-700`}>
            {
                menu && menu.map((item, index) => (
                    <div
                        onClick={() => {
                            router.push('/' + item.route)
                        }}
                        key={index}
                        className={'w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold  cursor-pointer ' + (pathname.match(item.route) ? 'font-bold' : '')}>
                        <SvgIcon component={item.icon}
                            className={pathname.match(item.route) ? 'font-bold' : 'text-gray-500'}
                        />
                        <span className='text-sm ml-[10px]'>{item.title}</span>
                    </div>
                ))
            }
            <div className='absolute bottom-[100px] left-0 flex items-center content-center h-[50px] justify-center w-full'>
                <Tooltip content="Terms & Conditions">
                    <SvgIcon
                        onClick={() => {
                            router.push('/docs/terms&conditions')
                        }}
                        component={HandshakeRounded} className='cursor-pointer' />
                </Tooltip>
                <Tooltip content="Privacy Policy">
                    <SvgIcon
                        onClick={() => {
                            router.push('/docs/privacypolicy')
                        }}
                        component={SecurityOutlined} className='ml-[10px] cursor-pointer' />
                </Tooltip>
                <Tooltip content="Settings">
                    <SvgIcon
                        onClick={() => {
                            router.push('/settings')
                        }}
                        component={Settings} className='ml-[10px] cursor-pointer' />
                </Tooltip>

                <Tooltip content="Logout">
                    <SvgIcon
                        onClick={() => {
                            signOut({
                                callbackUrl: `${window.location.origin}`
                            })
                        }}
                        component={Logout} className='ml-[10px] cursor-pointer' />
                </Tooltip>

            </div>
        </div>
    );
}

export default Sidebar;