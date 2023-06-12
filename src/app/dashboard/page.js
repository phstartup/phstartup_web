import React from 'react';
import Header from '@/components/header/loggedin'
import Sidebar from '@/components/sidebar/sidebar'
function page(props) {
    return (
        <div className='float-left w-full min-h-full bg-white dark:bg-black text-black dark:text-white'>
            <Header />
            <div className='w-full min-h-[100vh] lg:block 2xl:block sm:hidden xs:hidden md:hidden'>
                <Sidebar />
            </div>

        </div>
    );
}

export default page;