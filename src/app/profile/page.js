import React from 'react';
import Featured from '@/components/featured/profile'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'


function page(props) {
    return (
        <div
            className='w-full float-left bg-white dark:bg-black text-black dark:text-black'
        >
            <Featured />
            <div
                className='float-left'
            >
                <Collections
                    title="Team"
                />

                <Collections
                    title="Achievements"
                />


                <Collections
                    title="On the news"
                />
            </div>
        </div>
    );
}

export default page;