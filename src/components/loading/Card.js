import React from 'react';

function Card(props) {
    return (
        <div className='w-full float-left'>
            <div role="status" className="w-full border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="w-full">
                    <div className="h-[100px] bg-gray-300 rounded-lg dark:bg-gray-600 w-full mb-[20px]"></div>
                    <div className="w-full h-[50px] bg-gray-200 rounded-2xl dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Card;