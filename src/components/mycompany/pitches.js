"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Add, PlayCircle } from '@mui/icons-material';
import Modal from '@/components/modal/index'
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
                <div className='float-left flex justify-between w-full'>
                    {
                        pData.map((item) => (
                            <div
                                onClick={() => {
                                    if (item.url == null) {
                                        setType(item.type)
                                        setTimeout(() => {
                                            setCreateFlag(true)
                                        }, 100)
                                    }else{
                                        // play here
                                    }

                                }}
                                className='w-[30%] h-[200px] border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center content-center hover:cursor-pointer hover:border hover:border-black'>

                                <div className='w-full text-center'>
                                    <span className='w-full float-left text-6xl font-bold'>
                                        {
                                            item.url ? (
                                                <SvgIcon
                                                    component={PlayCircle}
                                                    style={{
                                                        fontSize: 50
                                                    }}
                                                />
                                            ) : (
                                                <SvgIcon
                                                    component={Add}
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
        </div>
    );
}

export default Pitches;