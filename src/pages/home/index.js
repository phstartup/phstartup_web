import React from 'react';
import Header from '@/components/header'
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'

function index(props) {
    return (
        <div style={{
            width: '100%',
            float: 'left'
        }}>
            <Header />
            <Featured />
            <div style={{
                float: 'left',
                width: '90%',
                marginLeft: 100,
                marginBottom: 100
            }}>
                <Collections
                    title="Most visited startups"
                />

                <Collections
                    title="Arise+ Cohort 9 by QBO & Arise+ Philippines"
                />
            </div>
        </div>
    );
}

export default index;