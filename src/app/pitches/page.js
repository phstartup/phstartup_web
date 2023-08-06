"use client";
import React, { useEffect, useState } from "react";
import Api from '@/lib/api';
let api = new Api()
import Thumbnail from '@/components/thumbnail/Pitch'
import Empty from '@/components/empty/Simple'
import Select from '@/components/form/Select';
import String from "@/utils/String";
import { useSession } from "next-auth/react";
import FetchLoading from '@/components/loading/SpinnerWhole'

function Page(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(String.pitches[0].value)
    const {data: session} = useSession()
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        await api.getNoToken('/api/pitches?type=' + filter,(response) => {
            if (response.data && response.data.length > 0) {
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
        <div className={"w-full float-left"}>

            <div className="w-full float-left mb-[20px]">
                <div className="w-[20%]">
                    <Select
                        type="text"
                        data={String.pitches}
                        selected={filter}
                        placeholder="Select Ask"
                        onChange={(value) => {
                            setFilter(value)
                            setTimeout(() => {
                                getData()
                            }, 10)
                        }}
                    />
                </div>
            </div>
            {
                !loading && data && data.length > 0 && data.map((item, index) => (
                    <Thumbnail data={item} key={index} />
                ))
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
    );
}

export default Page;
