"use client"
import React, { useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import Modal from '@/components/modal/index'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import { SvgIcon } from '@mui/material';
import { Delete, Face6, Facebook, Instagram, LinkedIn, Twitter, VideoCameraBack } from '@mui/icons-material';
import Helper from '@/lib/helper';
import { useSession } from 'next-auth/react';
let helper = new Helper()
import Api from '@/lib/api';
let api = new Api()

function Team(props) {
    const [createFlag, setCreateFlag] = useState(false)
    const [profile, setProfile] = useState(null)
    const { data: session } = useSession()
    const { data } = props
    const [position, setPosition] = useState(null)
    const [positionError, setPositionError] = useState(null)
    const [about, setAbout] = useState(null)
    const [aboutError, setAboutError] = useState(null)
    const [video, setVideo] = useState(null)
    const [videoError, setVideoError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchField, setSearchField] = useState(null)
    const [searchFieldError, setSearchFieldError] = useState(null)
    const [searchLoading, setSearchLoading] = useState(false)

    const submit = async () => {
        if (!session) return
        if (!position) return
        if (!about) return
        if (!profile) return
        if (!data) return
        if (!video) return

        setBtnLoading(true)
        await api.post('/api/teams', {
            user_id: profile.id,
            company_id: data.id,
            position,
            about,
            video
        }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                window.location.reload()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                window.location.reload()
            }, 1000)

        })
    }
    const getProfile = async () => {
        if(!session) return
        setSearchLoading(true)
        await api.get('/api/user?id=' + searchField, session?.accessToken, (response) => {
            if (response.data) {
                setProfile(response.data)
            }
            setTimeout(() => {
                setSearchLoading(false)
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setSearchLoading(false)
            }, 1000)
        })
    }

    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left mb-[20px]'>
                    {
                        session && session.user && (
                            <div className='w-full float-left'>
                                <Button
                                    style={' bg-black dark:bg-white text-white dark:text-black'}
                                    title="Add your profile"
                                    onPress={() => {
                                        setProfile(session.user)
                                    }}
                                />

                                <Button
                                    style={' bg-black dark:bg-white text-white dark:text-black ml-[10px]'}
                                    title="Search"
                                    onPress={() => {
                                        setSearch(true)
                                    }}
                                />
                            </div>
                        )
                    }
                </div>
                {
                    search && (
                        <div className='w-full float-left mb-[20px]'>
                            <div className='w-[80%] float-left'>
                                <TextInput
                                    type="text"
                                    placeholder="Paste User ID"
                                    value={searchField}
                                    onChange={(value, error) => {
                                        setSearchField(value)
                                        setSearchFieldError(error)
                                    }}
                                    validation={{
                                        type: 'text',
                                        size: 36,
                                        column: 'Search',
                                        error: searchFieldError
                                    }}
                                />
                            </div>
                            <div className='w-[20%] float-left'>
                                <Button
                                    style={' bg-black dark:bg-white text-white dark:text-black ml-[10px]'}
                                    title="Find"
                                    loading={searchLoading}
                                    onPress={() => {
                                        getProfile()
                                    }}
                                />
                            </div>
                        </div>
                    )
                }

                {
                    profile && (
                        <div className='w-full float-right p-[20px] border border-gray-100 rounded-lg mb-[20px]'>
                            <div className='w-full float-left'>
                                <span className='float-left w-[100px]'>
                                    {
                                        renderProfile(profile)
                                    }
                                </span>
                                <span className='float-left w-[calc(100%-100px)] h-[100px] flex items-center content-center' >
                                    <span className='w-full float-left  pl-[10px] flex justify-between'>
                                        <span className='font-semibold'>
                                            {
                                                helper.getName(profile)
                                            }
                                        </span>
                                        <span>
                                            <SvgIcon component={Delete}
                                                onClick={() => {
                                                    setProfile(null)
                                                }}
                                                className='text-red-500 cursor-pointer'
                                            />
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    )
                }

                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Position</h1>
                    <TextInput
                        type="text"
                        placeholder="CEO, COO, CMO ..."
                        value={position}
                        onChange={(value, error) => {
                            setPosition(value)
                            setPositionError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Position',
                            error: positionError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Description</h1>
                    <TextArea
                        type="text"
                        placeholder="Write something specific of what you do..."
                        value={about}
                        onChange={(value, error) => {
                            setAbout(value)
                            setAboutError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'About',
                            error: aboutError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Video Link</h1>
                    <TextInput
                        type="text"
                        placeholder="Video url"
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
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>

                <span className='text-lg font-bold'>Founders / Executives</span>
                <span>
                    <Button
                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                        title="Add"
                        onPress={() => {
                            setCreateFlag(true)
                        }}
                    />
                </span>
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>

                {
                    data && data.teams && data.teams.map((item, index) => (
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
                                <span className='float-left w-[70%] h-[100px] flex items-center content-center pl-[10px]' >
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
                                            {
                                                item.video && (
                                                    <SvgIcon 
                                                        className='ml-[10px]'
                                                        style={{
                                                            fontSize: 18
                                                        }}
                                                        onClick={() => {
                                                            window.open(item.video, '_blank')
                                                        }}
                                                        component={VideoCameraBack} />
                                                )
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
                                                                style={{
                                                                    fontSize: 18
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
                                                                style={{
                                                                    fontSize: 18
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
                                                                style={{
                                                                    fontSize: 18
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
                                                                style={{
                                                                    fontSize: 18
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

            {
                createFlag && (
                    <Modal
                        title="Add Team Member"
                        onClose={() => {
                            setCreateFlag(!createFlag)
                            setSearch(null)
                            setSearchField(null)
                            setSearchLoading(false)
                            setProfile(null)
                        }}
                        content={renderContent}
                        footer={() => {
                            return (
                                <div className='w-full float-left'>
                                    <Button
                                        style={' bg-red-400 text-white'}
                                        title="Cancel"
                                        onPress={() => {
                                            setCreateFlag(!createFlag)
                                            setSearch(null)
                                            setSearchField(null)
                                            setSearchLoading(false)
                                            setProfile(null)
                                        }}
                                    />

                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black ml-[20px]'}
                                        title="Save"
                                        loading={btnLoading}
                                        onPress={() => {
                                            submit()
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

export default Team;