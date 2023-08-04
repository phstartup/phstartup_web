"use client"
import React, { useEffect, useState } from 'react';
import Achievements from '@/components/company/Achievements';
import Banner from '@/components/company/Banner';
import Services from '@/components/company/Services'
import Pitches from '@/components/company/pitches'
import VouchedBy from '@/components/company/VouchedBy'
import Team from '@/components/company/team';
import Api from '@/lib/api';
import Empty from '@/components/empty/Simple'
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

function Page(props) {

    const search = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const id = search.get('id')
            if (!id) {
                return
            }
            await api.getNoToken('/api/home?id=' + id, (response) => {
                if (response.data) {
                    setData({
                        ...response.data,
                        vouched_by,
                        team: team
                    })
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
        getData()
    }, [search])


    

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
                {
                    !loading && !data && (
                        <Empty />
                    )
                }
                {
                    loading && (
                        <div className='w-full float-left bg-white dark:bg-black text-black dark:text-white h-[100vh] items-center justify-center content-center flex'>
                            <svg className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Page;