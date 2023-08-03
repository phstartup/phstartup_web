"use client"
import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Profile from '@/assets/profile.png'
import Sample from '@/assets/sample.png'
import Image from 'next/image';
import Button from '@/components/buttons/btn'
import Filter from '@/components/form/Filter';
import TextInput from '@/components/form/text'

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import Style from '@/utils/Style';

const programs = [{
    title: 'QBO Arise +',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'DOHE Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'Startup Island Philippines Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'She Loves Tech',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'QBO Arise +',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'DOHE Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'Startup Island Philippines Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'She Loves Tech',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}]


const availableStatuses = ['Manila', 'Cebu', 'Davao'];
function page(props) {


    const handleFilter = (status) => {
        setFilter(status)
    }

    const renderPagination = () => {
        return (
            <div
                className="float-right mt-[20px]"
            >
                <span className="cursor-pointer text-green-400 font-bold">
                    <SvgIcon
                        component={ChevronLeft}
                    />
                    Prev

                </span>

                <span className='ml-[20px] cursor-pointer text-green-400 font-bold'>
                    Next
                    <SvgIcon
                        component={ChevronRight}
                    />
                </span>
            </div>
        )
    }

    const renderFilter = () => {
        return (
            <div className='w-full float-left lg:flex xl:flex 2xl:flex justify-between mt-[20px]'>
                <div className='lg:w-[40%] xl:w-[40%] 2xl:w-[40%]'>
                    <TextInput
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <Filter availableStatuses={availableStatuses} onFilter={handleFilter} />
            </div>
        )
    }
    return (
        <div className={`w-full float-left mt-[100px] ` + Style.padding}>
            <Breadcrumbs title="Startup Events" />


            <div className='w-full float-left mt-[20px]'>
                {
                    renderFilter()
                }
            </div>
            <div className='w-full float-left mt-[20px]'>
                {
                    programs && programs.map((item, index) => (
                        <div
                            key={index}
                            className='lg:w-full float-left rounded-2xl h-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:cursor-pointer mb-[50px]'>

                            <div className='w-[250px] h-[250px] float-left overflow-hidden'>
                                <Image
                                    src={item.image}
                                    height={250}
                                    width={250}
                                    className='rounded-2xl'
                                    alt={item.title}
                                />
                            </div>

                            <div className='w-[calc(100%-250px)] h-[250px] float-left p-[20px] text-justify'>
                                <span className='text-sm font-bold w-full float-left'>
                                    {
                                        item.title
                                    }
                                </span>
                                <span className='text-sm w-full float-left'>
                                    {
                                        item.description
                                    }
                                </span>
                                <span className='w-full float-left mt-[20px]'>
                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                        title="Visit Event"
                                        onPress={() => {
                                        }}
                                    />
                                </span>

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-full float-left mt-[20px]'>
                {
                    renderPagination()
                }
            </div>
        </div>
    );
}

export default page;