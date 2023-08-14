"use client"
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { SvgIcon } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

function Simple(props) {
    const router = useRouter();
    return (
        <div className='w-full float-left flex items-center content-center'>
            {
                props.back && (
                    <SvgIcon
                        component={ChevronLeft}
                        onClick={() => {
                            router.back()
                        }}
                        className='mr-[10px] hover:cursor-pointer hover:text-green-500'
                    />
                )
            }

            <span className='text-2xl font-bold'>
                {
                    props.title
                }
            </span>
        </div>
    );
}

export default Simple;