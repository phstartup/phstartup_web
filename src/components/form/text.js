import React from 'react';

function text(props) {
    return (
        <input 
            placeholder={props.placeholder} 
            type={props.type}
            className='w-full h-[50px] rounded-[25px] text-black dark:text-white px-[10px] mb-[20px] bg-white dark:bg-black'>
            
        </input>
    );
}

export default text;