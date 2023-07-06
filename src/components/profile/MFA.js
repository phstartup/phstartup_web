"use client"
import React from 'react';
import Style from '@/utils/Style';
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'

function MFA(props) {
    return (
        <div className={Style.cardContainer}>
            <h1 className='text-lg font-bold'>2FA Settings</h1>

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
                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                        title="Add"
                        onPress={() => {
                        }}
                    />
                </span>

            </div>
        </div>
    );
}

export default MFA;