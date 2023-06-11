import React from 'react';
import String from '@/utils/String'
import Color from '@/utils/Color'
import Link from 'next/link';

const menu = [{
    title: 'Startups',
    route: '/startups'
}, {
    title: 'Investors',
    route: '/investors'
}, {
    title: 'Accelerators',
    route: '/accelerators'
}, {
    title: 'Incubators',
    route: '/incubators'
}, {
    title: 'Government Programs',
    route: '/programs'
}, {
    title: 'Events',
    route: '/events'
}]
function index(props) {
    return (
        <div style={{
            height: 100,
            float: 'left',
            width: '100%',
            background: Color.background
        }}
            className='header'
        >
            <div style={{
                width: '20%',
                height: 100,
                float: 'left',
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
            className='href-link'
            >
                <Link href={'/'}>
                <h3><b>{String.app_name}</b></h3>
                </Link>
            </div>
            <div style={{
                height: 100,
                width: '70%',
                float: 'left',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: 100
            }}>
                <span>
                    {
                        menu && menu.map((item) => (
                            <Link style={{
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                                href={'/' + item.title}
                                className='href-link cursor-pointer'>
                                {
                                    item.title
                                }
                            </Link>
                        ))
                    }
                </span>
                <span>
                    {
                        ['Login', 'Register'].map((item) => (
                            <Link style={{
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                                href={'/' + item}
                                className='href-link cursor-pointer'>
                                {
                                    item
                                }
                            </Link>
                        ))
                    }
                </span>
            </div>
        </div>
    );
}

export default index;