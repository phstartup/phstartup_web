"use client"
import React from 'react';
import Logo from '@/components/header/logo'
import String from '@/utils/String'
import { SvgIcon } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Style from '@/utils/Style';

useRouter

const cards = 'lg:w-1/3 2x:w-1/3 xl:w-1/3 md:w-full sm:w-full xs:w-full float-left'
function Index(props) {
    const router = useRouter();
    return (
        <div
            className={'float-left min-h-[500px] overflow-hidden bg-white dark:bg-purple text-gray-700 dark:text-white w-full pb-[50px] ' + Style.padding}
        >
        </div>
    );
}

export default Index;