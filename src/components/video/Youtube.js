import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
        autoplay: 1,
        controls: 0,
        end: 10
    },
};
const max = 10
let timer = 0
function Youtube(props) {
    const [options, setOptions] = useState(opts)
    const [length, setLength] = useState(0)
    const [percent, setPercent] = useState(0)
    const [interval, setIntervalC] = useState(null) 
    let end = 0

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
    }, [])

    const manageTime = async () => {
        timer++
        setPercent(timer)
        end = props.length ? props.length : max
        if (timer >= end) {
            _onStop()
        }
    }

    const _onStop = () => {
        clearInterval(interval)
        setIntervalC(null)
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
                                console.log('on ready')
                                e.target.playVideo();
                                if(interval == null){
                                    setIntervalC(setInterval(() => manageTime(), 1000));
                                }
                            }}
                            onEnd={(e) => {
                                e.target.stopVideo()
                                clearInterval(interval)
                                setIntervalC(null)
                            }}
                            onPlay={(e) => {
                                console.log('on play')
                                if(interval == null){
                                    setIntervalC(setInterval(() => manageTime(), 1000));
                                }
                            }}
                            onPause={(e) => {
                                console.log('on pause')
                                e.target.pauseVideo()
                                clearInterval(interval)
                                setIntervalC(null)
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