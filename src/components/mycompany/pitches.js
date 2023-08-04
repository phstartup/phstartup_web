"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Add, Edit, PlayCircle } from '@mui/icons-material';
import Modal from '@/components/modal/index'
import ModalVideo from '@/components/modal/Video'
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import Select from '@/components/form/Select';
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
        let data = props.data
        let dPitches = data ? data.pitches : []
        managedData(dPitches)

    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/pitches', { ...item }, session?.accessToken, (response) => {

            setTimeout(() => {
                setBtnLoading(false)
                setCreateFlag(false)
                props.getData()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                setCreateFlag(false)
                props.getData()
            }, 1000)

        })
    }

    const validate = () => {
        if (!props.data) return
        submit({
            id: pitch ? pitch.id : null,
            url,
            type,
            company_id: props.data.id
        })
    }

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
    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>URL</h1>
                    <TextInput
                        type="text"
                        placeholder="Url"
                        value={url}
                        onChange={(value, error) => {
                            setUrl(value)
                            setUrlError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Url',
                            error: urlError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Type</h1>
                    <Select
                        type="text"
                        data={String.pitches}
                        selected={type}
                        placeholder="Select type"
                        onChange={(value) => {
                            setType(value)
                        }}
                    />
                </div>

            </div>
        )
    }

    return (
        <div className={Style.cardContainer}>
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
                                                    <SvgIcon
                                                        component={Edit}
                                                        style={{
                                                            fontSize: 50
                                                        }}
                                                        className='text-red-400 ml-[20px]'
                                                        onClick={() => {
                                                            setPitch(item)
                                                            setUrl(item.url)
                                                            setType(item.type)
                                                            setTimeout(() => {
                                                                setCreateFlag(true)
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
                createFlag && (
                    <Modal
                        title="Elavator Pitch"
                        onClose={() => {
                            setCreateFlag(false)
                        }}
                        content={renderContent}
                        footer={() => {
                            return (
                                <div className='w-full float-left'>
                                    <Button
                                        style={' bg-red-400 text-white'}
                                        title="Cancel"
                                        onPress={() => {
                                            setCreateFlag(false)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title="Save"
                                        loading={btnLoading}
                                        onPress={() => {
                                            validate()
                                        }}
                                    />
                                </div>
                            )
                        }}
                    />
                )
            }

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

export default Pitches;