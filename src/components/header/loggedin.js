"use client"
import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { SvgIcon } from '@mui/material';
import { DarkMode, LightMode, MenuOutlined, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import useColorMode from '@/hooks/useColorMode';
import String from '@/utils/String'
import Image from 'next/image'
import Profile from '@/assets/profile.png'

const menu = String.loggedInMenu
function loggedin(props) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    const [colorMode, setColorMode] = useColorMode();
    return (
        <div
            className='z-50 float-left w-full h-[80px] fixed bg-white dark:bg-gray-800'
        >
            <div className='lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden'>
                <div
                    className={'w-1/4 h-[80px] float-left content-center items-center flex href-link px-[20px]'}
                >
                    <Logo />
                </div>
                <div
                    className={'h-[80px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[20px]'}
                >
                    <div>
                    </div>
                    <div className='h-[80px] flex content-center items-center'>
                        <span className='href-link cursor-pointer px-[20px] pr-[20px] text-sm float-left font-bold'>
                            Hi Kennette!
                        </span>
                        <div className='h-[30px] w-[30px] mr-[10px] float-left'>
                            <Image
                                src={Profile}
                                width={'30px'}
                                height={'30px'}
                                className='rounded-[15px]'
                                alt='Sample Image'
                            />
                        </div>
                        <SvgIcon
                            component={colorMode == 'light' ? DarkMode: LightMode}
                            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                            className='cursor-pointer float-left'
                        />
                    </div>
                </div>
            </div>
            <div className='sm:block md:block xs:block lg:hidden 2xl:hidden'>
                <div
                    className='w-full h-[80px] float-left content-center items-center flex href-link justify-between px-[20px] pr-[20px] '
                >
                    <span>
                        <Logo />
                    </span>
                    <SvgIcon
                        component={MenuOutlined}
                        className='cursor-pointer'
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                    />
                </div>
            </div>
            {
                toggle && (
                    <div className='w-full h-[calc(100vh-80px)] absolute mt-[80px] px-[20px] pr-[20px] bg-white dark:bg-gray-800'
                    >
                        {
                            menu && menu.map((item) => (
                                <div className='w-full float-left h-[60px] flex items-center content-center hover:font-bold cursor-pointer'>
                                    <SvgIcon component={item.icon} className='text-gray-500'/>
                                    <span className='text-sm ml-[10px]'>{item.title}</span>
                                </div>
                            ))
                        }
                        <div className='mt-[50px] w-full float-left'>
                            {
                                ['Logout'].map((item) => (
                                    <div
                                        className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                                        onClick={() => {
                                            router.push('/' + item.toLowerCase())
                                            setToggle(!toggle)
                                        }}
                                    >
                                        {
                                            item
                                        }
                                    </div>
                                ))
                            }
                            <div
                                className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                                onClick={() => {
                                    setColorMode(colorMode === "light" ? "dark" : "light")
                                    setToggle(!toggle)
                                }}
                            >
                                {
                                    colorMode == 'dark' ? 'Light Mode' : 'Dark Mode'
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default loggedin;