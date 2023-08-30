"use client"
import { Expand, ExpandMore, Settings } from '@mui/icons-material';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';


const dropdownMenu = [{
    title: 'Settings',
    icon: Settings,
    route: '/settings'
}]

function footer(props) {
    const [dropdown, setDropdown] = useState(false)

    const renderDropdown = () => {
        return (
            <div className={"z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] left-0 bottom-[80px] dark:bg-gray-800 dark:divide-gray-800 border border-gray-200 dark:border-gray-700 " + (dropdown == false ? 'hidden' : '')}>
                <ul className="text-sm text-gray-700 dark:text-gray-200">
                    {
                        dropdownMenu && dropdownMenu.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    router.push(item.route)
                                }}
                            >
                                <span className="block px-3 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</span>
                            </li>
                        ))
                    }

                </ul>
                <div className="mb-[20px]">
                    <span
                        className="block px-3 cursor-pointer py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                </div>
            </div>

        )
    }

    return (
        <div className='w-full float-left flex justify-between text-sm'>
            <div className='relative h-[60px] items-center content-center'>
                <span 
                    onClick={() => {
                        setDropdown(!dropdown)
                    }}
                    className='cursor-pointer'>
                    Last 7 Days
                    <SvgIcon 
                        classRoom="ml-[5px]"
                        component={ExpandMore} />
                </span>
                {
                    renderDropdown()
                }
            </div>
            <span className='cursor-pointer text-green-400 h-[60px] items-center content-center'>
                <span className='font-bold'>
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