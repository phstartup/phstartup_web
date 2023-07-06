import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Milestones from '@/components/mycompany/milestones';
import Information from '@/components/mycompany/information';
import Videos from '@/components/mycompany/Videos';
import Services from '@/components/mycompany/Services'
function page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="My Company" />

            <div className='w-full float-left mt-[20px]'>
                <Videos />
                <Information />
                <Services />
                <Milestones />
            </div>
        </div>
    );
}

export default page;