"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SvgIcon } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import ModalVideo from '@/components/modal/Video'
function Pitch(props) {
    const router = useRouter();
    const [pitch, setPitch] = useState(null)
    const [viewVideo, setViewVideo] = useState(false)
    return (
        <div
            className='float-left lg:w-[24%] xl:w-[24%] 2xl:w-[24%] xs:w-[100%] sm:w-[100%] md:w-[48%] h-[250px] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] small-video-thumbnail relative cursor-pointer mb-[20px]'

        >
            <div className='relative w-full float-left h-[250px]'>
                <img
                    src={props.data?.company?.settings?.banner}
                    alt={props.data?.company?.settings?.banner}
                    className='w-full h-full object-cover'
                />
                <div
                    className='absolute px-5 py-5 bottom-0 profile-card-title w-full font-bold text-white flex justify-between'
                >
                    <span>{props.data?.company?.name}</span>
                    <SvgIcon
                        style={{
                            fontSize: 32
                        }}
                        onClick={() => {
                            setPitch(props.data)
                            setTimeout(() => {
                                setViewVideo(true)
                            }, 10)
                        }}
                        component={PlayCircle} />
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
                        data={pitch}
                    />
                )
            }
        </div>
    );
}

export default Pitch;