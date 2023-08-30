import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import React from 'react';

function header(props) {
    return (
        <div className='w-full float-left h-[80px] flex items-center content-center justify-between'>
            <span className='float-left'>
                <span className='text-2xl font-bold'>
                    {
                        props.config.value
                    }
                </span>
                <p className='text-xs text-gray-500 dark:text-gray-500 font-bold'>
                    {
                        props.config.description
                    }
                </p>
            </span>
            <span className={'font-bold text-xs ' + (props.config.percentage.up ? 'text-green-400' : 'text-red-400')}>
                {
                    props.config.percentage.value
                }
                <SvgIcon 
                    style={{
                        fontSize: 14
                    }}
                    component={props.config.percentage.up ? ArrowUpward : ArrowDownward} />
            </span>
        </div>
    );
}

export default header;