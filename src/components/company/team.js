"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Api from '@/lib/api';
import { SvgIcon } from '@mui/material';
import { Face6, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Helper from '@/lib/helper';
import { useSession } from 'next-auth/react';
let helper = new Helper()

let api = new Api()

function Team(props) {
    const [data, setData] = useState(null)
    const { data: session } = useSession()

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props])

    const renderProfile = (user) => {
        let size = 100
        let radius = size / 2
        return (
            <div
                className={`h-[${size}px] w-[${size}px] rounded-[${radius}px] mr-[10px] float-left relative`}
            >
                {
                    (user.information && user.information.profile) ? (
                        <img
                            src={user.information.profile}
                            width={size}
                            height={size}
                            style={{
                                borderRadius: radius
                            }}
                            className={`rounded-[${radius}px] cursor-pointer border-2 border-green-500 dark:border-green-500`}
                            alt={user.information.profile}
                        />
                    ) : (
                        <div className={`h-[${size}px] w-[${size}px] rounded-[${radius}px] bg-green-400 dark:bg-white float-left cursor-pointer`}>
                            <SvgIcon component={Face6}
                                className='text-white dark:text-black'
                                style={{
                                    fontSize: size
                                }}
                            />
                        </div>
                    )
                }
            </div>
        )
    }


    return (
        <div className={session ? Style.cardContainer : Style.cardContainerHome}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Executive Team</span>
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                {
                    data && data.teams && data.teams.length > 0 && data.teams.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                            }}
                            className={'float-left h-[200px] rounded-lg border border-gray-100 dark:border-gray-700 cursor-pointer mb-[20px] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] sm:w-[100%] xs:w-[100%] md:w-[49%] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] md:mr-[1%] xs:mr-[0%] sm:mr-[0%] p-[10px]'}
                        >
                            <div className='w-full float-left'>
                                <span className='float-left w-[30%]'>
                                    {
                                        renderProfile(item.user)
                                    }
                                </span>
                                <span className='float-left w-[70%] h-[100px] flex items-center content-center' >
                                    <span className='w-full float-left  pl-[10px]'>
                                        <span className='font-semibold float-left w-full'>
                                            {
                                                helper.getName(item.user)
                                            }
                                        </span>
                                        <span className='float-left w-full'>
                                            {
                                                item.position
                                            }
                                        </span>
                                        {
                                            item.user.information && item.user.information && item.user.information.details && item.user.information.details.social_links && (
                                                <span className='float-left w-full mt-[10px]'>
                                                    {
                                                        item.user.information.details.social_links.facebook && (
                                                            <SvgIcon
                                                                onClick={() => {
                                                                    window.open(item.user.information.details.social_links.facebook, '_blank')
                                                                }}
                                                                component={Facebook}
                                                            />
                                                        )
                                                    }

                                                    {
                                                        item.user.information.details.social_links.linkedIn && (
                                                            <SvgIcon
                                                                onClick={() => {
                                                                    window.open(item.user.information.details.social_links.linkedIn, '_blank')
                                                                }}
                                                                component={LinkedIn}
                                                            />
                                                        )
                                                    }

                                                    {
                                                        item.user.information.details.social_links.instagram && (
                                                            <SvgIcon
                                                                onClick={() => {
                                                                    window.open(item.user.information.details.social_links.instagram, '_blank')
                                                                }}
                                                                component={Instagram}
                                                            />
                                                        )
                                                    }

                                                    {
                                                        item.user.information.details.social_links.twitter && (
                                                            <SvgIcon
                                                                onClick={() => {
                                                                    window.open(item.user.information.details.social_links.twitter, '_blank')
                                                                }}
                                                                component={Twitter}
                                                            />
                                                        )
                                                    }

                                                </span>
                                            )
                                        }

                                    </span>
                                </span>
                            </div>
                            <span className='float-left w-full text-xs mt-[20px] text-justify mb-[20px] overflow-ellipsis'>
                                {
                                    item.about
                                }
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Team;