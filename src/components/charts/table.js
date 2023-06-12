import React from 'react';
import Header from './header'

function body(props) {
    return (
        <div
            style={{
                border: 'solid 1px #eee'
            }}
            class="mx-auto lg:w-[49%] 2xl:w-[49%] sm:w-full xs:w-full md:w-full h-[400px] float-left bg-white rounded-[10px] px-[20px] mb-[20px]">
                <Header title={props.title}/>
                <div className='w-full float-left h-[calc(400px - 80px)]'>
                </div>
        </div>
    );
}

export default body;