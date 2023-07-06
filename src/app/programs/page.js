import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
function page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="Accelerator Programs"/>

            <div className='w-full float-left mt-[20px]'>
               <h1 className='text-6xl'>Coming Soon!</h1>
            </div>
        </div>
    );
}

export default page;