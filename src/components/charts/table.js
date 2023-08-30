import React from 'react';
import Header from './header'
import Footer from './footer'

function body(props) {
    return (
        <div
            className="mx-auto w-full h-[400px] float-left bg-white dark:bg-gray-800 rounded-[10px] px-[20px] mb-[20px] border-1 border-b-gray-200 dark:border-gray-600 lg:px-[20px] sm:px-[10px]">
            <Header 
                config={props.config}
            />
            <div className='w-full float-left h-[280px]'>
                <div
                    className='h-[50px] w-full flex items-center content-center justify-between text-sm'
                >
                    {
                        props.header && props.header.length > 0 && props.header.map((item, index) => (

                            <span className='float-left font-bold ' key={index}>{item}</span>

                        ))
                    }
                </div>
                {
                    props.data && props.data.length > 0 && props.data.map((item, index) => (
                        <div
                            key={index}
                            className='h-[50px] w-full flex items-center content-center justify-between text-sm'
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
                            <div className="w-[60px]">
                                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className={"text-sm font-medium text-green-500 text-center p-2 leading-none rounded-full " + item.color} style={{
                                        width: item.percentage
                                    }}>{item.percentage}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Footer title={props.footerTitle} />
        </div>
    );
}

export default body;