"use client"
import React, { useState } from 'react';
import String from '@/utils/String'
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { SvgIcon } from '@mui/material';
import { LightMode, MenuOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import useColorMode from '@/hooks/useColorMode';

const menu = [{
    title: 'Startups',
    route: '/startups'
}, {
    title: 'Investors',
    route: '/investors'
}, {
    title: 'Accelerators',
    route: '/accelerators'
}, {
    title: 'Incubators',
    route: '/incubators'
}, {
    title: 'Government Programs',
    route: '/programs'
}, {
    title: 'Events',
    route: '/events'
}]
function index(props) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    const [colorMode, setColorMode] = useColorMode();

    return (
        <Disclosure as="nav">
            <div
                className='bg-white dark:bg-black z-50 float-left w-full h-[100px] fixed text-black dark:text-white'
            >
                <div className='lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden'>
                    <div
                        className='w-1/4 h-[100px] float-left content-center items-center flex href-link px-[100px]'
                    >
                        <Link href={'/'}>
                            <b className='text-3xl'>{String.app_name}</b>
                        </Link>
                    </div>
                    <div
                        className='h-[100px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[100px]'
                    >
                        <div>
                            {
                                menu && menu.map((item) => (
                                    <Link
                                        href={'/' + item.title}
                                        className='href-link cursor-pointer px-[20px] pr-[20px]'>
                                        {
                                            item.title
                                        }
                                    </Link>
                                ))
                            }
                        </div>
                        <div>
                            {
                                ['Login', 'Register'].map((item) => (
                                    <Link
                                        href={'/' + item}
                                        className='href-link cursor-pointer px-[20px] pr-[20px]'>
                                        {
                                            item
                                        }
                                    </Link>
                                ))
                            }
                            <SvgIcon
                                component={LightMode}
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
                            <Link href={'/'}>
                                <b className='text-2xl'>{String.app_name}</b>
                            </Link>
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
                                menu && menu.map((item) => (
                                    <div
                                        className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px]'
                                        onClick={()=> {
                                            router.push('/' + item.title)
                                        }}
                                        >
                                        {
                                            item.title
                                        }
                                    </div>
                                ))
                            }
                            <div className='mt-[50px] w-full float-left'>
                            {
                                ['Login', 'Register'].map((item) => (
                                    <div
                                        className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px]'
                                        onClick={()=> {
                                            router.push('/' + item)
                                        }}
                                        >
                                        {
                                            item
                                        }
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    )
                }
            </div>
        </Disclosure>
    );
}

export default index;