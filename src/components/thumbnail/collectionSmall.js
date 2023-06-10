import React from 'react';
import Thumbnail from './smallVideoThumbnail'

const sample = [{
    title: 'Sample',
    route: 'hello there'
}, {
    title: 'Sample',
    route: 'hello there'
}, {
    title: 'Sample',
    route: 'hello there'
}, {
    title: 'Sample',
    route: 'hello there'
}]
function collectionSmall(props) {
    return (
        <div style={{
            float: 'left',
            width: '100%',
        }}>
            <div style={{
                float: 'left',
                width: '100%',
                paddingTop: 20,
                paddingBottom: 20
            }}>
                <h3>{props.title}</h3>
            </div>
            <div style={{
                width: '100%',
                overflowX: 'scroll',
                float: 'left',
                display: 'flex',
                flexWrap: 'nowrap'
            }}>
            {
                sample && sample.map((item) => (
                    <Thumbnail title={item.title}/>
                ))
            }
            </div>
        </div>
    );
}

export default collectionSmall;