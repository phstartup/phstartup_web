"use client"
import React, { useEffect, useState } from 'react';
import Collections from '@/components/thumbnail/Pitches'
import Api from '@/lib/api';
let api = new Api()

export default function Page(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [featured, setFeatured] = useState(null)
    const [categories, setCategories] = useState(null)

    useEffect(() => {
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
        getData()
    }, [])




    return (
        <div className='w-full float-left text-black dark:text-white'>
            <div
                className='float-left w-full'
            >
                {
                    categories && categories.length > 0 && categories.map((item, index) => (
                        <Collections
                            title={item.title}
                            data={item.data}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}