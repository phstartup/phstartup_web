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
        <div
            className='float-left w-full'
        >
            <div
                className='float-left w-full pt-[20px] pb-[20px]'
            >
                <h3>{props.title}</h3>
            </div>
            <div
                className='w-full overflow-x-scroll float-left flex flex-nowrap'
            >
                {
                    sample && sample.map((item) => (
                        <Thumbnail title={item.title} />
                    ))
                }
            </div>
        </div>
    );
}

export default collectionSmall;