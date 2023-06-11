import React from 'react';
import String from '@/utils/String';
import Link from 'next/link';

function logo(props) {
    return (
        <Link href={'/'}>
            <b className='text-3xl'>{String.app_name}</b>
        </Link>
    );
}

export default logo;