import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
function page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="Application Contributors" />

            <div className='w-full float-left mt-[50px] text-justify text-sm'>
                <p>
                    <b>What is Lorem Ipsum?</b>
                </p>
            </div>
        </div>
    );
}

export default page;