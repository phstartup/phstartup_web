import React from 'react';
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'

export const metadata = {
    title: String.app_name
}

export default function Page(props) {
    return (
        <div className='w-full float-left'>
            <Featured />
            <div
            className='float-left'
            >
                <Collections
                    title="Most visited startups"
                />

                <Collections
                    title="Arise+ Cohort 9 by QBO & Arise+ Philippines"
                />

                <Collections
                    title="The Final Pitch Season 9"
                />
            </div>
        </div>
    );
}