import React from 'react';
import Header from '@/components/header'
import Featured from '@/components/featured'

function index(props) {
    return (
        <div style={{
            width: '100%',
            float: 'left'
        }}>
            <Header/>
            <Featured/>
        </div>
    );
}

export default index;