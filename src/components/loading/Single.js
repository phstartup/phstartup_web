import React from 'react';

function Card(props) {
    return (
        <div className='w-full float-left'>
            <div role="status" className="w-full rounded animate-pulse">
                <div className="w-full">
                    <div className="h-[100px] bg-gray-300 rounded-lg dark:bg-gray-600 w-full mb-[20px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Card;