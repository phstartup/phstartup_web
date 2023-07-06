import React from 'react';
import Style from '@/utils/Style';
import GoogleIcon from '@/assets/google.png'
import Image from 'next/image';

function GoogleBtn(props) {
    return (
        <div className={Style.btn + ' border border-gray-100 dark:bg-white text-white dark:text-black'}>
            <Image 
                src={GoogleIcon}
                height={20}
                width={20}
            />
            <span className='ml-[10px] text-sm font-semibold'>
                {
                    props.label
                }
            </span>
        </div>
    );
}

export default GoogleBtn;