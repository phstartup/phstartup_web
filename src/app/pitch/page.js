"use client"
import React from 'react';
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'
import Header from '@/components/header'
import Footer from '@/components/footer'


export default function Page(props) {
    return (
        <div className='w-full float-left text-black dark:text-white'>

            <Header />
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

            <Footer />
        </div>
    );
}