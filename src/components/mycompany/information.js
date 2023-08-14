"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Button from '@/components/buttons/btn'
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Select from '@/components/form/Select';
import String from '@/utils/String';
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';
import loadable from '@loadable/component';
const ReactJson = loadable(() => import('react-json-view'));

let api = new Api()
function Information(props) {
    const { data: session } = useSession()
    const [editFlag, setEditFlag] = useState(false)
    const [name, setName] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [description, setDescription] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [stage, setStage] = useState(null)
    const [category, setCategory] = useState(null)
    const [industries, setIndustries] = useState(null)
    const [address, setAddress] = useState(null)
    const [addressError, setAddressError] = useState(null)
    const [website, setWebsite] = useState(null)
    const [websiteError, setWebsiteError] = useState(null)
    const [emailAddress, setEmailAddress] = useState(null)
    const [emailAddressError, setEmailAddressError] = useState(null)
    const [contactNumber, setContactNumber] = useState(null)
    const [contactNumberError, setContactNumberError] = useState(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [data, setData] = useState(null)
    const [settings, setSettings] = useState(null)
    const [mobileApps, setMobileApps] = useState({
        apple: "https://apple.com",
        android: 'https://android.google.com',
        huawei: 'https://huawei.com'
    })
    const [socialMedias, setSocialMedias] = useState({
        facebook: 'https://facebook.com',
        linkedIn: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
    })
    const [ask, setAsk] = useState(null)

    useEffect(() => {
        if (props.data) {
            let data = props.data
            setName(data.name)
            setDescription(data.description)
            setCategory(data.category)
            setIndustries(data.industries)
            setAddress(data.address)
            setWebsite(data.website)
            setEmailAddress(data.email_address)
            setContactNumber(data.contact_number)
            setStage(data.stage)
            setAsk(data.ask)
            setData(data)
            setSettings(data.settings)
            if (data.settings) {
                setSocialMedias(data.settings.social_medias ? data.settings.social_medias : socialMedias)
                setMobileApps(data.settings.mobile_apps ? data.settings.mobile_apps : mobileApps)
            }
        }else{
            setCategory(String.categories[0].value)
            setIndustries(String.industries[0].value)
            setStage(String.stages[0].value)
            setAsk(String.ask[0].value)
        }
    }, [])

    const submit = async (item) => {
        if (!session) return
        if (item == null) return
        setBtnLoading(true)
        await api.post('/api/companies', { ...item }, session?.accessToken, (response) => {
            setTimeout(() => {
                setBtnLoading(false)
                props.getData()
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setBtnLoading(false)
                props.getData()
            }, 1000)

        })
    }

    const validate = () => {
        submit({
            id: data ? data.id : null,
            name,
            description,
            stage,
            ask,
            category,
            industries,
            address,
            website,
            email_address: emailAddress,
            contact_number: contactNumber,
            settings: {
                ...settings,
                social_medias: socialMedias,
                mobile_apps: mobileApps
            }
        })
    }
    const renderFields = () => {
        return (
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Company / Startup name</h1>
                    <TextInput
                        type="text"
                        placeholder="Startup Name"
                        value={name}
                        onChange={(value, error) => {
                            setName(value)
                            setNameError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Name',
                            error: nameError
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Short description</h1>
                    <TextArea
                        type="text"
                        placeholder="Short description"
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
                    <h1 className='text-sm mb-[20px]'>Are you looking for</h1>
                    <Select
                        type="text"
                        data={String.ask}
                        selected={ask}
                        placeholder="Select Ask"
                        onChange={(value) => {
                            setAsk(value)
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Company Stage</h1>
                    <Select
                        type="text"
                        data={String.stages}
                        selected={stage}
                        placeholder="Select Stage"
                        onChange={(value) => {
                            setStage(value)
                        }}
                    />
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Initiative Category</h1>
                    <Select
                        type="text"
                        data={String.categories}
                        selected={category}
                        placeholder="Select Category"
                        onChange={(value) => {
                            setCategory(value)
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Industry</h1>
                    <Select
                        type="text"
                        data={String.industries}
                        selected={industries}
                        placeholder="Select Industries"
                        onChange={(value) => {
                            setIndustries(value)
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Website</h1>
                    <TextInput
                        type="text"
                        placeholder="Website url"
                        value={website}
                        onChange={(value, error) => {
                            setWebsite(value)
                            setWebsiteError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Wesite',
                            error: websiteError
                        }}
                    />
                </div>


                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Email Address</h1>
                    <TextInput
                        type="email"
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={(value, error) => {
                            setEmailAddress(value)
                            setEmailAddressError(error)
                        }}
                        validation={{
                            type: 'email',
                            size: 2,
                            column: 'Email Address',
                            error: emailAddressError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Contact #</h1>
                    <TextInput
                        type="text"
                        placeholder="Contact #"
                        value={contactNumber}
                        onChange={(value, error) => {
                            setContactNumber(value)
                            setContactNumberError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Contact Number',
                            error: contactNumberError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Address</h1>
                    <TextInput
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(value, error) => {
                            setAddress(value)
                            setAddressError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Startup Address',
                            error: addressError
                        }}
                    />
                </div>

                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Social Media</h1>
                    <div className='w-full h-[150px] float-left'>
                        <ReactJson
                            src={socialMedias}
                            editFlag={true}
                            onEdit={(e) => {
                                setSocialMedias({
                                    ...socialMedias,
                                    [e.name]: e.new_value
                                })
                            }}
                        />
                    </div>
                </div>
                <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Mobile Apps</h1>
                    <div className='w-full h-[150px] float-left'>
                        <ReactJson
                            src={mobileApps}
                            editFlag={true}
                            onEdit={(e) => {
                                setMobileApps({
                                    ...mobileApps,
                                    [e.name]: e.new_value
                                })
                            }}
                        />
                    </div>
                </div>

                {/* <div className='w-full float-left text-sm mt-[20px]'>
                    <h1 className='text-sm mb-[20px]'>Total Employees</h1>
                    <TextInput
                        type="text"
                        placeholder="Employees"
                    />
                </div> */}

                <div className='float-left w-full' >
                    <Button
                        style={' bg-red-500 text-white mr-[20px]'}
                        title={"Cancel"}
                        onPress={() => {
                            setEditFlag(!editFlag)
                        }}
                    />
                    <Button
                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                        title={props.data ? 'Update' : "Save"}
                        loading={btnLoading}
                        onPress={() => {
                            validate()
                        }}
                    />

                </div>
            </div>
        )
    }
    return (
        <div className={Style.cardContainer}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Company / Startup Details</span>
                {
                    !editFlag && (
                        <Button
                            style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                            title={editFlag ? "Close" : props.data == null ? "Setup" : "Edit"}
                            onPress={() => {
                                setEditFlag(!editFlag)
                            }}
                        />
                    )
                }

            </div>
            {/* {
                editFlag && renderFields()
            } */}

        </div>
    );
}

export default Information;