"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Add, Edit, PlayCircle } from '@mui/icons-material';
import ModalVideo from '@/components/modal/Video'
import String from '@/utils/String';
import Api from '@/lib/api';
import { useSession } from 'next-auth/react';

let api = new Api()

function Pitches(props) {
    const { data: session } = useSession()
    const [createFlag, setCreateFlag] = useState(false)
    const [url, setUrl] = useState(null)
    const [urlError, setUrlError] = useState(null)
    const [type, setType] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [pData, setPData] = useState([])
    const [pitch, setPitch] = useState(null)
    const [viewVideo, setViewVideo] = useState(false)

    useEffect(() => {
        const managedData = async (pitches) => {
            if (pitches) {
                let nPitches = []
                for (let index = 0; index < String.pitches.length; index++) {
                    const item = String.pitches[index];
                    let exist = null
                    for (let iIndex = 0; iIndex < pitches.length; iIndex++) {
                        const pitch = pitches[iIndex];
                        if (pitch.type == item.value) {
                            exist = pitch
                            break
                        }
                    }
                    if (exist) {
                        await nPitches.push(exist)
                    } else {
                        await nPitches.push({
                            type: item.value,
                            url: null
                        })
                    }
                }
                await setPData(nPitches)
            } else {
                await setPData([{
                    type: '60 Seconds',
                    url: null
                }, {
                    type: '120 Seconds',
                    url: null
                }, {
                    type: '300 Seconds',
                    url: null
                }])
            }
        }

        let data = props.data
        let dPitches = data ? data.pitches : []

        managedData(dPitches)
    }, [props])




    return (
        <div className={session ? Style.cardContainer : Style.cardContainerHome}>
            <h1 className='text-lg font-bold'>Elevator Pitches</h1>
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='float-left w-full'>
                    {
                        pData.map((item, index) => (
                            <div
                                key={index}
                                className='lg:w-[32%] xl:w-[32%] 2xl:w-[32%] sm:w-[100%] xs:w-[100%] md:w-[100%] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] md:mr-[0%] xs:mr-[0%] sm:mr-[0%] h-[200px] border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center content-center hover:cursor-pointer hover:border hover:border-black float-left mb-[20px]'>

                                <div className='w-full text-center'>
                                    <span className='w-full float-left text-6xl font-bold'>
                                        {
                                            item.url ? (
                                                <span>
                                                    <SvgIcon
                                                        component={PlayCircle}
                                                        style={{
                                                            fontSize: 50
                                                        }}

                                                        onClick={() => {
                                                            setPitch(item)
                                                            setTimeout(() => {
                                                                setViewVideo(true)
                                                            }, 10)
                                                        }}
                                                    />
                                                </span>
                                            ) : (
                                                <SvgIcon
                                                    component={Add}
                                                    onClick={() => {
                                                        setType(item.type)
                                                        setTimeout(() => {
                                                            setCreateFlag(true)
                                                        }, 100)
                                                    }}
                                                    style={{
                                                        fontSize: 50
                                                    }}
                                                />
                                            )
                                        }

                                    </span>

                                    <span className='w-full float-left font-semibold mt-[25px]'>
                                        {
                                            item.type + " Pitch Video"
                                        }
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {
                viewVideo && pitch && (
                    <ModalVideo
                        title={pitch.type + ' Pitch Video'}
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

export default Pitches;