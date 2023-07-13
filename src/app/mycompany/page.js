import React, { useEffect, useState } from 'react';
import Milestones from '@/components/mycompany/milestones';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
import { useSession } from 'next-auth/react';
function page(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        await api.get('/api/companies', session?.accessToken, (response) => {
            setData(response)
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
            <div className='w-full float-left mt-[20px]'>
                <Banner />
                <Information />
                <Team />
                <Pitches />
                <Services />
                <Milestones />
            </div>
        </div>
    );
}

export default page;