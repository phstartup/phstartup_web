"use client";
import React, { useEffect, useState } from "react";
import TableChart from "@/components/charts/table";
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from "next-auth/react";
import Api from '@/lib/api';
let api = new Api()
function page(props) {
  const [fData, setFData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      await api.get('/api/dashboard', (response) => {
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

    getData()
  }, [])

  const { data: session } = useSession()
  return (
    <div className="w-full float-left">
      <div className="w-full float-left mb-[20px]">
        <Breadcrumbs title={'Hi ' + session?.user?.name + ', Good Day!'} />
      </div>
      {
        !loading && (
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
      {
        loading && (
          <div className="w-full float-left lg:flex 2xl:flex justify-between">
            <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-black w-32 mb-2.5"></div>
              <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              <div className="flex items-baseline mt-4 space-x-6">
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default page;