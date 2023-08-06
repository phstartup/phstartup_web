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

    useEffect(() => {
        if (session && session.user) {
            let user = session.user
            if (user.information && user.information.details) {
                let details = user.information.details
                setAbout(details.about)
                setType(details.type)
                setSocialMedias(details.social_links)
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
                social_links: socialMedias
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