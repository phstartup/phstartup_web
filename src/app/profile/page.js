import React from 'react';
import Featured from '@/components/featured/profile'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'
import Header from '@/components/header'
import Footer from '@/components/footer'


function page(props) {
    return (
        <div
            className='w-full float-left'
        >
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
            <Footer />
        </div>
    );
}

export default page;