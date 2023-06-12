import React from 'react';

function header(props) {
    return (
        <div className='w-full float-left h-[80px] flex items-center content-center'>
            <span className='text-lg font-bold'>
                {
                    props.title
                }
            </span>
        </div>
    );
}

export default header;