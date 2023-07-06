import React from 'react';

function MovingLogo(props) {
    return (
        <div className='w-full float-left'>
            <div className='w-full float-left'>
                <div id='block-blue' className='logo-blocks rounded-lg'></div>
                <div id='block-orange' className='logo-blocks rounded-lg ml-[50px]'></div>
                <div id='block-red' className='logo-blocks rounded-lg ml-[50px]'></div>
            </div>
            <div className='w-full float-left mt-[20px]'>
                <div id='block-magenta' className='logo-blocks rounded-lg'></div>

            </div>

            <div className='w-full float-left mt-[20px]'>
                <div id='block-purple' className='logo-blocks rounded-lg'></div>
                <div id='block-green' className='logo-blocks rounded-lg ml-[50px]'></div>
            </div>

            <div className='w-full float-left mt-[20px]'>
                <div id='block-black' className='logo-blocks rounded-lg'></div>
            </div>


        </div>
    );
}

export default MovingLogo;