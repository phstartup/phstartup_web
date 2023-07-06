"use client"
import React, { useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import Modal from '@/components/modal/index'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'

function Services(props) {
    const [createFlag, setCreateFlag] = useState(false)

    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Title</h1>
                    <TextInput
                        type="text"
                        placeholder="Title"
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Description</h1>
                    <TextArea
                        type="text"
                        placeholder="Oxygen type of Clothes"
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Video Link(Optional)</h1>
                    <TextInput
                        type="text"
                        placeholder="tags"
                    />
                </div>

            </div>
        )
    }


    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Services</span>
                <Button
                    style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                    title="Add"
                    onPress={() => {
                        setCreateFlag(true)
                    }}
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
            </div>

            {
                createFlag && (
                    <Modal
                        title="Add A Service"
                        onClose={() => {
                            setCreateFlag(!createFlag)
                        }}
                        content={renderContent}
                        footer={() => {
                            return (
                                <div className='w-full float-left'>
                                    <Button
                                        style={' bg-red-400 text-white'}
                                        title="Cancel"
                                        onPress={() => {
                                            setCreateFlag(!createFlag)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title="Save"
                                        onPress={() => {
                                        }}
                                    />
                                </div>
                            )
                        }}
                    />
                )
            }
        </div>
    );
}

export default Services;