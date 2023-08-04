"use client"
import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { SvgIcon } from '@mui/material';
import { DarkMode, LightMode, MenuOutlined, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import useColorMode from '@/hooks/useColorMode';
import String from '@/utils/String'

const menu = String.menu
function Content(props) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    const [colorMode, setColorMode] = useColorMode();
    return (
        <div
            className='bg-white dark:bg-black z-50 float-left w-full h-[100px] fixed text-black dark:text-white'
        >
            <div className='lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden'>
                <div
                    className={'w-1/4 h-[100px] float-left content-center items-center flex href-link px-[100px]' + (props.leftColor ? props.leftColor : '')}
                >
                    <Logo />
                </div>
                <div
                    className={'h-[100px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[100px]' + (props.rightColor ? props.rightColor : '')}
                >
                    <div>
                        {
                            menu && menu.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => {
                                        router.push(item.route)
                                    }}
                                    className='href-link cursor-pointer px-[20px] pr-[20px] text-sm'>
                                    {
                                        item.title
                                    }
                                </span>
                            ))
                        }
                        <SvgIcon
                            component={Search}
                            onClick={() => {
                                router.push('/search')
                            }}
                            className='cursor-pointer'
                        />
                    </div>
                    <div>


                        {
                            ['Login', 'Register'].map((item, index) => (
                                <span
                                    onClick={() => {
                                        router.push('/' + item.toLowerCase())
                                    }}
                                    key={index}
                                    className='href-link cursor-pointer px-[20px] pr-[20px] text-sm'>
                                    {
                                        item
                                    }
                                </span>
                            ))
                        }
                        <SvgIcon
                            component={colorMode == 'light' ? DarkMode : LightMode}
                            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            </div>
            <div className='sm:block md:block xs:block lg:hidden 2xl:hidden'>
                <div
                    className='w-full h-[100px] float-left content-center items-center flex href-link justify-between px-[20px] pr-[20px] '
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
                    <div className='w-full h-[calc(100vh-100px)] absolute mt-[100px] px-[20px] pr-[20px] bg-white dark:bg-black'
                    >
                        {
                            menu && menu.map((item, index) => (
                                <div
                                    key={index}
                                    className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                                    onClick={() => {
                                        router.push(item.route.toLowerCase())
                                        setToggle(!toggle)
                                    }}
                                >
                                    {
                                        item.title
                                    }
                                </div>
                            ))
                        }
                        <div
                            className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                            onClick={() => {
                                router.push('/search')
                                setToggle(!toggle)
                            }}
                        >
                            Search
                        </div>
                        <div className='mt-[50px] w-full float-left'>
                            {
                                ['Login', 'Register'].map((item, index) => (
                                    <div
                                        key={index}
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

export default Content;