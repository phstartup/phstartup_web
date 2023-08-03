"use client"
import React, { useEffect, useState } from 'react';
import Achievements from '@/components/company/Achievements';
import Banner from '@/components/company/Banner';
import Services from '@/components/company/Services'
import Pitches from '@/components/company/pitches'
import VouchedBy from '@/components/company/VouchedBy'
import Team from '@/components/company/team';
import Api from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import Style from '@/utils/Style';
let api = new Api()


const vouched_by = [{
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            position: 'CEO, Increment Technologies Inc.',
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}, {
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            position: 'CEO, Increment Technologies Inc.',
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}, {
    created_at: 'July 1, 2023',
    user: {
        username: 'kennette',
        information: {
            position: 'CEO, Increment Technologies Inc.',
            first_name: 'Kennette',
            last_name: 'Canales',
            profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c'
        },
        id: 1
    },
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
}]


const team = [{
    username: 'kennette',
    information: {
        position: 'CEO, Increment Technologies Inc.',
        first_name: 'Kennette',
        last_name: 'Canales',
        profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c',
        social: {
            facebook: 'https://facebook.com',
            linkedIn: 'https://linkedin.com'
        },
        contact_number: '09123456789',
        email: 'kenn@jiph.co',
        about: 'Software Engineer'
    },
    id: 1
}, {
    username: 'kennette',
    information: {
        position: 'CEO, Increment Technologies Inc.',
        first_name: 'Kennette',
        last_name: 'Canales',
        profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c',
        social: {
            facebook: 'https://facebook.com',
            linkedIn: 'https://linkedin.com'
        },
        contact_number: '09123456789',
        email: 'kenn@jiph.co',
        about: 'Software Engineer'
    },
    id: 1
}, {
    username: 'kennette',
    information: {
        position: 'CEO, Increment Technologies Inc.',
        first_name: 'Kennette',
        last_name: 'Canales',
        profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c',
        social: {
            facebook: 'https://facebook.com',
            linkedIn: 'https://linkedin.com'
        },
        contact_number: '09123456789',
        email: 'kenn@jiph.co',
        about: 'Software Engineer'
    },
    id: 1
}, {
    username: 'kennette',
    information: {
        position: 'CEO, Increment Technologies Inc.',
        first_name: 'Kennette',
        last_name: 'Canales',
        profile: 'https://lh3.googleusercontent.com/a/AAcHTtcb9ye9Utq3d9PI1SSylYY4BlHdW04S0bcqkrx67sIKhzY=s96-c',
        social: {
            facebook: 'https://facebook.com',
            linkedIn: 'https://linkedin.com'
        },
        contact_number: '09123456789',
        email: 'kenn@jiph.co',
        about: 'Software Engineer'
    },
    id: 1
}]

function page(props) {

    const search = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const id = search.get('id')
        if (!id) {
            return
        }
        await api.getNoToken('/api/home?id=' + id, (response) => {
            setData({
                ...response.data,
                vouched_by,
                team: team
            })
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }, (error) => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)

        })
    }

    return (
        <div
            className='w-full float-left mt-[100px]'
        >
            <div
                className='float-left w-full'
            >
                {
                    !loading && data && (
                        <div className={'w-full float-left mt-[20px] ' + Style.padding}>
                            <Banner data={data} />
                            <Pitches data={data} />
                            <Services data={data} />
                            <Team data={data} />
                            <VouchedBy data={data} />
                            <Achievements data={data} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default page;