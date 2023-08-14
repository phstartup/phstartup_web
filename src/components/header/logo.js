import React from 'react';
import String from '@/utils/String';
import Link from 'next/link';

function logo(props) {
    return (
        <Link href={'/'}>
            <b className='lg:text-3xl xl:text-3xl 2xl:text-3xl xs:text-xl sm:text-2xl md:text-2xl'>{String.app_name}</b>
        </Link>
    );
}

export default logo;