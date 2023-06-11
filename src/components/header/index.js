"use client"
import React from 'react';
import String from '@/utils/String'
import Color from '@/utils/Color'
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { SvgIcon } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

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
    return (
        <Disclosure as="nav">
            <div style={{
                background: Color.background
            }}
                className='z-[999px] float-left w-full h-[100px] fixed'
            >
                <div className='hidden lg:block xl:block 2xl:block'>
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
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block md:block xs:block'>
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
                        />
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}

export default index;