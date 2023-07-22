import React from 'react';

function Youtube(props) {
    return (
        <div className='w-full float-left'>
            <div
                className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
                style="padding-top: 42.857143%">
                <iframe
                    className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                    src={props.url}
                    allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true"
                    id="240632615"></iframe>
            </div>
        </div>
    );
}

export default Youtube;