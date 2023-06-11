import React from 'react';
import Color from '@/utils/Color'
function btn(props) {
    return (
        <div style={{
            backgroundColor: Color.gray
        }}
        onClick={() => {
            props.onPress()
        }}
        className='px-[40px] pr-[40px] h-[60px] cursor-pointer content-center items-center float-left flex rounded-lg'
        >
            {
                props.title
            }
        </div>
    );
}

export default btn;