import Face5 from '@mui/icons-material/Face5';
import { SvgIcon } from '@mui/material';
import React from 'react';

function Simple(props) {
    return (
        <div className='w-full h-[50vh] flex items-center content-center justify-center'>
            <div className='text-center'>
                <span>
                    <SvgIcon component={Face5}
                        style={{
                            fontSize: 100
                        }}
                    />
                </span>
                <h2 className='text-center font-bold text-lg mt-[20px]'>
                    No Results Found.
                </h2>
                {
                    props.action && (
                        <p className='text-center'>
                            Click <b className='font-bold'>{props.action}</b> to start.
                        </p>
                    )
                }

            </div>
        </div>
    );
}

export default Simple;