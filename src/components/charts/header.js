import React from 'react';

function header(props) {
    return (
        <div className='w-full float-left h-[80px] flex items-center content-center justify-between'>
            <span className='text-lg font-bold text-green-400'>
                {
                    props.title
                }
            </span>
            {
                props.rightTitle && (
                    <span className='text-lg font-bold text-gray-600'>
                        {
                            props.rightTitle
                        }
                    </span>
                )
            }
        </div>
    );
}

export default header;