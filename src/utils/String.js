"use client"
import { CalendarMonth, CasesOutlined, Dashboard, House, Person, Person2Outlined, PieChart, Rocket } from '@mui/icons-material';
export default {
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
            icon: PieChart,
            route: 'dashboard'
        },
        {
            title: 'My Company',
            icon: House,
            route: 'mycompany'
        },
        {
            title: 'Programs',
            icon: Rocket,
            route: 'programs'
        },
        {
            title: 'Startup Events',
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
    ],
    categories: [{
        value: "Startup"
    }, {
        value: 'Investor'
    }, {
        value: 'Accelerator'
    }, {
        value: 'Incubator'
    }, {
        value: 'Government'
    }, {
        value: 'Events'
    }, {
        value: 'Others'
    }],
    industries: [{
        value: "Finance"
    }, {
        value: 'Hotel'
    }, {
        value: 'Restaurant'
    }],
    pitches: [{
        value: '60 Seconds'
    }, {
        value: '120 Seconds'
    }, {
        value: '300 Seconds'
    }],
    stages: [{
        value: 'Ideation'
    }, {
        value: 'MVP'
    }, {
        value: 'Market Validation'
    }, {
        value: 'Expansion'
    }, {
        value: 'Growing'
    }, {
        value: 'Pre-seed'
    }, {
        value: 'Seed'
    }, {
        value: 'Series A'
    }, {
        value: 'Series B'
    }, {
        value: 'Series C'
    }, {
        value: 'Series D'
    }, {
        value: 'Series E'
    }, {
        value: 'Series F'
    }, {
        value: 'IPO'
    },{
        value: 'Exit'
    }]
}