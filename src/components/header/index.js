import React from 'react';
import String from '@/utils/String'
import Color from '@/utils/Color'
import Link from 'next/link';

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
        <div style={{
            background: Color.background
        }}
            className='header float-left w-full h-[100px]'
        >
            <div
            className='w-1/4 h-[100px] float-left content-center items-center flex href-link px-[100px]'
            >
                <Link href={'/'}>
                <h3><b>{String.app_name}</b></h3>
                </Link>
            </div>
            <div
            className='h-[100px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[100px]'
            >
                <span>
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
                </span>
                <span>
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
                </span>
            </div>
        </div>
    );
}

export default index;