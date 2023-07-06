import React from 'react';

function Range(props) {
    return (
        <div classNameName='w-full float-left'>
            <div className="flex justify-center items-center">
                <div className="relative w-full justify-between flex items-center content-center">
                    <span>
                        {props.min}
                    </span>
                    <div className='w-3/4'>
                        <input type="range"
                            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" />

                        <input type="range"
                            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" />

                        <div className="relative z-10 h-2">
                            <div
                                className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-green-400"></div>
                            <div 
                                style={{
                                    right: '0%',
                                    left: '100%'
                                }}
                                className="absolute z-20 top-0 bottom-0 rounded-md bg-gray-700"></div>
                            <div
                                style={{
                                    right: '50%',
                                    left: '50%'
                                }}
                                className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-400 rounded-full -mt-2 -ml-1"></div>
                            <div
                                style={{
                                    right: '80%',
                                    left: '80%'
                                }}
                                className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-400 rounded-full -mt-2 -mr-3"></div>
                        </div>

                    </div>
                    <span>
                        {props.max}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Range;