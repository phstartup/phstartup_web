import React, { useEffect, useRef, useState } from 'react';
import loadable from '@loadable/component';
const YouTube = loadable(() => import('react-youtube'));

const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
        autoplay: 1,
        controls: 0,
        end: 10,
        start: 0
    },
};
const max = 10
function Youtube(props) {
    const [options, setOptions] = useState(opts)
    const [length, setLength] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        setOptions({
            ...{
                ...opts,
                playerVars: {
                    ...opts.playerVars,
                    end: props.length ? props.length : max
                }
            },
        })
        setLength(props.length ? props.length : max)
        clearInterval(window.interval)
        window.interval = null
        window.timer = 0
    }, [])

    const manageTime = async () => {
        window.timer++
        setPercent(window.timer)
        if (window.timer >= length) {
            _onStop()
        }
    }

    const _onStop = () => {
        clearInterval(window.interval)
        window.interval = null
    }


    return (
        <div className='w-full float-left'>
            <div
                className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden h-[500px]"
            >
                {
                    props.url && (
                        <YouTube
                            videoId={props.url}
                            opts={options}
                            onReady={(e) => {
                                e.target.playVideo();
                                if(window.interval == null){
                                    window.interval = setInterval(() => manageTime(), 1000);
                                }
                            }}
                            onEnd={(e) => {
                                e.target.stopVideo()
                                clearInterval(window.interval)
                                window.interval = null
                            }}
                            onPlay={(e) => {
                                if(window.interval == null){
                                    window.interval = setInterval(() => manageTime(), 1000);
                                }
                            }}
                            onPause={(e) => {
                                e.target.pauseVideo()
                                clearInterval(window.interval)
                                window.interval = null
                            }}
                            />
                    )
                }

            </div>
            <div className="w-full pt-[5px] pb-[5px] bg-gray-100 rounded-full dark:bg-gray-800">
                <div className="h-4 bg-black rounded-full dark:bg-white text-xs font-bold text-white dark:text-black text-center"
                    style={{
                        width: ((percent / length) * 100) + "%"
                    }}>
                    {
                        percent
                    }
                </div>
            </div>
        </div>
    );
}

export default Youtube;