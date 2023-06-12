"use client"
import React from 'react';
import TextField from '@/components/form/text'
import Button from '@/components/buttons/btnRounded'
import { useRouter } from 'next/navigation';
import Header from '@/components/header/blackwhite'
import Footer from '@/components/footer'

function page(props) {
    const router = useRouter();
    return (
        <div className='bg-white dark:bg-black w-full h-[100vh] float-left'>

            <Header />
            <div className='bg-black dark:bg-white h-[100vh] float-left text-white dark:text-black lg:w-1/4 2xl:w-1/4  sm:w-full md:w-full xs:w-full'>
                <section className='mt-[250px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]'>
                    <p className='text-lg text-white dark:text-black mb-[50px]'>
                        Register
                    </p>
                    <TextField
                        type="text"
                        placeholder="Email Address"
                    />

                    <TextField
                        type="password"
                        placeholder="Password"
                    />

                    <TextField
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <Button
                        title="Register"
                        onClick={() => {
                            //
                        }}
                    />

                    <span className='w-full h-[50px] float-left mt-[50px]'>
                        Have an account?
                        <span
                            onClick={() => {
                                router.push('/login')
                            }}
                            className='font-bold cursor-pointer px-2'>Login</span>
                    </span>
                </section>
            </div>
            <div className='bg-white dark:bg-black h-[100vh] float-left text-black dark:text-white lg:w-3/4 2xl:w-3/4 sm:w-full md:w-full xs:w-full'>
                <div className='flex items-center content-center h-[100vh] w-full px-[50px]'>
                    <section>
                        <p className='text-6xl text-black dark:text-white font-bold w-full float-left'>Let's Build the Startup Ecosystem in the Philippines</p>
                        <ul className='text-2xl text-black dark:text-white w-full float-left mt-[50px]'>
                            <li className='float-left w-full'>Share your Deck and build your profile </li>
                            <li className='float-left w-full'>Grow your network easily</li>
                            <li className='float-left w-full'>Find a match</li>
                            <li className='float-left w-full'>Join events</li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default page;