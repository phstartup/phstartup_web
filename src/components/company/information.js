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

let api = new Api()
function Information(props) {
    const { data: session } = useSession()
    const [editFlag, setEditFlag] = useState(false)
    const [name, setName] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [description, setDescription] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)
    const [category, setCategory] = useState(null)
    const [categoryError, setCategoryError] = useState(null)
    const [industries, setIndustries] = useState(null)
    const [industriesError, setIndustriesError] = useState(null)
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
            setData(data)
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
            category,
            industries,
            address,
            website,
            email_address: emailAddress,
            contact_number: contactNumber,
            settings: {
                logo: null,
                banner: null
            }
        })
    }
    const renderFields = () => {
        return (
            <div className='w-full float-left text-sm mt-[20px]'>
                <div className='w-full float-left text-sm'>
                    <h1 className='text-sm mb-[20px]'>Startup name</h1>
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
                    <h1 className='text-sm mb-[20px]'>Initiative Category</h1>
                    <TextInput
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(value, error) => {
                            setCategory(value)
                            setCategoryError(error)
                        }}
                        validation={{
                            type: 'text',
                            size: 2,
                            column: 'Category',
                            error: categoryError
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
        <div className={Style.cardContainerHome}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Statup Details</span>
            </div>
            {
                editFlag && renderFields()
            }

        </div>
    );
}

export default Information;