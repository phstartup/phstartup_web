"use client"
import React, { useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Select from '@/components/form/Select';
import String from '@/utils/String';
import { useSession  } from 'next-auth/react';

function Information(props) {
    const [editFlag, setEditFlag] = useState(false)
    const { data: session } = useSession()

    console.log({
        data: session?.data
    })

    const renderFields = () => {
        return (
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Startup name</h1>
                    <TextInput
                        type="text"
                        placeholder="Startup Name"
                    />
                </div>
                <div className='w-full float-left text-sm'>
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

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Website</h1>
                    <TextInput
                        type="text"
                        placeholder="Address"
                    />
                </div>


                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Email Address</h1>
                    <TextInput
                        type="text"
                        placeholder="Email Address"
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Contact #</h1>
                    <TextInput
                        type="text"
                        placeholder="Contact #"
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Address</h1>
                    <TextInput
                        type="text"
                        placeholder="Address"
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Total Employees</h1>
                    <TextInput
                        type="text"
                        placeholder="Employees"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Statup Details</span>
                <Button
                    style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                    title={editFlag ? "Close" : "Edit"}
                    onPress={() => {
                        setEditFlag(!editFlag)
                    }}
                />
            </div>
            {
                editFlag && renderFields()
            }

        </div>
    );
}

export default Information;