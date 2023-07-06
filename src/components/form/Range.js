import React from 'react';

function Range(props) {
    return (
        <div className='w-full float-left'>
            <h1 className='text-4xl text-center font-bold text-green-400'>
                {
                    props.currency + ' ' + parseFloat(props.value).toFixed(2)
                }
            </h1>
            <div className='w-full flex items-center content-center justify-between mt-[50px]'>
                <span className='font-semibold text-sm'>
                    {
                        props.minLabel
                    }
                </span>
                <input
                    type="range"
                    value={props.value}
                    min={props.min}
                    max={props.max}
                    onChange={(e) => {
                        props.onChange(e.target.value)
                    }}
                    className="w-[70%] h-3 bg-green-400 rounded-lg appearance-none cursor-pointer range-lg dark:bg-green-400">

                </input>
                <span className='font-semibold text-sm'>
                    {
                        props.maxLabel
                    }
                </span>
            </div>
        </div>
    );
}

export default Range;