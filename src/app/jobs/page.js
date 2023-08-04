import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import SimpleComingSoon from '@/components/soon/Simple';
function Page(props) {
    return (
        <div className='w-full float-left'>

            <div className='w-full float-left mt-[20px]'>
                <SimpleComingSoon
                    title="Jobs"
                    description="Allow a startup / founders to connect with the right investors, co-founders, accelerators and more"
                />
            </div>
        </div>
    );
}

export default Page;