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

function Achievements(props) {
    const { data: session } = useSession()
    const [createFlag, setCreateFlag] = useState(false)
    const [data, setData] = useState(null)
    const [achievement, setAchievement] = useState(null)
    const [achievements, setAchievements] = useState(null)
    const [title, setTitle] = useState(null)
    const [titleError, setTitleError] = useState(null)
    const [description, setDescription] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [link, setLink] = useState(null)
    const [linkError, setLinkError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)

    useEffect(() => {
        if (props.data) {
            setData(props.data)
            if (props.data.services) {
                setAchievements(props.data.achievements)
            }
        }
    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/achievements', { ...item }, session?.accessToken, (response) => {
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
            id: achievement ? achievement.id : null,
            link,
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
                    <h1 className='text-sm mb-[20px]'>Link(Optional)</h1>
                    <TextInput
                        type="text"
                        placeholder="Link Url"
                        value={link}
                        onChange={(value, error) => {
                            setLink(value)
                            setLinkError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Link',
                            error: linkError
                        }}
                    />
                </div>

            </div>
        )
    }


    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Achievements</span>
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
                    data && data.achievements && data.achievements.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setAchievement(item)
                                setTitle(item.title)
                                setDescription(item.description)
                                setLink(item.link)
                                setTimeout(() => {
                                    setCreateFlag(true)
                                }, 10)
                            }}
                            className={'float-left h-[300px] rounded-lg border border-gray-100 dark:border-gray-700 cursor-pointer mb-[20px] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] sm:w-[100%] xs:w-[100%] md:w-[49%] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] md:mr-[1%] xs:mr-[0%] sm:mr-[0%]' }
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
                        title={achievement ? "Update an Achievement" : "Add an Achievement"}
                        onClose={() => {
                            setCreateFlag(false)
                            setAchievement(null)
                            setTitle(null)
                            setDescription(null)
                            setLink(null)
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
                                            setAchievement(null)
                                            setTitle(null)
                                            setDescription(null)
                                            setLink(null)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title={achievement ? 'Update' : "Save"}
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

export default Achievements;