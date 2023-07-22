"use client"
import React, { useEffect, useState } from 'react';
import Featured from '@/components/featured'
import Collections from '@/components/thumbnail/collectionSmall'
import String from '@/utils/String'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Api from '@/lib/api';
let api = new Api()

export default function Page(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        await api.getNoToken('/api/home', (response) => {
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
        <div className='w-full float-left text-black dark:text-white'>

            <Header />
            <Featured />
            <div
                className='float-left w-full'
            >
                {
                    data && (
                        <Collections
                            title="Most visited startups"
                            data={data}
                        />
                    )
                }


            </div>

            <Footer />
        </div>
    );
}