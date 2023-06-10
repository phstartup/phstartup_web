import React from 'react';
import String from '@/util/String'
import Color from '@/util/Color'

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
            }}>
                <h3><b>{String.app_name}</b></h3>
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
                            <span style={{
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                                className='href-link'>
                                {
                                    item.title
                                }
                            </span>
                        ))
                    }
                </span>
                <span>
                    {
                        ['Login', 'Register'].map((item) => (
                            <span style={{
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                                className='href-link'>
                                {
                                    item
                                }
                            </span>
                        ))
                    }
                </span>
            </div>
        </div>
    );
}

export default index;