import React from 'react';

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
        }}>
            <div style={{
                width: '20%',
                height: 100,
                float: 'left',
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <b>phstartup.org</b>
            </div>
            <div style={{
                height: 100,
                width: '80%',
                float: 'left',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}>
            {
                menu && menu.map((item) => (
                    <span style={{
                        paddingLeft: 20,
                        paddingRight: 20
                    }}>
                        {
                            item.title
                        }
                    </span>
                ))
            }
            </div>
        </div>
    );
}

export default index;