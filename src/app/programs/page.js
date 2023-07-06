import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Profile from '@/assets/profile.png'
import Sample from '@/assets/sample.png'
import Image from 'next/image';

const programs = [{
    title: 'QBO Arise +',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'DOHE Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'Startup Island Philippines Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'She Loves Tech',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'QBO Arise +',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'DOHE Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}, {
    title: 'Startup Island Philippines Accelerator',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Profile
}, {
    title: 'She Loves Tech',
    link: 'http://localhost',
    description: 'Learn and be mentored from successful startup founders',
    image: Sample
}]
function page(props) {
    return (
        <div className='w-full float-left'>
            <Breadcrumbs title="Accelerator Programs" />

            <div className='w-full float-left mt-[20px]'>
                {
                    programs && programs.map((item, index) => (
                        <div
                            key={index}
                            className='lg:w-[24%] xl:w-[24%] 2xl:w-[24%] md:w-[49%] sm:w-[100%] xs:w-[100%] lg:ml-[1%] 2xl:ml-[1%] xl:ml-[1%] md:ml-[1%] float-left h-[350px] border border-gray-200 dark:border-gray-700 hover:cursor-pointer hover:border hover:border-black mb-[20px]'>

                            <div className='w-full h-[250px] float-left overflow-hidden'>
                                <Image
                                    src={item.image}
                                    height={'100%'}
                                    width={'100%'}
                                    alt={item.title}
                                />
                            </div>

                            <div className='w-full h-[100px] bg-white dark:bg-gray-800 float-left p-[20px] text-justify'>
                                <span className='text-sm font-bold w-full float-left'>
                                    {
                                        item.title
                                    }
                                </span>
                                <span className='text-sm w-full float-left'>
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

export default page;