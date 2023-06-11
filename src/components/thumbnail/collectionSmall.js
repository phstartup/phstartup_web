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
            className='float-left w-full lg:px-[100px] 2xl:px-[100px] xs:px-[20px] sm:px-[20px] md:px-[20px]'
        >
            <div
                className='float-left w-full pt-[20px] pb-[20px]'
            >
                <span className='text-2xl'>{props.title}</span>
            </div>
            <div
                className='w-full overflow-x-scroll float-left'
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