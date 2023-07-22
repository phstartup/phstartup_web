"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import Modal from '@/components/modal/index'
import { SvgIcon } from '@mui/material';
import { Photo } from '@mui/icons-material';
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';
let api = new Api()

function Banner(props) {
    const {data: session} = useSession()
    const [createFlag, setCreateFlag] = useState(false)
    const [logo, setLogo] = useState(null)
    const [logoError, setLogoError] = useState(null)
    const [banner, setBanner] = useState(null)
    const [bannerError, setBannerError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [settings, setSettings] = useState(null)


    useEffect(() => {
        if (props.data && props.data.settings) {
            setSettings(props.data.settings)
            let options = props.data.settings
            if (options && options.logo) {
                setLogo(options.logo)
            }
            if (options && options.banner) {
                setBanner(options.banner)
            }
        }
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
            id: props.data.id,
            settings: {
                ...settings,
                logo,
                banner
            }
        })
    }

    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className='h-[200px] absolute bottom-0 left-0'>
                <div className='float-left w-full'>
                    <div className='float-left cursor-pointer'
                        onClick={() => {
                            setCreateFlag(true)
                        }}
                        >
                        {
                            logo ? (
                                <img
                                    src={logo}
                                    width={200}
                                    height={200}
                                    className='rounded-[100px] cursor-pointer border-2 bg-black dark:bg-white'
                                    alt={"Profile"}
                                />
                            ) : (
                                <span
                                    className='h-[200px] w-[200px] flex items-center justify-center content-center border border-gray-100 dark:border-gray-700 rounded-[100px]'
                                    >
                                    <SvgIcon 
                                        style={{
                                            fontSize: 100
                                        }}
                                        component={Photo} />
                                </span>
                            )
                        }

                    </div>

                    {
                        props.data && (
                            <div className='float-left h-[200px] flex items-center content-center company-banner-name'>
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


    console.log({
        banner
    })

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
            <div className='w-full float-left text-sm min-h-[400px] overflow-hidden relative'>
                <div className='w-full float-left h-[400px] flex items-center content-center justify-center'
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize: '100%'
                    }}
                    >
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