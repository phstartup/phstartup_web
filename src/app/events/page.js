"use client"
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text'
import Modal from '@/components/modal/index'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { SvgIcon } from '@mui/material';
import Style from '@/utils/Style';
import { useSession } from 'next-auth/react';
import TextArea from '@/components/form/textarea'
import Empty from '@/components/empty/Simple'
import LoadingContainer from '@/components/loading/SpinnerWhole'
import Select from '@/components/form/Select';
import String from '@/utils/String';
import DatePicker from '@/components/form/DatePicker';
import Api from '@/lib/api';
let api = new Api()

const minTotalDays = 1
// Start Date
var sDate = new Date(Date.now() + (1 * 86400000));
var sMonth = '0' + (sDate.getMonth() + 1)
var sYear = sDate.getFullYear()
var sDate = sDate.getDate()
var sDate = sYear + '-' + sMonth + '-' + sDate


// End Date
var date = new Date(Date.now() + ((minTotalDays + 1) * 86400000));
var month = '0' + (date.getMonth() + 1)
var year = date.getFullYear()
var nDate = date.getDate()
var eDate = year + '-' + month + '-' + nDate

const availableStatuses = ['Manila', 'Cebu', 'Davao'];
function Page(props) {
    const { data: session } = useSession()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [createFlag, setCreateFlag] = useState(false)
    const [title, setTitle] = useState(null)
    const [titleError, setTitleError] = useState(null)
    const [description, setDescription] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [link, setLink] = useState(null)
    const [linkError, setLinkError] = useState(null)
    const [target, setTarget] = useState(null)
    const [targetError, setTargetError] = useState(null)
    const [currency, setCurrency] = useState('PHP')
    const [price, setPrice] = useState(null)
    const [priceError, setPriceError] = useState(null)
    const [featured, setFeatured] = useState(null)
    const [featuredError, setFeaturedError] = useState(null)
    const [startDate, setStartDate] = useState(sDate)
    const [endDate, setEndDate] = useState(eDate)
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const submit = async () => {
        if (!session) return
        if (!title || !description || !link || !featured || !price || !target || !startDate || !endDate) return

        setBtnLoading(true)
        await api.post('/api/events', {
            title,
            description,
            featured,
            target,
            featured,
            price,
            currency,
            link,
            start_date: startDate,
            end_date: endDate
        }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                setCreateFlag(false)
                getData()
                init()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                setCreateFlag(false)
                getData()
                init()
            }, 1000)
        })
    }

    const init = () => {
        setTitle(null)
        setDescription(null)
        setTarget(null)
        setLink(null)
        setPrice(null)
        setFeatured(null)
        setStartDate(sDate)
        setEndDate(eDate)
    }

    const getData = async () => {
        if (session) {
            await api.get('/api/events', session?.accessToken, (response) => {
                if (response.data) {
                    setData(response.data)
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
            await api.getNoToken('/api/events', (response) => {
                if (response.data) {
                    setData(response.data)
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

    const handleFilter = (status) => {
        setFilter(status)
    }

    const renderPagination = () => {
        return (
            <div
                className="float-right mt-[20px]"
            >
                <span className="cursor-pointer text-green-400 font-bold">
                    <SvgIcon
                        component={ChevronLeft}
                    />
                    Prev

                </span>

                <span className='ml-[20px] cursor-pointer text-green-400 font-bold'>
                    Next
                    <SvgIcon
                        component={ChevronRight}
                    />
                </span>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className='w-full float-left mb-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Title</h1>
                    <TextInput
                        type="text"
                        placeholder="Event title"
                        value={title}
                        onChange={(value, error) => {
                            setTitle(value)
                            setTitleError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Title',
                            error: titleError
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Description</h1>
                    <TextArea
                        type="text"
                        placeholder="Write something about your event"
                        value={description}
                        onChange={(value, error) => {
                            setDescription(value)
                            setDescriptionError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Description',
                            error: descriptionError
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Featured Image</h1>
                    <TextInput
                        type="text"
                        placeholder="Event title"
                        value={featured}
                        onChange={(value, error) => {
                            setFeatured(value)
                            setFeaturedError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Featured Image',
                            error: featuredError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Event Date</h1>
                    <div className='w-full float-left'>
                        <span className='float-left w-[49%] mr-[1%]'>
                            <DatePicker
                                label="Start Date"
                                placeholder="Start Date"
                                value={startDate}
                                plus={1}
                                type="date"
                                onChange={(value) => {
                                    setStartDate(value)
                                }}
                            />
                        </span>

                        <span className='float-left w-[49%] mr-[1%]'>
                            <DatePicker
                                label="End Date"
                                placeholder="End Date"
                                value={endDate}
                                plus={0}
                                type="date"
                                onChange={(value) => {
                                    setEndDate(value)
                                }}
                            />
                        </span>
                    </div>
                </div>


                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Target Audience</h1>
                    <TextInput
                        type="text"
                        placeholder="startup, accelerator, government ..."
                        value={target}
                        onChange={(value, error) => {
                            setTarget(value)
                            setTargetError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Target',
                            error: targetError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Link</h1>
                    <TextInput
                        type="text"
                        placeholder="Eventbrite, facebook event, google calendar ..."
                        value={link}
                        onChange={(value, error) => {
                            setLink(value)
                            setLinkError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Link',
                            error: linkError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Ticket Price</h1>
                    <div className='float-left w-full'>
                        <div className='w-[50%] float-left'>
                            <Select
                                type="text"
                                data={String.currencies}
                                selected={currency}
                                placeholder="Select Currency"
                                onChange={(value) => {
                                    setCurrency(value)
                                }}
                            />
                        </div>
                        <div className='w-[50%] float-left'>
                            <TextInput
                                type="number"
                                placeholder="Price"
                                value={price}
                                onChange={(value, error) => {
                                    setPrice(value)
                                    setPriceError(error)
                                }}
                                validation={{
                                    type: 'number',
                                    size: 2,
                                    column: 'Price',
                                    error: priceError
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={`w-full float-left ` + (session ? '' : 'mt-[100px] ' + Style.padding)}>
            <div className='w-full float-left flex justify-between'>
                <div>
                    <Select
                        type="text"
                        data={String.categories}
                        selected={filter}
                        placeholder="Select Filter"
                        onChange={(value) => {
                            setFilter(value)
                        }}
                    />
                </div>
                {
                    session && session.user && session.user.company && (
                        <Button
                            style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                            title={"Add Event"}
                            onPress={() => {
                                setCreateFlag(true)
                            }}
                        />
                    )
                }
            </div>

            <div className='w-full float-left mt-[20px]'>
                {
                    !loading && data && data.length > 0 && data.map((item, index) => (
                        <div
                            key={index}
                            className='lg:w-[48%] xl:w-[48%] 2xl:w-[48%] ml-[1%] mr-[1%] sm:w-[98%] xs:w-[98%] md:w-[98%] float-left rounded-2xl lg:h-[300px] xl:h-[300px] md:h-[300px] sm:min-h-[300px] xs:min-h-[300px] md:min-h-[300px] overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:cursor-pointer mb-[20px]'>

                            <div className='lg:w-[300px] xl:w-[300px] 2xl:w-[300px] sm:w-full xs:w-full md:w-full h-[300px] float-left overflow-hidden'>
                                <img
                                    src={item.featured}
                                    height={250}
                                    width={250}
                                    className='rounded-2xl object-cover'
                                    alt={item.title}
                                />
                            </div>

                            <div className='lg:w-[calc(100%-300px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-300px)] sm:w-full xs:w-full md:w-full h-[300px] float-left p-[20px] text-justify overflow-hidden'>
                                <span className='text-2xl font-bold w-full float-left'>
                                    {
                                        item.title
                                    }
                                </span>
                                <span className='text-sm w-full float-left mt-[10px]'>
                                    {
                                        item.start_date
                                    }
                                </span>
                                <span className='text-sm w-full float-left font-semibold mt-[20px]'>
                                    {
                                        item.currency + ' ' + parseFloat(item.price).toFixed(2)
                                    }
                                </span>
                                <span className='text-sm w-full float-left h-[60px] text-ellipsis overflow-hidden'>
                                    {
                                        item.description
                                    }
                                </span>
                                <span className='w-full float-left mt-[20px]'>
                                    <Button
                                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                                        title="Visit Event"
                                        onPress={() => {
                                            window.open(item.link, '_blank')
                                        }}
                                    />
                                </span>

                            </div>
                        </div>
                    ))
                }
                {
                    !loading && data == null && (
                        <Empty />
                    )
                }
                {
                    loading && (
                        <LoadingContainer />
                    )
                }
            </div>

            <div className='w-full float-left mt-[20px]'>
                {
                    renderPagination()
                }
            </div>

            {
                createFlag && (
                    <Modal
                        title="Create Event"
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

export default Page;