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