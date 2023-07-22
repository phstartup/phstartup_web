import { Close } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import React from 'react';

function Notifications(props) {
    return (
        <div className='absolute top-[80px] right-0 w-[450px] h-[calc(100vh-80px)] bg-white dark:bg-gray-800 border-l-[1px] border-gray-200 dark:border-gray-700'>
            <div className='w-full float-left h-[80px] px-[20px] flex justify-between items-center content-center border-b-[1px] border-gray-200 dark:border-gray-700'>
                <span className='font-semibold'>
                    Notifications
                </span>
                <SvgIcon
                    onClick={() => {
                        props.onClose()
                    }}
                    className='cursor-pointer'
                    component={Close}
                />
            </div>
            <div className='w-full float-left h-[calc(100vh-160px)] overflow-scroll'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                        <div className='cursor-pointer float-left w-full px-[20px] py-[20px] border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'>
                            <span className='w-full float-left text-sm mb-[10px] font-semibold'>
                                Kennette
                            </span>
                            <span className='w-full float-left text-sm'>
                                This is a test notifications.
                            </span>
                            <span className='w-full float-left text-xs text-green-500 mt-[10px] font-semibold'>
                                10 minutes ago
                            </span>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Notifications;