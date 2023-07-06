"use client"
import React from 'react';
import Style from '@/utils/Style';
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Profile from '@/assets/profile.png'
import { useSession } from 'next-auth/react';


function Information(props) {
    const router = useRouter()
    const {data:session} = useSession()
    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className='h-[200px] w-[200px] mr-[10px] float-left'>
                <img
                    src={session?.user?.image}
                    width={200}
                    height={200}
                    className='rounded-[100px] cursor-pointer border-2 border-green-500 dark:border-green-500'
                    alt={session?.user?.name}
                />
            </div>
        )
    }
    return (
        <div className={Style.cardContainer}>
            <h1 className='text-lg font-bold'>Personal Information</h1>
            <div className='w-full float-left'>
                <div className='lg:w-1/2 xl:w-1/2 2xl:w-1/2 sm:w-full md:w-full xs:w-full float-left'>
                    <div className='w-full float-left text-sm mt-[20px]'>
                        <h1 className='text-sm mb-[20px]'>Email Address</h1>
                        <TextInput
                            type="text"
                            placeholder="Email Address"
                            value={session?.user?.email}
                        />
                    </div>


                    <div className='w-full float-left text-sm mt-[20px]'>
                        <h1 className='text-sm mb-[20px]'>Complete Name</h1>
                        <TextInput
                            type="text"
                            placeholder="Complete Name"
                            value={session?.user?.name}
                        />
                    </div>
                </div>
                <div className='lg:w-1/2 xl:w-1/2 2xl:w-1/2 sm:w-full md:w-full xs:w-full float-right'>
                    <h1 className='text-sm mb-[20px]'>Profile Picture</h1>
                    {
                        renderProfile()
                    }
                </div>
            </div>
        </div>
    );
}

export default Information;