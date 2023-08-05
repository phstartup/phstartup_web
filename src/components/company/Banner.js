"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Android, Apple, Facebook, Instagram, LinkedIn, Photo, Twitter } from '@mui/icons-material';
import { useSession } from 'next-auth/react';
import Button from '@/components/buttons/btn'
import TextArea from '@/components/form/textarea'
import Api from '@/lib/api';
import { useRouter } from 'next/navigation';
import Modal from '@/components/modal/index'
let api = new Api()

function Banner(props) {
    const { data: session } = useSession()
    const router = useRouter()
    const [logo, setLogo] = useState(null)
    const [banner, setBanner] = useState(null)
    const [data, setData] = useState(null)
    const [vouchModal, setVouchModal] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [messageError, setMessageError] = useState(null)
    const [socialMedias, setSocialMedias] = useState(null)
    const [mobileApps, setMobileApps] = useState(null)


    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
        if (props.data && props.data.settings) {
            let options = props.data.settings
            if (options && options.logo) {
                setLogo(options.logo)
            }
            if (options && options.banner) {
                setBanner(options.banner)
            }
            if (options.mobile_apps) {
                setMobileApps(options.mobile_apps)
            }
            if (options.social_medias) {
                setSocialMedias(options.social_medias)
            }
        }
    }, [props])

    const vouchSubmit = () => {
        if (session && session.user) {
            // submit here
            setVouchModal(true)
        } else {
            router.push('/login')
        }
    }

    const submitVouch = async () => {
        if (!session) return
        if (!message) return
        if (!data) return

        setBtnLoading(true)
        await api.post('/api/vouches', { 
            content: message,
            payload: 'company',
            payload_value: data.id
         }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                setVouchModal(false)
                window.location.reload()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                setVouchModal(false)
                window.location.reload()
            }, 1000)

        })
    }

    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className={'h-[200px] w-full ' + (session ? 'bg-gray-800' : 'bg-black')}>
                <div className='float-left w-full'>
                    <div className='float-left cursor-pointer mt-[10px] w-[180px]'
                        onClick={() => {
                            setCreateFlag(true)
                        }}
                    >
                        {
                            logo ? (
                                <img
                                    src={logo}
                                    width={180}
                                    height={180}
                                    className='rounded-[100px] cursor-pointer border-2 object-cover'
                                    alt={"Profile"}
                                />
                            ) : (
                                <span
                                    className='h-[180px] w-[180px] flex items-center justify-center content-center border border-gray-100 dark:border-gray-700 rounded-[100px]'
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
                            <div className={'float-left w-[calc(100%-180px)] h-[200px] flex items-center content-center company-banner-name'}>
                                <div className='w-full float-left'>
                                    <span className='ml-[20px] float-left w-full'>
                                        <h1 className='font-bold text-4xl mb-[10px]'>
                                            {props.data.name}
                                        </h1>
                                        <span className='w-full float-left font-semibold'>
                                            {
                                                props.data.stage.toUpperCase()
                                            }
                                        </span>
                                        <span className='text-sm w-full'>
                                            {
                                                props.data.description
                                            }
                                        </span>
                                        <span>
                                            {
                                                socialMedias && (
                                                    <span className='ml-[20px]'>
                                                        {
                                                            socialMedias.facebook && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(socialMedias.facebook, '_blank')
                                                                    }}
                                                                    component={Facebook}
                                                                />
                                                            )
                                                        }
                                                        {
                                                            socialMedias.linkedIn && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(socialMedias.linkedIn, '_blank')
                                                                    }}
                                                                    component={LinkedIn}
                                                                />
                                                            )
                                                        }

                                                        {
                                                            socialMedias.twitter && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(socialMedias.twitter, '_blank')
                                                                    }}
                                                                    component={Twitter}
                                                                />
                                                            )
                                                        }

                                                        {
                                                            socialMedias.instagram && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(socialMedias.instagram, '_blank')
                                                                    }}
                                                                    component={Instagram}
                                                                />
                                                            )
                                                        }

                                                    </span>
                                                )
                                            }
                                            {
                                                mobileApps && (
                                                    <span className='ml-[20px]'>
                                                        {
                                                            mobileApps.apple && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(mobileApps.apple, '_blank')
                                                                    }}
                                                                    component={Apple}
                                                                />
                                                            )
                                                        }
                                                        {
                                                            mobileApps.android && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(mobileApps.android, '_blank')
                                                                    }}
                                                                    component={Android}
                                                                />
                                                            )
                                                        }

                                                        {
                                                            mobileApps.huawei && (
                                                                <SvgIcon
                                                                    onClick={() => {
                                                                        window.open(mobileApps.huawei, '_blank')
                                                                    }}
                                                                    component={Android}
                                                                />
                                                            )
                                                        }
                                                    </span>
                                                )
                                            }
                                        </span>
                                    </span>
                                    <span className='w-full float-left flex justify-between ml-[20px]'>
                                        <span>
                                            {
                                                data && data.website && (
                                                    <span className=' float-left  mt-[20px]'>
                                                        <Button
                                                            style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                                            title="View Website"
                                                            onPress={() => {
                                                                window.open(data.website, '_blank')
                                                            }}
                                                        />
                                                    </span>
                                                )
                                            }
                                            {
                                                data && data.email_address && (
                                                    <span className=' float-left  mt-[20px] ml-[5px]'>
                                                        <Button
                                                            style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                                            title={data.email_address}
                                                            onPress={() => {
                                                                //
                                                            }}
                                                        />
                                                    </span>
                                                )
                                            }

                                            {
                                                data && data.contact_number && (
                                                    <span className=' float-left  mt-[20px] ml-[5px]'>
                                                        <Button
                                                            style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                                            title={data.contact_number}
                                                            onPress={() => {
                                                                //
                                                            }}
                                                        />
                                                    </span>
                                                )
                                            }
                                        </span>
                                        {
                                            data && !data.vouch_flag && (
                                                <span className='float-left mt-[20px]'>
                                                    <Button
                                                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                                        title="I can vouch"
                                                        onPress={() => {
                                                            vouchSubmit()
                                                        }}
                                                    />
                                                </span>
                                            )
                                        }
                                    </span>
                                </div>
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
                    <h1 className='text-sm mb-[20px]'>Message</h1>
                    <TextArea
                        type="text"
                        placeholder="Write something great here..."
                        value={message}
                        onChange={(value, error) => {
                            setMessage(value)
                            setMessageError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Message',
                            error: messageError
                        }}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className={(session ? Style.cardContainer : Style.cardContainerHome) + " mb-[20px]"}>
            <div className='w-full float-left text-sm min-h-[400px] overflow-hidden relative'>
                <div className='w-full float-left h-[400px] flex items-center content-center justify-center'
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%'
                    }}
                    onClick={() => {
                    }}
                >

                </div>
                <div>
                    {
                        renderProfile()
                    }
                </div>
            </div>
            {
                vouchModal && (
                    <Modal
                        title={"Thank you for being kind..."}
                        onClose={() => {
                            setVouchModal(false)
                        }}
                        content={renderContent}
                        footer={() => {
                            return (
                                <div className='w-full float-left'>

                                    <Button
                                        style={' bg-red-400 text-white'}
                                        title="Cancel"
                                        onPress={() => {
                                            setMessage(null)
                                            setVouchModal(false)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title={"Submit"}
                                        loading={btnLoading}
                                        onPress={() => {
                                            submitVouch()
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