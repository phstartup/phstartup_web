"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Profile from '@/assets/profile.png'
import Image from 'next/image';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import Modal from '@/components/modal/index'

function Banner(props) {
    const [createFlag, setCreateFlag] = useState(false)
    const [logo, setLogo] = useState(null)
    const [logoError, setLogoError] = useState(null)
    const [banner, setBanner] = useState(null)
    const [bannerError, setBannerError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)


    useEffect(() => {

    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/companies', { ...item }, session?.accessToken, (response) => {

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
            ...props.data
        })
    }

    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className='h-[200px] mr-[10px] absolute bottom-0 left-0'>
                <div className='float-left w-full'>
                    <div className='float-left'>
                        <Image
                            src={Profile}
                            width={200}
                            height={200}
                            className='rounded-[100px] cursor-pointer border-2 bg-black dark:bg-white'
                            alt={"Profile"}
                        />
                    </div>

                    {
                        props.data && (
                            <div className='float-left h-[200px] flex items-center content-center'>
                                <span className='ml-[20px]'>
                                    <h1 className='font-bold text-4xl'>{props.data.name}</h1>
                                    <span className='text-sm'>
                                        {
                                            props.data.description
                                        }
                                    </span>
                                </span>
                            </div>
                        )
                    }

                </div>

            </div>
        )
    }


    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Logo</h1>
                    <TextInput
                        type="text"
                        placeholder="Url"
                        value={logo}
                        onChange={(value, error) => {
                            setLogo(value)
                            setLogoError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Logo',
                            error: logoError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Banner</h1>
                    <TextInput
                        type="text"
                        placeholder="Url"
                        value={banner}
                        onChange={(value, error) => {
                            setBanner(value)
                            setBannerError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Banner',
                            error: bannerError
                        }}
                    />
                </div>

            </div>
        )
    }

    return (
        <div className={Style.cardContainerWithoutPadding + " mb-[20px]"}>
            <div className='w-full float-left text-sm mt-[20px] min-h-[400px] overflow-hidden relative'>
                <div className='w-full float-left h-[400px] flex items-center content-center justify-center'>
                    <Button
                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                        title="Upload Banner"
                        onPress={() => {
                            setCreateFlag(true)
                        }}
                    />
                </div>
                <div>
                    {
                        renderProfile()
                    }
                </div>
            </div>

            {
                createFlag && (
                    <Modal
                        title="Logo & Banner"
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

export default Banner;