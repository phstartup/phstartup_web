import React from 'react';
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'


function page(props) {
    return (
        <div
        className='w-full float-left'
        >
            <Featured />
            <div
                className='float-left w-full px-[100px] pr-[100px]'
            >
                <Collections
                    title="Team"
                />
            </div>
        </div>
    );
}

export default page;