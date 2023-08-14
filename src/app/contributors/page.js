"use client"
import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from 'next-auth/react';
import Style from '@/utils/Style';
import String from '@/utils/String';
function Page(props) {
    const { data: session } = useSession()
    return (
        <div className={'w-full float-left min-h-[100vh] overflow-hidden ' + (session ? '' : 'mt-[100px] ' + Style.padding)}>
            <Breadcrumbs title="Contributors" />

            <div className='w-full float-left mt-[50px] text-justify text-sm'>
                <p className='text-sm mb-[20px]'>
                    <b>Help us improve the platform.</b>
                </p>
                <p>
                    Join our whatsapp group:
                </p>
                <p>
                    {
                        String.whatsApp
                    }
                </p>
            </div>
        </div>
    );
}

export default Page;