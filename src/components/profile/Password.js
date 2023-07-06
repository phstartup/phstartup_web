"use client"
import React from 'react';
import Style from '@/utils/Style';
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'

function Password(props) {
    return (
        <div className={Style.cardContainer}>
            <h1 className='text-lg font-bold'>Change Password</h1>
            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>Old Password</h1>
                <TextInput
                    type="password"
                    placeholder="*******"
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>New Password</h1>
                <TextInput
                    type="password"
                    placeholder="*******"
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>Confirm New Password</h1>
                <TextInput
                    type="password"
                    placeholder="*******"
                />
            </div>

            <div className='w-full h-[50px] float-left mt-[20px]'>

                <span className='float-left'>
                    <Button
                        style={' bg-green-400 text-white'}
                        title="Save"
                        onPress={() => {
                        }}
                    />
                </span>

            </div>
        </div>
    );
}

export default Password;