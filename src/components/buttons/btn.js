import React from 'react';
import Color from '@/util/Color'
function btn(props) {
    return (
        <div style={{
            paddingLeft: 40,
            paddingRight: 40,
            height: 60,
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            float: 'left',
            backgroundColor: Color.gray,
            borderRadius: 10
        }}
        onClick={() => {
            props.onPress()
        }}
        className='cursor-pointer'
        >
            {
                props.title
            }
        </div>
    );
}

export default btn;