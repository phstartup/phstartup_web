"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import TextInput from '@/components/form/text';
import TextArea from '@/components/form/textarea'
import Button from '@/components/buttons/btn'
import Select from '@/components/form/Select';
import ReactJson from 'react-json-view'
import String from '@/utils/String';
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';
let api = new Api()

function Details(props) {
    const [type, setType] = useState(null)
    const [about, setAbout] = useState(null)
    const [aboutError, setAboutError] = useState(null)
    const [socialMedias, setSocialMedias] = useState({
        facebook: 'https://facebook.com',
        linkedIn: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
    })
    const { data: session } = useSession()
    const [btnLoading, setBtnLoading] = useState(false)
    const [gender, setGender] = useState(null)
    const [attainment, setAttainment] = useState(null)
    const [course, setCourse] = useState(null)
    const [courseError, setCourseError] = useState(null)

    useEffect(() => {
        if (session && session.user) {
            let user = session.user
            if (user.information && user.information.details) {
                let details = user.information.details
                setAbout(details.about)
                setType(details.type)
                setSocialMedias(details.social_links)
                setCourse(details.course)
                setAttainment(details.attainment)
            }else{
                setGender('Male')
                setAttainment('Bachelor')
            }
        }
    }, [])

    const submit = async () => {
        if (!session) return
        if (!session.user) return
        if (!session.user.information) return
        setBtnLoading(true)
        await api.post('/api/informations', {
            id: session.user.information.id,
            user_id: session.user.id,
            details: JSON.stringify({
                about,
                type,
                social_links: socialMedias,
                attainment,
                course
            })
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

    return (
        <div className={Style.cardContainer}>
            <h1 className='text-lg font-bold'>More About You</h1>

            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>I am a</h1>
                <Select
                    type="text"
                    data={String.accountTypes}
                    selected={type}
                    placeholder="Select Type"
                    onChange={(value) => {
                        setType(value)
                    }}
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>Short description</h1>
                <TextArea
                    type="text"
                    placeholder="Tell us more about you..."
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
            <div className='w-full float-left text-sm'>
                <h1 className='text-sm mb-[20px]'>Gender</h1>
                <Select
                    type="text"
                    data={[{
                        value: 'Male'
                    }, {
                        value: 'Female'
                    }, {
                        value: 'Others'
                    }]}
                    selected={gender}
                    placeholder="Select Gender"
                    onChange={(value) => {
                        setGender(value)
                    }}
                />
            </div>
            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>Highest Education Attainment</h1>
                <Select
                    type="text"
                    data={[{
                        value: 'Bachelor'
                    }, {
                        value: 'Graduate Studies'
                    }, {
                        value: 'Doctorate'
                    }]}
                    selected={attainment}
                    placeholder="Select Attainment"
                    onChange={(value) => {
                        setAttainment(value)
                    }}
                />
            </div>
            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>Field of study</h1>
                <TextInput
                    type="text"
                    placeholder="Field of study of your highest education attainment"
                    value={course}
                    onChange={(value, error) => {
                        setCourse(value)
                        setCourseError(error)
                    }}
                    validation={{
                        type: 'text',
                        size: 2,
                        column: 'Course',
                        error: courseError
                    }}
                />
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                <h1 className='text-sm mb-[20px]'>My Social Links</h1>
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

            <div className='w-full h-[50px] float-left mt-[20px]'>

                <span className='float-left'>
                    <Button
                        style={' bg-black dark:bg-white text-white dark:text-gray-900'}
                        title="Update"
                        loading={btnLoading}
                        onPress={() => {
                            submit()
                        }}
                    />
                </span>

            </div>
        </div>
    );
}

export default Details;