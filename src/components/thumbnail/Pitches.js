import React from 'react';
import Thumbnail from './smallVideoThumbnail'

function collectionSmall(props) {

    return (
        <div
            className='float-left w-full'
        >
            <div
                className='float-left w-full pt-[20px] pb-[20px]'
            >
                <span className='text-2xl font-bold'>{props.title}</span>
            </div>
            <div
                className='w-full overflow-x-scroll float-left'
            >
                {
                    props.data && props.data.map((item, index) => (
                        <Thumbnail data={item} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default collectionSmall;