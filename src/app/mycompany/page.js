"use client"
import React, { Component, useEffect, useState } from 'react';
import Achievements from '@/components/mycompany/Achievements';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
import { useSession } from 'next-auth/react';
import FetchLoading from '@/components/loading/SpinnerWhole'
import Api from '@/lib/api';
let api = new Api()

function MyCompany(props) {
    const {data:session} = useSession()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        if (!session) return
        setLoading(true)
        await api.get('/api/companies?user_id=' + session.user.id, session?.accessToken, (response) => {
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

    return (
        <div className='w-full float-left' >
            {
                !loading && (
                    <div className='w-full float-left mt-[20px]'>
                        {
                            data && (
                                <Banner data={data} getData={() => getData()} />
                            )
                        }

                        <Information data={data} getData={() => getData()} />

                        {
                            data && (
                                <div className='w-full float-left'>
                                    <Team data={data} getData={() => getData()} />
                                    <Pitches data={data} getData={() => getData()} />
                                    <Services data={data} getData={() => getData()} />
                                    <Achievements data={data} getData={() => getData()} />
                                </div>
                            )
                        }

                    </div>
                )
            }
            {
                loading && (
                    <FetchLoading></FetchLoading>
                )
            }
        </div >
    )
}

export default MyCompany;