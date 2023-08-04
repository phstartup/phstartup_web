"use client";
import React, { useEffect, useState } from "react";
import TableChart from "@/components/charts/table";
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from "next-auth/react";
import Api from '@/lib/api';
import CardSkeleton from '@/components/loading/Card'
let api = new Api()
function Page(props) {
  const [fData, setFData] = useState([])
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
    getData()
  })


  const getData = async () => {
    await api.get('/api/dashboard', session?.accessToken, (response) => {
      setFData(response)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, (error) => {
      console.log({
        error
      })
      setTimeout(() => {
        setLoading(false)
      }, 1000)

    })
  }

  const renderLoading = () => {
    return (
      <div className="w-full float-left mb-[50px] flex items-center content-center justify-between">
        <div className="w-[48%] float-left">
          <CardSkeleton />
        </div>

        <div className="w-[48%] float-left">
          <CardSkeleton />
        </div>

      </div>
    )
  }
  const renderData = () => {
    return (
      <div className="w-full float-left lg:flex 2xl:flex justify-between">

        <TableChart
          title="Total Startups"
          data={fData}
          header={["Province", "Total", "Percentage"]}
          rightTitle={100}
          footerTitle="View Report"
        />

        <TableChart
          title="Funding"
          data={fData}
          header={["Province", "Total", "Percentage"]}
          rightTitle={100}
          footerTitle="View Report"
        />
      </div>
    )
  }
  return (
    <div className="w-full float-left">
      <div className="w-full float-left mb-[20px]">
        <Breadcrumbs title={'Hi ' + session?.user?.name + ', Good Day!'} />
      </div>
      <div className="w-full float-left mt-[50px]">
        <div className="float-left w-full">
          <h1 className="text-lg font-bold mb-[20px]">Your Startup Updates</h1>
          {
            !loading && renderData()
          }
          {
            loading && renderLoading()
          }
        </div>

        <div className="float-left w-full">
          <h1 className="text-lg font-bold mb-[20px]">PH Startup Updates</h1>
          {
            !loading && renderData()
          }
          {
            loading && renderLoading()
          }
        </div>

      </div>

    </div>
  );
}

export default Page;