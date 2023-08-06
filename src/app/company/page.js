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
import FetchLoading from '@/components/loading/SpinnerWhole'
import { useRouter, useSearchParams } from 'next/navigation';
import Style from '@/utils/Style';
import { useSession } from 'next-auth/react';
let api = new Api()

function Page(props) {
    const search = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const { data: session } = useSession()

    useEffect(() => {
        const getData = async () => {
            const id = search.get('id')
            if (!id) {
                return
            }

            if (session) {
                await api.get('/api/home?id=' + id, session?.accessToken, (response) => {
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
            } else {
                await api.getNoToken('/api/home?id=' + id, (response) => {
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
        }
        getData()
    }, [search])

    return (
        <div
            className={'w-full float-left ' + (session ? '' : 'mt-[100px]')}
        >
            <div
                className='float-left w-full'
            >
                {
                    !loading && data && (
                        <div className={'w-full float-left mt-[20px] ' + (session ? '' : Style.padding)}>
                            <Banner data={data} />
                            <div className={'w-full float-left'}>
                                <Pitches data={data} />
                                <Services data={data} />
                                <Team data={data} />
                                <VouchedBy data={data} />
                                <Achievements data={data} />
                            </div>

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
                        <FetchLoading></FetchLoading>
                    )
                }
            </div>
        </div>
    );
}

export default Page;