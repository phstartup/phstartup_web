"use client"
import { Expand, ExpandMore, Settings } from '@mui/icons-material';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';


const dropdownMenu = [{
    title: 'Last 7 Days'
}, {
    title: 'Last Month'
}, {
    title: 'Last 3 Months'
}, {
    title: 'Last 6 Months'
}, {
    title: 'All time'
}]

function footer(props) {
    const [dropdown, setDropdown] = useState(false)
    const [selected, setSelected] = useState(dropdownMenu[0].title)

    const renderDropdown = () => {
        return (
            <div className={"z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] left-0 bottom-[80px] dark:bg-gray-900 dark:divide-gray-800 border border-gray-200 dark:border-gray-700 " + (dropdown == false ? 'hidden' : '')}>
                <ul className="text-xs text-gray-700 dark:text-gray-200">
                    {
                        dropdownMenu && dropdownMenu.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setSelected(item.title)
                                    setDropdown(false)
                                }}
                            >
                                <span className="block px-3 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>

        )
    }

    return (
        <div className='w-full float-left flex justify-between text-sm'>
            <div className='relative h-[60px] items-center content-center'>
                <span 
                    onClick={() => {
                        setDropdown(true)
                    }}
                    className='cursor-pointer'>
                    {
                        selected
                    }
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