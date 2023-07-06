import React from 'react';
function btn(props) {
    return (
        <div
        onClick={() => {
            props.onPress()
        }}
        className={'px-[40px] pr-[40px] h-[50px] lg:pr-[20px] lg:px-[20px] cursor-pointer content-center items-center float-left flex rounded-[25px]' + props.style}
        >
            {
                props.title
            }
        </div>
    );
}

export default btn;