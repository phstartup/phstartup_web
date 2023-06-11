import React from 'react';

export async function generateMetadata(){
    return { title: 'title here'}
}

export default function Page(props) {
    return (
        <div style={{
            width: '100%',
            float: 'left'
        }}>
            <p></p>
        </div>
    );
}