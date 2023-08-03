import React, { useState } from 'react';
import Youtube from '@/components/video/Youtube'
import { SvgIcon } from '@mui/material';
import { Add, Face6 } from '@mui/icons-material';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'
import Helper from '@/lib/helper';
let helper = new Helper()

const comments = [{
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}, {
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}, {
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}]
function ModalVideo(props) {
    const [addComment, setAddComment] = useState(false)
    const [comment, setComment] = useState(null)
    const [commentError, setCommentError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)

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
        <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full items-center content-center justify-center flex modal">
            <div className="relative w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-900 overflow-hidden">
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
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className='w-full float-left min-h-[200px] overflow-y-hidden bg-white dark:bg-gray-900'>
                        {
                            props.url && (
                                <Youtube url={props.url} />
                            )
                        }
                    </div>
                    <div className='w-full float-left px-[20px] mt-[20px]'>
                        <div className='w-full float-left flex justify-between text-sm font-bold'>
                            1,000 Views
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
                                        setAddComment(true)
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
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className='w-full float-left'>

                            {
                                comments && comments.map((item, index) => (
                                    <div className='w-full float-left mb-[20px] border-b border-b-gray-100 dark:border-b-gray-700' key={index}>
                                        <span className='w-full float-left flex justify-between text-sm'>
                                            <span>
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
                                            <span>
                                                {
                                                    'Posted on ' + item.created_at
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalVideo;