import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import SimpleComingSoon from '@/components/soon/Simple';
function page(props) {
    return (
        <div className='w-full float-left'>

            <div className='w-full float-left mt-[20px]'>
                <SimpleComingSoon
                    title="Messages"
                    description="Allow everyone to send and receive messages."
                />
            </div>
        </div>
    );
}

export default page;