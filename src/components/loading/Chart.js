import React from 'react';

function Model(props) {
    return (
        <div className={`w-full float-left h-[${props.height}px]`}>
            <div role="status" className="w-full rounded animate-pulse">
                <div className="w-full">
                    <div className={`h-[${props.height ? props.height : '500'}px] bg-gray-300 rounded-lg dark:bg-gray-600 w-full mb-[20px]`}></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Model;