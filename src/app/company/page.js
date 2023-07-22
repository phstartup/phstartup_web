"use client"
import React, { useEffect, useState } from 'react';
import Achievements from '@/components/company/Achievements';
import Information from '@/components/company/information';
import Banner from '@/components/company/Banner';
import Services from '@/components/company/Services'
import Pitches from '@/components/company/pitches'
import Footer from '@/components/footer'
import Api from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import Style from '@/utils/Style';
let api = new Api()


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
        <div
            className='w-full float-left'
        >
            <div
                className='float-left w-full'
            >
                {
                    !loading && data && (
                        <div className={'w-full float-left mt-[20px] ' + Style.padding}>
                            <Banner data={data} />
                            <Information data={data} />
                            <Pitches data={data} />
                            <Services data={data} />
                            <Achievements data={data} />
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default page;