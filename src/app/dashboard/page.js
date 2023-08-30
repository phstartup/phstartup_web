"use client";
import React, { useEffect, useState } from "react";
import TableChart from "@/components/charts/table";
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import { useSession } from "next-auth/react";
import Api from '@/lib/api';
import CardSkeleton from '@/components/loading/Card'
import SimpleComingSoon from '@/components/soon/Simple';
let api = new Api()
function Page(props) {
  const [fData, setFData] = useState([])
  const [loading, setLoading] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
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

    getData()
  }, [session])

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
      <div className="w-full float-left">
        <div className="w-full float-left">
          <TableChart
            data={fData}
            header={["Province", "Total", "Percentage"]}
            footerTitle="View Report"
            config={{
              value: '10k',
              description: 'Audience Summary',
              percentage: {
                value: '100%',
                up: true
              }
            }}
          />
        </div>
        <div className="w-full float-left lg:flex 2xl:flex justify-between">
          <div className="lg:w-[32%] xl:w-[32%] 2xl:w-[32%] sm:w-full xs:w-full md:w-full float-left">
            <TableChart
              data={fData}
              header={["Province", "Total", "Percentage"]}
              footerTitle="View Report"
              config={{
                value: '$100M',
                description: 'Funding Summary',
                percentage: {
                  value: '100%',
                  up: true
                }
              }}
            />
          </div>
          <div className="lg:w-[32%] xl:w-[32%] 2xl:w-[32%] sm:w-full xs:w-full md:w-full float-left">
            <TableChart
              data={fData}
              header={["Province", "Total", "Percentage"]}
              footerTitle="View Report"
              config={{
                value: 100,
                description: 'Startups',
                percentage: {
                  value: '100%',
                  up: false
                }
              }}
            />
          </div>
          <div className="lg:w-[32%] xl:w-[32%] 2xl:w-[32%] sm:w-full xs:w-full md:w-full float-left">
            <TableChart
              data={fData}
              header={["Province", "Total", "Percentage"]}
              footerTitle="View Report"
              config={{
                value: 100,
                description: 'Investors',
                percentage: {
                  value: '100%',
                  up: true
                }
              }}
            />
          </div>
        </div>


        <div className="w-full float-left lg:flex 2xl:flex justify-between">
          <div className="lg:w-[49%] xl:w-[49%] 2xl:w-[49%] sm:w-full xs:w-full md:w-full float-left">
            <TableChart
              data={fData}
              header={["Province", "Total", "Percentage"]}
              footerTitle="View Report"
              config={{
                value: 100,
                description: 'TBIs',
                percentage: {
                  value: '100%',
                  up: true
                }
              }}
            />

          </div>
          <div className="lg:w-[49%] xl:w-[49%] 2xl:w-[49%] sm:w-full xs:w-full md:w-full float-left">
            <TableChart
              data={fData}
              header={["Province", "Total", "Percentage"]}
              footerTitle="View Report"
              config={{
                value: 100,
                description: 'Accelerators',
                percentage: {
                  value: '100%',
                  up: true
                }
              }}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full float-left">
      {
        session && (
          <div className="w-full float-left mb-[20px]">
            <Breadcrumbs title={'Hi ' + session?.user?.name + ', Good Day!'} />
          </div>
        )
      }
      <div className="w-full float-left mt-[20px]">
        <div className="float-left w-full">
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