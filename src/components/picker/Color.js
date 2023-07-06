import React, {useState} from 'react';
import { SketchPicker, ChromePicker } from 'react-color';

function Color(props) {
    const [background, setBackground] = useState('#FFFFFF')

    const handleChange = (color) => {
        setBackground(color.hex)
    }
    return (
        <div className='fixed h-[300px] w-[400px] z-[999px] top-[200px] right-[50px]'>
            <ChromePicker
                color={background}
                onChange={handleChange}
                onChangeComplete={(color) => {
                    props.onComplete(color.hex)
                }}/>
        </div>
    );
}

export default Color;