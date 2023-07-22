"use client";
import React, { useEffect, useState } from 'react';
import { SvgIcon } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import Button from '@/components/buttons/btn.js'
import { useRouter } from 'next/navigation';
import ModalVideo from '@/components/modal/Video'

function index(props) {
    const [data, setData] = useState(null)
    const router = useRouter()
    const [pitch, setPitch] = useState(null)
    const [viewVideo, setViewVideo] = useState(false)

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [])
    return (
        <div style={{
            marginTop: 100
        }}
            className='float-left w-full relative lg:h-[80vh] 2xl:h-[80vh] sm:h-[60vh] md:h-[60vh]'
        >
            <div
                className='float-left lg:h-[80vh] 2xl:h-[80vh] w-full sm:h-[60vh] md:h-[60vh]'
            >   {
                    data && data.settings && data.settings.banner && (
                        <img
                            src={data.settings.banner}
                            className='w-full h-full'
                            alt={data.settings.banner}
                        />
                    )
                }

            </div>
            <div
                className='w-full absolute lg:bottom-10 2xl:bottom-10 left-0 px-[10px] lg:px-[100px]] 2xl:px-[100px] sm:bottom-1 xs:bottom-1 md:bottom-1'
            >
                {
                    data && (
                        <span className='font-bold lg:text-6xl 2xl:text-6xl sm:text-3xl xs:text-3xl md:text-3xl text-black dark:text-white'>
                            {data.name}
                        </span>
                    )
                }

                <div
                    className='left w-full flex items-center content-center'
                >
                    {
                        data && data.pitches && (
                            <SvgIcon
                                component={PlayCircle}
                                className='float-left cursor-pointer text-black dark:text-white'
                                style={{
                                    fontSize: 60
                                }}
                                onClick={() => {
                                    setPitch(data.pitches[0])
                                    setTimeout(() => {
                                        setViewVideo(true)
                                    }, 10)
                                }}
                            />
                        )
                    }

                    {
                        data && (
                            <Button
                                title="More details"
                                onPress={() => {
                                    router.push('/company?id=' + data.id)
                                }}
                            />
                        )
                    }
                </div>

            </div>
            {
                viewVideo && pitch && (
                    <ModalVideo
                        title="Elavator Pitch"
                        onClose={() => {
                            setPitch(null)
                            setViewVideo(false)
                        }}
                        url={pitch.url}
                    />
                )
            }
        </div>
    );
}

export default index;