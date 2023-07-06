import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Information from '@/components/profile/Information';
import Password from '@/components/profile/Password'
import MFA from '@/components/profile/MFA';
function page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="My Company"/>

            <div className='w-full float-left mt-[20px]'>
                <Information />
                <Password />
                <MFA />
            </div>
        </div>
    );
}

export default page;