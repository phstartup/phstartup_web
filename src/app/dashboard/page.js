import React from 'react';
import Header from '@/components/header/loggedin'
import Sidebar from '@/components/sidebar/sidebar'
import LineChart from '@/components/charts/line'
import TableChart from '@/components/charts/table'
const data = [{
    title: 'Manila',
    value: 500,
    percentage: '60%',
    color: 'bg-blue-600'
}, {
    title: 'Cebu',
    value: 40,
    percentage: '40%',
    color: 'bg-red-600'
}]
function page(props) {
    return (
        <div className='float-left w-full min-h-full bg-white dark:bg-black text-black dark:text-white'>
            <Header />
            <div className='w-full min-h-[100vh] bg-gray-100 float-left relative'>
                <div className='lg:block 2xl:block sm:hidden xs:hidden md:hidden w-[15%] min-h-[100vh] fixed float-left'>
                    <Sidebar />
                </div>
                <div
                    className='lg:w-[85%] min-h-[100vh] 2xl:w-[85%] sm:w-full xs:w-full md:w-full float-left p-[20px] mt-[80px] lg:ml-[15%] 2xl:ml-[15%]'>
                    <div className='w-full float-left lg:flex 2xl:flex justify-between'>
                        <LineChart />
                        <TableChart title="Startup 2023" data={data} header={['Location', 'Total', 'Percentage']} rightTitle={100} footerTitle="View Report"/>
                    </div>
                    <div className='w-full float-left lg:flex 2xl:flex justify-between'>
                        <TableChart title="Investors 2023" data={data} header={['Location', 'Total', 'Percentage']} rightTitle={100} footerTitle="View Report"/>
                        <TableChart title="Initiatives 2023" data={data} header={['Location', 'Total', 'Percentage']} rightTitle={100} footerTitle="View Report"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default page;