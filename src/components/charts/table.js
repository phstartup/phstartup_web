import React from 'react';
import Header from './header'

function body(props) {
    return (
        <div
            style={{
                border: 'solid 1px #eee'
            }}
            class="mx-auto lg:w-[49%] 2xl:w-[49%] sm:w-full xs:w-full md:w-full h-[400px] float-left bg-white rounded-[10px] px-[20px] mb-[20px]">
            <Header title={props.title} />
            <div className='w-full float-left h-[calc(400px - 80px)]'>
                <div style={{
                    borderBottom: 'solid 1px #eee'
                }}
                    className='h-[50px] w-full flex items-center content-center justify-between text-xs'
                >
                    {
                        props.header && props.header.length > 0 && props.header.map((item) => (

                            <span className='float-left font-bold'>{item}</span>

                        ))
                    }
                </div>
                {
                    props.data && props.data.length > 0 && props.data.map((item) => (
                        <div style={{
                            borderBottom: 'solid 1px #eee'
                        }}
                            className='h-[50px] w-full flex items-center content-center justify-between text-xs'
                        >
                            <span>
                                {
                                    item.title
                                }
                            </span>
                            <span>
                                {
                                    item.value
                                }
                            </span>
                            <div class="w-[60px]">
                                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div class={"text-[6px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full " + item.color} style={{
                                        width: item.percentage
                                    }}>{item.percentage}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default body;