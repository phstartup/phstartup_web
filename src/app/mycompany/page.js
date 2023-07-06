import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs/Simple'
import Milestones from '@/components/mycompany/milestones';
import Information from '@/components/mycompany/information';
import Banner from '@/components/mycompany/Banner';
import Services from '@/components/mycompany/Services'
import Pitches from '@/components/mycompany/pitches'
import Team from '@/components/mycompany/team'
function page(props) {
    return (
        <div className='w-full float-left'>
            <div className='w-full float-left mt-[20px]'>
                <Banner />
                <Information />
                <Team />
                <Pitches />
                <Services />
                <Milestones />
            </div>
        </div>
    );
}

export default page;