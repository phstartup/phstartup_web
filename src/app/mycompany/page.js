"use client"
import React, { useEffect, useState } from 'react';
import Milestones from '@/components/mycompany/milestones';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
import { useSession } from 'next-auth/react';
import Api from '@/lib/api';
let api = new Api()
function page(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        if(!session) return
        setLoading(true)
        await api.get('/api/companies?user_id=' + session.user.id, session?.accessToken, (response) => {
            setData(response.data)
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
                        <Banner data={data} getData={() => getData()}/>
                        <Information data={data} getData={() => getData()}/>
                        <Team />
                        <Pitches data={data} getData={() => getData()}/>
                        <Services />
                        <Milestones />
                    </div>
                )
            }
        </div>
    );
}

export default page;