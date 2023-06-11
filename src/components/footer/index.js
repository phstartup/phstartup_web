import React from 'react';

function index(props) {
    return (
        <div
            className='bg-white dark:bg-black text-black dark:text-white h-[100px] flex content-center items-center float-left px-[100px] pr-[100px] justify-between w-full'
        >
            <span>
                A non-profit organization.
            </span>
            <span className='cursor-pointer hover:font-bold' >
               Be A Contributor
            </span>
        </div>
    );
}

export default index;