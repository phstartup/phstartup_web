import React, { useEffect, useState } from 'react';
import Youtube from '@/components/video/Youtube'
import { SvgIcon } from '@mui/material';
import Add from '@mui/icons-material/Add';
import Face6 from '@mui/icons-material/Face6';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'
import Helper from '@/lib/helper';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Skeleton from '@/components/loading/Single'
let helper = new Helper()

import Api from '@/lib/api';
let api = new Api()

function ModalVideo(props) {
    const router = useRouter()
    const [addComment, setAddComment] = useState(false)
    const [comment, setComment] = useState(null)
    const [commentError, setCommentError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const { data: session } = useSession()
    const [comments, setComments] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
        submitView()
    }, [])

    const getData = async () => {
        setLoading(false)
        if (!props.data) return
        setLoading(true)
        if (session) {
            await api.get('/api/comments?payload=pitch&payload_value=' + props.data.id, session?.accessToken, (response) => {
                if (response.data) {
                    setComments(response.data)
                }
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }, (error) => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })
        } else {
            await api.getNoToken('/api/comments?payload=pitch&payload_value=' + props.data.id, (response) => {
                if (response.data) {
                    setComments(response.data)
                }
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }, (error) => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })
        }

    }

    const submit = async () => {
        if (!session) return
        if (!comment) return
        if (!props.data) return

        setBtnLoading(true)
        await api.post('/api/comments', {
            content: comment,
            payload: 'pitch',
            payload_value: props.data.id
        }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                setAddComment(false)
                setCommentError(null)
                setComment(null)
                getData()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                setAddComment(false)
                setComment(null)
                setCommentError(null)
                getData()
            }, 1000)
        })
    }

    const submitView = async () => {
        if (!props.data) return

        if(session){
            await api.post('/api/views', {
                payload: 'pitch',
                payload_value: props.data.id
            }, session?.accessToken, (response) => {
            }, (error) => {
            })
        }else{
            await api.postRegister('/api/views', {
                payload: 'pitch',
                payload_value: props.data.id
            }, (response) => {
            }, (error) => {
            })
        }

        
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
        <div id="large-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full items-center content-center justify-center flex modal">
            <div className="relative w-full max-w-4xl max-h-full">
                <div className={"relative bg-white rounded-lg shadow overflow-hidden " + (session ? 'dark:bg-gray-900' : 'dark:bg-black')}>
                    <div className="flex items-center justify-between p-5">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {
                                props.title
                            }
                        </h3>
                        <button
                            onClick={() => {
                                props.onClose()
                            }}
                            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className={'w-full float-left min-h-[200px] overflow-y-hidden bg-white ' + (session ? 'dark:bg-gray-900' : 'dark:bg-black')}>
                        {
                            props.url && (
                                <Youtube url={props.url} />
                            )
                        }
                    </div>
                    <div className='w-full float-left px-[20px] mt-[20px]'>
                        <div className='w-full float-left flex justify-between text-sm font-bold'>
                            {
                                props.data.views && (
                                    <span className='h-[50px] flex items-center content-center'>{props.data.views} Views</span>
                                )
                            }
                            {
                                props.data.company && (
                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-black'}
                                        title="More details"
                                        onPress={() => {
                                            router.push('/company?id=' + props.data.company.id)
                                        }}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full float-left pb-[20px] px-[20px]'>
                        <div className='w-full float-left mt-[20px] mb-[20px] flex justify-between'>
                            <span>
                                <h1 className='text-xl font-medium'>Comments</h1>
                            </span>
                            <span>
                                <SvgIcon component={Add}
                                    style={{
                                        fontSize: 30
                                    }}
                                    className='cursor-pointer'
                                    onClick={() => {
                                        if (session) {
                                            setAddComment(true)
                                        } else {
                                            router.push('/login')
                                        }

                                    }}
                                />
                            </span>
                        </div>
                        {
                            addComment && (
                                <div className='w-full float-left'>
                                    <div className='w-full float-left mb-[20px] border-b border-b-gray-100 dark:border-b-gray-700'>
                                        <div className='w-full float-left text-sm'>
                                            <h1 className='text-sm mb-[20px]'>New Comment</h1>
                                            <TextArea
                                                type="text"
                                                placeholder="Type something here"
                                                value={comment}
                                                onChange={(value, error) => {
                                                    setComment(value)
                                                    setCommentError(error)
                                                }}
                                                validation={{
                                                    type: 'text',
                                                    size: 2,
                                                    column: 'Comment',
                                                    error: commentError
                                                }}
                                            />
                                        </div>
                                        <div className='w-full float-left text-sm mb-[20px]'>
                                            <Button
                                                style={' bg-red-400 text-white'}
                                                title="Cancel"
                                                onPress={() => {
                                                    setAddComment(false)
                                                    setComment(null)
                                                    setCommentError(null)
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
                                    </div>
                                </div>
                            )
                        }
                        <div className='w-full float-left'>

                            {
                                !loading && comments && comments.map((item, index) => (
                                    <div className='w-full float-left mb-[20px] border-b border-b-gray-100 dark:border-b-gray-700' key={index}>
                                        <span className='w-full float-left flex justify-between text-sm'>
                                            <span>
                                                <span>
                                                    {
                                                        renderProfile(item.user)
                                                    }
                                                </span>
                                                <span className='font-semibold h-[30px] flex items-center content-center float-left'>
                                                    {
                                                        helper.getName(item.user)
                                                    }
                                                </span>
                                            </span>
                                            <span>
                                                {
                                                    'Posted on ' + item.updated_at
                                                }
                                            </span>
                                        </span>
                                        <span className='w-full float-left mt-[20px] text-sm mb-[20px]'>
                                            <span className='w-full text-justify float-left'>
                                                {
                                                    item.content
                                                }
                                            </span>
                                        </span>
                                    </div>
                                ))
                            }
                            {
                                loading && [1, 2, 3, 4, 5].map((item, index) => (
                                    <Skeleton key={index} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalVideo;