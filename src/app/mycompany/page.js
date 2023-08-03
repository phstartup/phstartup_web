"use client"
import React, { useEffect, useState } from 'react';
import Achievements from '@/components/mycompany/Achievements';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';
let api = new Api()


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
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        if (!session) return
        setLoading(true)
        await api.get('/api/companies?user_id=' + session.user.id, session?.accessToken, (response) => {
            setData({
                ...response.data,
                team
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
        <div className='w-full float-left'>
            {
                !loading && (
                    <div className='w-full float-left mt-[20px]'>
                        <Banner data={data} getData={() => getData()} />
                        <Information data={data} getData={() => getData()} />
                        <Team data={data} getData={() => getData()} />
                        <Pitches data={data} getData={() => getData()} />
                        <Services data={data} getData={() => getData()} />
                        <Achievements data={data} getData={() => getData()} />
                    </div>
                )
            }
        </div>
    );
}

export default page;