import { Close } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Api from '@/lib/api';
let api = new Api()
import Helper from '@/lib/helper';
import Skeleton from '@/components/loading/Single'
import { useSession } from 'next-auth/react';
import Empty from '@/components/empty/Simple'
let helper = new Helper()

function Notifications(props) {
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        if (!session) return
        setLoading(true)
        await api.get('/api/notifications', session?.accessToken, (response) => {
            setLoading(false)
            if (response.data) {
                setData(response.data)
            } else {
                setData([])
            }
        }, (error) => {
            setLoading(false)
            setData([])
        })
    }

    const renderProfile = (user) => {
        return (
            <div
                className='h-[30px] w-[30px] mr-[10px] float-left relative'
            >
                {
                    (user.information && user.information.profile) ? (
                        <img
                            src={user.information.profile}
                            width={30}
                            height={30}
                            className='rounded-[15px] cursor-pointer border-2 border-green-500 dark:border-green-500'
                            alt={user.information.profile}
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
            </div>
        )
    }

    return (
        <div className='absolute top-[80px] right-0 w-[450px] h-[calc(100vh-80px)] bg-white dark:bg-gray-800 border-l-[1px] border-gray-200 dark:border-gray-700'>
            <div className='w-full float-left h-[80px] px-[20px] flex justify-between items-center content-center border-b-[1px] border-gray-200 dark:border-gray-700'>
                <span className='font-semibold'>
                    Notifications
                </span>
                <SvgIcon
                    onClick={() => {
                        props.onClose()
                    }}
                    className='cursor-pointer'
                    component={Close}
                />
            </div>
            <div className='w-full float-left h-[calc(100vh-160px)] overflow-scroll'>
                {
                    !loading && data && data.length > 0 && data.map((item, index) => (
                        <div
                            key={index}
                            className='cursor-pointer float-left w-full px-[20px] py-[20px] border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'>
                            <span className='w-full float-left text-sm mb-[10px] font-semibold'>
                                <span>
                                    {
                                        renderProfile(item.user)
                                    }
                                </span>
                                <span className='font-semibold'>
                                    {
                                        helper.getName(item.user)
                                    }
                                </span>
                            </span>
                            <span className='w-full float-left text-sm'>
                                {
                                    item.message
                                }
                            </span>
                            <span className='w-full float-left text-xs text-green-500 mt-[10px] font-semibold'>
                                {
                                    item.created_at
                                }
                            </span>
                        </div>
                    ))
                }
                {
                    loading && [1, 2, 3, 4, 5].map((item, index) => (
                        <div key={index}
                            className='cursor-pointer float-left w-full border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'>
                            <Skeleton />
                        </div>
                    ))
                }
                {
                    !loading && data && data.length == 0 && (
                        <div className='w-full float-left'>
                            <Empty />
                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default Notifications;