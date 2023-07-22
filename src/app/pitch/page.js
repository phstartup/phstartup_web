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
    const [featured, setFeatured] = useState(null)
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        await api.getNoToken('/api/home', (response) => {
            setData(response.data)
            if (response.data) {
                if (response.data.featured) {
                    setFeatured(response.data.featured)
                }
                if (response.data.categories) {
                    setCategories(response.data.categories)
                }
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
        <div className='w-full float-left text-black dark:text-white'>

            <Header />
            {
                featured  && (
                    <Featured data={featured}/>
                )
            }
           
            <div
                className='float-left w-full'
            >
                {
                    categories && categories.length > 0 &&  categories.map((item, index) => (
                        <Collections
                            title={item.title}
                            data={item.data}
                            key={index}
                        />
                    ))
                }
            </div>

            <Footer />
        </div>
    );
}