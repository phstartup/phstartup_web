import React from 'react';
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'


function page(props) {
    return (
        <div style={{
            width: '100%',
            float: 'left'
        }}>
            <Featured />
            <div style={{
                float: 'left',
                width: '90%',
                marginLeft: 100,
                marginBottom: 100
            }}>
                <Collections
                    title="Team"
                />
                </div>
        </div>
    );
}

export default page;