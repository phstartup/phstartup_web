"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Select from '@/components/form/Select';
import String from '@/utils/String';
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';

let api = new Api()
function Stage(props) {
    const { data: session } = useSession()
    const [stage, setStage] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [data, setData] = useState(null)
    const [settings, setSettings] = useState(null)
    const [ask, setAsk] = useState(null)

    useEffect(() => {
        if (props.data) {
            let data = props.data
            setStage(data.stage)
            setAsk(data.ask)
            setData(data)
            setSettings(data.settings)
        }else{
            setStage(String.stages[0].value)
            setAsk(String.ask[0].value)
        }
    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/companies', { ...item }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                props.getData()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                props.getData()
            }, 1000)

        })
    }

    const validate = () => {
        submit({
            ...data,
            stage,
            ask,
        })
    }
    const renderFields = () => {
        return (
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Your Company Stage</h1>
                    <Select
                        type="text"
                        data={String.stages}
                        selected={stage}
                        placeholder="Select Stage"
                        onChange={(value) => {
                            setStage(value)
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Are you looking for</h1>
                    <Select
                        type="text"
                        data={String.ask}
                        selected={ask}
                        placeholder="Select Ask"
                        onChange={(value) => {
                            setAsk(value)
                        }}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Stage & Ask</span>
            </div>
            {
                renderFields()
            }
        </div>
    );
}

export default Stage;