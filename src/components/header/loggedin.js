"use client"
import React, { useEffect, useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { SvgIcon } from '@mui/material';
import { Business, DarkMode, Face6, LightMode, MenuOutlined, Message, Notifications, Person3Rounded, Search, Settings } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import useColorMode from '@/hooks/useColorMode';
import String from '@/utils/String'
import Profile from '@/assets/profile.png'
import { useSession } from 'next-auth/react';
import config from '../../../src/config';
import { signOut } from 'next-auth/react';
import CustomNotifications from '@/components/notifications'


const dropdownMenu = [{
    title: 'Settings',
    icon: Settings,
    route: '/settings'
}]

function Loggedin(props) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    const [colorMode, setColorMode] = useColorMode();
    const { data: session } = useSession();
    const [menu, setMenu] = useState([])
    const [dropdown, setDropdown] = useState(false)
    const [notifFlag, setNotifFlag] = useState(false)

    useEffect(() => {
        let actType = parseInt(session?.user?.account_type)

        if (actType == config.admin) {
            setMenu(String.adminMenu)
        } else {
            setMenu(String.loggedInMenu)
        }
    }, [session])

    const renderDropdown = () => {
        return (
            <div className={"z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] right-0 top-[60px] dark:bg-gray-800 dark:divide-gray-800 border border-gray-200 dark:border-gray-700 " + (dropdown == false ? 'hidden' : '')}>
                <div className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                    <div className='text-lg font-semibold'>Hi {session?.user.name}!</div>
                    <div className="font-medium truncate">{session?.user?.email}</div>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-200">
                    {
                        dropdownMenu && dropdownMenu.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    router.push(item.route)
                                }}
                            >
                                <span className="block px-4 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</span>
                            </li>
                        ))
                    }

                </ul>
                <div className="mb-[20px]">
                    <span
                        onClick={() => {
                            signOut({
                                callbackUrl: `${window.location.origin}`
                            })
                        }}
                        className="block px-4 cursor-pointer py-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                </div>
            </div>

        )
    }

    const renderProfile = () => {
        return (
            <div
                onClick={() => {
                    // router.push('/profile')
                    setDropdown(!dropdown)
                }}
                className='h-[30px] w-[30px] mr-[10px] float-left relative'
            >
                {
                    (session?.user?.information && session.user.information.profile) ? (
                        <img
                            src={session.user.information.profile}
                            width={30}
                            height={30}
                            className='rounded-[15px] cursor-pointer border-2 border-green-500 dark:border-green-500'
                            alt={session?.user?.name}
                        />
                    ) : (
                        <div className='h-[30px] w-[30px] rounded-[15px] bg-green-400 dark:bg-white float-left cursor-pointer'>
                            <SvgIcon component={Face6}
                                className='text-white dark:text-black'
                                style={{
                                    fontSize: 30
                                }}
                            />
                        </div>
                    )
                }

                {
                    renderDropdown()
                }

            </div>
        )
    }
    return (
        <div
            className='z-50 float-left w-full h-[80px] fixed bg-white dark:bg-gray-800 border-b-[1px] border-b-gray-200  dark:border-b-gray-700'
        >
            <div className='lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden'>
                <div
                    className={'w-1/4 h-[80px] float-left content-center items-center flex href-link px-[20px]'}
                >
                    <Logo />
                </div>
                <div
                    className={'h-[80px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[20px]'}
                >
                    <div>
                    </div>
                    <div className='h-[80px] flex content-center items-center justify-between'>
                        {/* <span className='href-link cursor-pointer px-[20px] pr-[20px] text-sm float-left font-bold'>
                            Hi {session?.user.name}!
                        </span> */}
                        <SvgIcon
                            component={Notifications}
                            onClick={() => {
                                setNotifFlag(!notifFlag)
                            }}
                            className='cursor-pointer float-left mr-[20px] ml-[20px]'
                        />
                        <SvgIcon
                            component={Message}
                            onClick={() => {
                                router.push('/messages')
                            }}
                            className='cursor-pointer float-left mr-[20px]'
                        />
                        <SvgIcon
                            component={colorMode == 'light' ? DarkMode : LightMode}
                            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
                            className='cursor-pointer float-left mr-[20px]'
                        />
                        {
                            renderProfile()
                        }
                    </div>
                </div>
            </div>
            <div className='sm:block md:block xs:block lg:hidden 2xl:hidden'>
                <div
                    className='w-full h-[80px] float-left href-link px-[20px] pr-[20px] flex items-center content-center justify-between'
                >
                    <div className='w-[5g0%]'>
                        <Logo />
                    </div>
                    <div>
                        <SvgIcon
                            component={Notifications}
                            onClick={() => {
                                setNotifFlag(!notifFlag)
                            }}
                            className='cursor-pointer float-left mr-[20px] ml-[20px]'
                        />
                        <SvgIcon
                            component={Message}
                            onClick={() => {
                                router.push('/messages')
                            }}
                            className='cursor-pointer float-left mr-[20px]'
                        />
                        {
                            renderProfile()
                        }
                        <SvgIcon
                            component={MenuOutlined}
                            className='cursor-pointer ml-[20px]'
                            onClick={() => {
                                setToggle(!toggle)
                            }}
                        />
                    </div>
                </div>
            </div>
            {
                toggle && (
                    <div className='w-full h-[calc(100vh-80px)] absolute mt-[80px] px-[20px] pr-[20px] bg-white dark:bg-gray-800'
                    >
                        {
                            menu && menu.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        router.push('/' + item.route)
                                        setToggle(!toggle)
                                    }}
                                    className='w-full float-left h-[60px] flex items-center content-center hover:font-bold cursor-pointer'>
                                    <SvgIcon component={item.icon} className='text-gray-500' />
                                    <span className='text-sm ml-[10px]'>{item.title}</span>
                                </div>
                            ))
                        }
                        <div className='mt-[50px] w-full float-left'>
                            {
                                ['Logout'].map((item, index) => (
                                    <div
                                        key={index}
                                        className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                                        onClick={() => {
                                            router.push('/' + item.toLowerCase())
                                            setToggle(!toggle)
                                        }}
                                    >
                                        {
                                            item
                                        }
                                    </div>
                                ))
                            }
                            <div
                                className='hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm'
                                onClick={() => {
                                    setColorMode(colorMode === "light" ? "dark" : "light")
                                    setToggle(!toggle)
                                }}
                            >
                                {
                                    colorMode == 'dark' ? 'Light Mode' : 'Dark Mode'
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            {
                notifFlag && (
                    <CustomNotifications
                        onClose={() => {
                            setNotifFlag(false)
                        }}
                    />
                )
            }
        </div>
    );
}

export default Loggedin;