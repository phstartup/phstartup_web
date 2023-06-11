"use client"
import React from 'react';
import TextField from '@/components/form/text'
import Button from '@/components/buttons/btnRounded'
import { useRouter } from 'next/navigation';

function page(props) {
    const router = useRouter();
    return (
        <div className='bg-white dark:bg-black w-full h-[100vh] float-left'>
            <div className='bg-black dark:bg-white w-1/4 h-[100vh] float-left text-white dark:text-black'>
                <section className='mt-[200px] text-center px-[20px]'>
                    <p className='text-lg text-white dark:text-black mb-[50px]'>
                        Login
                    </p>
                    <TextField
                        type="text"
                        placeholder="Username or Email Address"
                    />

                    <TextField
                        type="password"
                        placeholder="********"
                    />

                    <span 
                        onClick={() => {
                            router.push('/forgetpassword')
                        }}
                        className='w-full h-[50px] float-left hover:font-bold cursor-pointer mt-[50px]'>
                        Forget your password?
                    </span>
                    <Button
                        title="Login"
                        onClick={() => {
                            //
                        }}
                    />

                    <span className='w-full h-[50px] float-left mt-[50px]'>
                        Don't have an account? 
                        <span 
                            onClick={() => {
                                router.push('/register')
                            }}
                            className='font-bold cursor-pointer px-2'>Register</span>
                    </span>
                </section>
            </div>
            <div className='bg-white dark:bg-black w-3/4 h-[100vh] float-left text-black dark:text-white'>
                <div className='flex items-center content-center h-[100vh] w-full px-[50px]'>
                    <section>
                        <p className='text-6xl text-black dark:text-white font-bold w-full float-left'>Help us build the Startup Ecosystem of the Philippines</p>
                        <ul className='text-2xl text-black dark:text-white w-full float-left mt-[50px]'>
                            <li className='float-left w-full'>A Free directory for Startups. </li>
                            <li className='float-left w-full'>Add your startup profile</li>
                            <li className='float-left w-full'>Share your deck and grow your network.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default page;