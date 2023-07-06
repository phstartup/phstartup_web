"use client"
import React from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Select from '@/components/form/Select';
import String from '@/utils/String';

function Information(props) {
    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Statup Details</span>
                <Button
                    style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                    title="Edit"
                    onPress={() => {
                    }}
                />
            </div>
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Startup name</h1>
                    <TextInput
                        type="text"
                        placeholder="Startup Name"
                    />
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Short description</h1>
                    <TextArea
                        type="text"
                        placeholder="Oxygen type of Clothes"
                    />
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Industry</h1>
                    <Select
                        type="text"
                        data={String.industries}
                        placeholder="Select Industries"
                    />
                </div>
            </div>
        </div>
    );
}

export default Information;