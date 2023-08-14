"use client"
import React from 'react';
import Logo from '@/components/header/logo'
import String from '@/utils/String'
import { SvgIcon } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';
import { useRouter } from 'next/navigation';
import Style from '@/utils/Style';

const cards = 'lg:w-1/3 2x:w-1/3 xl:w-1/3 md:w-full sm:w-full xs:w-full float-left'
function Index(props) {
    const router = useRouter();
    return (
        <div
            className={'float-left min-h-[500px] overflow-hidden bg-white dark:bg-black text-black dark:text-white w-full pb-[50px] ' + Style.padding}
        >
            <div className='mt-[100px] w-full footer-bg-light dark:footer-bg-dark overflow-hidden'>
                <div className={cards}>
                    <div className='w-full float-left'>
                        <div className='w-full float-left'>
                            <Logo />
                        </div>
                    </div>
                    <div className='w-full float-left text-lg mt-[20px] font-bold'>
                        Open Startup & Business Community
                    </div>


                </div>

                <div className={cards}>
                    <div className='w-full float-left mt-[20px]'>
                        <h1 className='font-bold text-sm mb-[20px]'>DOCUMENTS</h1>
                    </div>
                </div>

                <div className={cards}>
                    <div className='w-full float-left mt-[20px]'>
                        <h1 className='font-bold text-sm mb-[20px]'>PROGRAMS</h1>
                        <p
                            onClick={() => {
                                router.push('/contributors')
                            }}
                            className='mt-[20px] mb-[10px] cursor-pointer hover:underline text-sm'>Contributors</p>

                    </div>
                </div>
            </div>
            <div className='mt-[50px] w-full border-t-[1px] border-gray-200 dark:border-gray-700 lg:flex xl:flex 2xl:flex sm:flex-row xs:flex-row md:flex-row items-center content-center justify-between min-h-[100px] overflow-hidden'>
                <span className='float-left lg:w-[20%] xl:w-[20%] 2xl:w-[20%] sm:w-[100%] xs:w-[100%] md:w-[100%] flex items-center content-center justify-between'>
                    <SvgIcon component={Facebook}
                        onClick={() => {
                            router.push('https://www.facebook.com', '_blank')
                        }}
                        className='text-2xl cursor-pointer  hover:text-green-400' />
                    <SvgIcon component={Twitter}
                        onClick={() => {
                            router.push('https://twitter.com', '_blank')
                        }}
                        className='text-2xl cursor-pointer hover:text-green-400' />
                    <SvgIcon component={Instagram}
                        onClick={() => {
                            router.push('https://www.instagram.com/', '_blank')
                        }}
                        className='text-2xl cursor-pointer  hover:text-green-400' />
                    <SvgIcon component={LinkedIn}
                        onClick={() => {
                            router.push('https://www.linkedin.com/', '_blank')
                        }}
                        className='text-2xl cursor-pointer  hover:text-green-400' />
                </span>
                <span className='float-left lg:w-[80%] xl:w-[80%] 2xl:w-[80%] sm:w-[100%] xs:w-[100%] md:w-full lg:block 2xl:block xl:block sm:hidden xs:hidden md:hidden'>
                    <span
                        className='text-sm float-right'><b className='mr-[20px]'>|</b>Cebu City, Philippines</span>
                    <span
                        onClick={() => {
                            router.push('/docs/privacypolicy')
                        }}
                        className='cursor-pointer hover:underline text-sm mr-[20px] float-right'>Privacy Policy</span>
                    <span
                        onClick={() => {
                            router.push('/docs/terms&conditions')
                        }}
                        className='cursor-pointer hover:underline text-sm float-right mr-[20px]'>Terms & Conditions</span>
                </span>
                <div className='lg:hidden xl:hidden 2xl:hidden sm:block xs:block md:block w-full float-left'>

                    <span
                        onClick={() => {
                            router.push('/docs/privacypolicy')
                        }}
                        className='cursor-pointer hover:underline text-sm float-left w-full'>Privacy Policy</span>
                    <span
                        onClick={() => {
                            router.push('/docs/terms&conditions')
                        }}
                        className='cursor-pointer hover:underline text-sm float-left w-full'>Terms & Conditions</span>
                    <span
                        className='text-sm float-left w-full'>Cebu City, Philippines</span>

                </div>
            </div>
        </div>
    );
}

export default Index;