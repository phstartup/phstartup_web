import React from 'react';

function page(props) {
    return (
        <div className='bg-white dark:bg-black w-full h-[100vh] float-left'>
            <div className='bg-black dark:bg-white w-1/4 h-[100vh] float-left text-white dark:text-black'>

            </div>
            <div className='bg-white dark:bg-black w-3/4 h-[100vh] float-left text-black dark:text-white'>
                <div className='flex items-center content-center h-[100vh] w-full px-[50px]'>
                    <section>
                        <p className='text-6xl text-black dark:text-white font-bold w-full float-left'>Let's build the Startup Ecosystem of the Philippines</p>
                        <ul className='text-2xl text-black dark:text-white w-full float-left mt-[50px]'>
                            <li className='float-left w-full'>A Free directory for Startups. </li>
                            <li className='float-left w-full'>Add your startup profile</li>
                            <li className='float-left w-full'>Share your deck and grow your network.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default page;