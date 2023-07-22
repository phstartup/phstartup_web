"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import { SvgIcon } from '@mui/material';
import { Photo } from '@mui/icons-material';
import { useSession } from 'next-auth/react';
import Button from '@/components/buttons/btn'
import Api from '@/lib/api';
let api = new Api()

function Banner(props) {
    const { data: session } = useSession()
    const [logo, setLogo] = useState(null)
    const [banner, setBanner] = useState(null)
    const [data, setData] = useState(null)


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
        }
    }, [])

    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                }}
                className='h-[200px] p-[20px]'>
                <div className='float-left w-full'>
                    <div className='float-left cursor-pointer mt-[10px]'
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
                                    className='rounded-[100px] cursor-pointer border-2 bg-black dark:bg-white'
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
                            <div className='float-left h-[200px] flex items-center content-center company-banner-name'>
                                <div className='w-full'>
                                    <span className='ml-[20px] float-left w-full'>
                                        <h1 className='font-bold text-4xl'>{props.data.name}</h1>
                                        <span className='text-sm'>
                                            {
                                                props.data.description
                                            }
                                        </span>
                                    </span>

                                    {
                                        data && data.website && (
                                            <span className='ml-[20px] float-left w-full mt-[20px]'>
                                                <Button
                                                    style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                                    title="View Website"
                                                    onPress={() => {
                                                    }}
                                                />
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        )
    }

    return (
        <div className={Style.cardContainerHome + " mb-[20px]"}>
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
        </div>
    );
}

export default Banner;