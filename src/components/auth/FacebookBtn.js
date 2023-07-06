import { FacebookOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import React from 'react';
import Style from '@/utils/Style';

function FacebookBtn(props) {
    return (
        <div className={Style.btn + ' border border-gray-100 dark:bg-white text-white dark:text-black'}>
            <SvgIcon
                component={FacebookOutlined}
                className='text-blue-800'
            />
            <span className='ml-[10px] text-sm font-semibold'>
                {
                    props.label
                }
            </span>
        </div>
    );
}

export default FacebookBtn;