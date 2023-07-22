"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import Modal from '@/components/modal/index'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Api from '@/lib/api';
import { useSession } from 'next-auth/react';

let api = new Api()

function Services(props) {
    const { data: session } = useSession()
    const [createFlag, setCreateFlag] = useState(false)
    const [data, setData] = useState(null)
    const [service, setService] = useState(null)
    const [services, setServices] = useState(null)
    const [title, setTitle] = useState(null)
    const [titleError, setTitleError] = useState(null)
    const [description, setDescription] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [video, setVideo] = useState(null)
    const [videoError, setVideoError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)

    useEffect(() => {
        if (props.data) {
            setData(props.data)
            if (props.data.services) {
                setServices(props.data.services)
            }
        }
    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/services', { ...item }, session?.accessToken, (response) => {
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
            id: service ? service.id : null,
            video,
            title,
            company_id: props.data.id,
            description
        })
    }

    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Title</h1>
                    <TextInput
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(value, error) => {
                            setTitle(value)
                            setTitleError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Title',
                            error: titleError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Description</h1>
                    <TextArea
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(value, error) => {
                            setDescription(value)
                            setDescriptionError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Description',
                            error: descriptionError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Video Link(Optional)</h1>
                    <TextInput
                        type="text"
                        placeholder="Video Url"
                        value={video}
                        onChange={(value, error) => {
                            setVideo(value)
                            setVideoError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Video',
                            error: videoError
                        }}
                    />
                </div>

            </div>
        )
    }


    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Services</span>
                <Button
                    style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                    title="Add"
                    onPress={() => {
                        setCreateFlag(true)
                    }}
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                {
                    data && data.services && data.services.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setService(item)
                                setTitle(item.title)
                                setDescription(item.description)
                                setVideo(item.video)
                                setTimeout(() => {
                                    setCreateFlag(true)
                                }, 10)
                            }}
                            className='w-[24%] mr-[1%] float-left h-[300px] rounded-lg border border-gray-100 dark:border-gray-700 cursor-pointer mb-[20px]'
                        >
                            <div className='w-full float-left h-[200px]'>
                            </div>
                            <div className='w-full float-left p-[10px] h-[100px] border-t border-gray-100 dark:border-gray-800'>
                                <span className='w-full float-left text-sm font-bold'>{item.title}</span>
                                <span className='w-full float-left text-xs mt-[10px] text-ellipsis overflow-hidden h-[50px]'>
                                    {
                                        item.description
                                    }
                                </span>
                            </div>

                        </div>
                    ))
                }
            </div>

            {
                createFlag && (
                    <Modal
                        title={service ? "Update A Service" : "Add A Service"}
                        onClose={() => {
                            setCreateFlag(false)
                            setService(null)
                            setTitle(null)
                            setDescription(null)
                            setVideo(null)
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
                                            setService(null)
                                            setTitle(null)
                                            setDescription(null)
                                            setVideo(null)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title={service ? 'Update' : "Save"}
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

export default Services;