import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Information from '@/components/profile/Information';
import Password from '@/components/profile/Password'
import MFA from '@/components/profile/MFA';
import Details from '@/components/profile/Details'
function Page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="Your Profile"/>

            <div className='w-full float-left mt-[20px]'>
                <Information />
                <Details />
                {/* <Password /> */}
                {/* <MFA /> */}
            </div>
        </div>
    );
}

export default Page;