"use client";
import React, { useEffect, useState } from "react";
import Api from '@/lib/api';
let api = new Api()
import Thumbnail from '@/components/thumbnail/smallVideoThumbnail'
import Empty from '@/components/empty/Simple'
import Style from "@/utils/Style";
import { useSession } from "next-auth/react";
import FetchLoading from '@/components/loading/SpinnerWhole'

function Companies(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const {data: session} = useSession()
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    if(!props.type) return
    setLoading(true)
    await api.getNoToken('/api/home?category=' + props.type, (response) => {
      if(response.data && response.data.length > 0){
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
    <div className={"w-full float-left " +(session ? '': 'mt-[100px] ' +  Style.padding)}>
      {
        !loading && data && data.length > 0 && data.map((item, index) => (
          <Thumbnail data={item} key={index}/>
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

export default Companies;
