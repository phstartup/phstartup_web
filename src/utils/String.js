"use client"
import { Business, CalendarMonth, CasesOutlined, Dashboard, House, Person, Person2Outlined, PieChart, Rocket, VideoCameraBack } from '@mui/icons-material';
const String =  {
    app_name: 'phstartup.org',
    api_url: 'test',
    host: 'phstartup.org',
    menu: [{
        title: 'Startups',
        route: '/startups',
        value: 'startup'
    }, {
        title: 'Investors',
        route: '/investors',
        value: 'investor'
    }, {
        title: 'Accelerators',
        route: '/accelerators',
        value: 'accelerator'
    }, {
        title: 'Incubators',
        route: '/incubators',
        value: 'incubator'
    }, {
        title: 'Government Programs',
        route: '/governments',
        value: 'government'
    }, {
        title: 'Events',
        route: '/events',
        value: 'event'
    }],

    loggedInMenu: [
        {
            title: 'Dashboard',
            icon: PieChart,
            route: 'dashboard'
        },
        {
            title: 'Pitches',
            icon: VideoCameraBack,
            route: 'pitches'
        },
        {
            title: 'Companies',
            icon: Business,
            route: 'companies'
        },
        {
            title: 'My Company',
            icon: House,
            route: 'mycompany'
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
    }],
    ask: [{
        value: 'Funding'
    }, {
        value: 'Partnership'
    }, {
        value: 'Network'
    }],
    accountTypes: [{
        value: 'Student'
    }, {
        value: 'Founder'
    }, {
        value: 'Professional'
    }, {
        value: 'Investor'
    }, {
        value: 'Government Employee'
    }, {
        value: 'Teacher'
    }],
    currencies: [{
        value: 'PHP'
    }, {
        value: 'USD'
    }]
}

export default String;