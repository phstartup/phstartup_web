"use client"
import { CalendarMonth, CasesOutlined, Dashboard, House, Person, Person2Outlined } from '@mui/icons-material';
export default{
    app_name: 'phstartup.org',
    api_url: 'test',
    host: 'phstartup.org',
    menu: [{
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
    }],

    loggedInMenu: [
    {
        title: 'Dashboard',
        icon: Dashboard,
        route: 'dashboard'
    },
    {
        title: 'My Company',
        icon: House,
        route: 'my_business'
    },
    {
        title: 'Events',
        icon: CalendarMonth,
        route: 'events'
    },
    {
        title: 'Find a match',
        icon: Person2Outlined,
        route: 'match'
    },
    {
        title: 'Jobs',
        icon: CasesOutlined,
        route: 'jobs'
    }
]
}