import React from 'react';

function index(props) {
    return (
        <div style={{
            height: 100,
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            float: 'left',
            paddingLeft: 100,
            paddingRight: 100,
            justifyContent: 'space-between',
            width: '100%'
        }}>
            <span>
                A non-profit organization. Contact us to contribute.
            </span>
            <span>
                Contributors
            </span>
        </div>
    );
}

export default index;