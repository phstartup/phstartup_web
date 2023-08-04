"use client"
import React, { useEffect, useState } from 'react';
import Style from '@/utils/Style';
import Api from '@/lib/api';

let api = new Api()

function Achievements(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (props.data) {
            setData(props.data)
        }
    }, [props])

    return (
        <div className={Style.cardContainerHome}>
            <div className='flex w-full items-center content-center justify-between'>
                <span className='text-lg font-bold'>Achievements</span>
            </div>

            <div className='w-full float-left text-sm mt-[20px]'>
                {
                    data && data.achievements && data.achievements.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                if(item.link){
                                    window.open(item.link, '_blank')
                                }
                            }}
                            className={'float-left h-[300px] rounded-lg border border-gray-100 dark:border-gray-700 cursor-pointer mb-[20px] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] sm:w-[100%] xs:w-[100%] md:w-[49%] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] md:mr-[1%] xs:mr-[0%] sm:mr-[0%]'}
                        >
                            <div className='w-full float-left h-[200px]'
                            >
                                <img
                                    src={item.featured}
                                    className='h-[200px] w-full rounded-t-lg'
                                    alt={item.featured}
                                />
                            </div>
                            <div className='w-full float-left p-[10px] h-[100px] border-t border-gray-100 dark:border-gray-800'>
                                <span className='w-full float-left text-sm font-bold'>{item.title}</span>
                                <span className='w-full float-left text-xs mt-[10px] text-ellipsis overflow-hidden h-[50px]'>
                                    {
                                        item.description
                                    }
                                </span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Achievements;