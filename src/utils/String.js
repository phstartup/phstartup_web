"use client"
import Business from '@mui/icons-material/Business';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import CasesOutlined from '@mui/icons-material/CasesOutlined';
import House from '@mui/icons-material/House';
import Person2Outlined from '@mui/icons-material/Person2Outlined';
import PieChart from '@mui/icons-material/PieChart';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
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
        value: "Technology",
        sub: [
            'Software Development',
            'Artificial Intelligence (AI)',
            'Machine Learning',
            'Internet of Things (IoT)',
            'Cybersecurity',
            'E-commerce',
            'Mobile Applications',
            'Cloud Computing'
        ]
    }, {
        value: 'Healthcare',
        sub: [
            'Biotechnology',
            'HealthTech',
            'Telemedicine',
            'Medical Devices',
            'Digital Health',
            'Health and Wellness',
        ]
    }, {
        value: 'Finance and Fintech',
        sub: [
            'Banking and Payments',
            'Cryptocurrency and Blockchain',
            'Personal Finance',
            'Insurtech',
            'Wealth Management',
            'Financial Services',
        ]
    }, {
        value: 'E-commerce and Retail',
        sub: [
            'Online Marketplaces',
            'Direct-to-Consumer (D2C)',
            'Fashion and Apparel',
            'Food and Grocery Delivery',
            'Subscription Services',
            'Retail Technology'
        ]
    }, {
        value: 'Education',
        sub: [
            'EdTech',
            'Online Learning Platforms',
            'Skill Development',
            'Language Learning',
            'Educational Content',
            'E-learning Tools',
        ]
    }, {
        value: 'Sustainability and Clean Energy',
        sub: [
            'Renewable Energy',
            'Energy Efficiency',
            'Waste Management',
            'Sustainable Agriculture',
            'CleanTech',
            'Environmental Services',
        ]
    }, {
        value: 'Media and Entertainment',
        sub: [
            'Streaming Services',
            'Digital Media',
            'Gaming',
            'Content Creation and Distribution',
            'Virtual Reality (VR) and Augmented Reality (AR)',
            'Music and Audio',
        ]
    }, {
        value: 'Travel and Hospitality',
        sub: [
            'Travel Tech',
            'Accommodation and Lodging',
            'Transportation',
            'Tourism Services',
            'Vacation Rentals',
            'Experiential Travel',
        ]
    }, {
        value: 'Food and Beverage',
        sub: [
            'FoodTech',
            'Food Delivery',
            'Restaurant Technology',
            'Specialty Foods',
            'Beverage Production',
            'Agriculture Technology (AgTech)',
        ]
    }, {
        value: 'Manufacturing and Hardware',
        sub: [
            'Robotics',
            '3D Printing',
            'Industrial Automation',
            'Consumer Electronics',
            'Wearable Technology',
            'Hardware Development',
        ]
    }, {
        value: 'Real Estate and Property Technology',
        sub: [
            'PropTech',
            'Real Estate Marketplaces',
            'Property Management',
            'Smart Homes',
            'Construction Technology',
            'Real Estate Investment',
        ]
    }, {
        value: 'Transportation and Mobility',
        sub: [
            'Ride-sharing and Transportation Network Companies',
            'Electric Vehicles',
            'Autonomous Vehicles',
            'Micromobility (e.g., scooters, bikes)',
            'Logistics and Supply Chain',
            'Mobility-as-a-Service (MaaS)',
        ]
    }, {
        value: 'HR and Workplace',
        sub: [
            'HR Tech',
            'Talent Acquisition',
            'Employee Benefits',
            'Workforce Management',
            'Employee Engagement',
            'Workplace Productivity',
        ]
    }, {
        value: 'Social Impact and Non-Profit',
        sub: [
            'Social Enterprises',
            'Non-Profit Organizations',
            'Impact Investing',
            'Sustainable Development',
            'Community Development',
            'Corporate Social Responsibility (CSR)',
        ]
    }, {
        value: 'Art and Culture',
        sub: [
            'ArtTech',
            'Creative Platforms',
            'Cultural Experiences',
            'Art Marketplaces',
            'Museums and Galleries',
            'Performing Arts',
        ]
    }, {
        value: 'Legal and Compliance',
        sub: [
            'Legal Tech',
            'Contract Management',
            'Compliance Solutions',
            'Intellectual Property',
            'Legal Services Innovation',
            'Regulatory Technology (RegTech)',
        ]
    }, {
        value: 'Gaming and Esports',
        sub: [
            'Game Development',
            'Esports Leagues and Tournaments',
            'Gaming Hardware and Accessories',
            'Gaming Content and Streaming',
            'Esports Betting and Fantasy Sports',
        ]
    }, {
        value: 'Agriculture and Food Technology',
        sub: [
            'AgTech',
            'Indoor Farming',
            'Precision Agriculture',
            'Vertical Farming',
            'AgriRobotics',
            'Agricultural Analytics',
        ]
    }, {
        value: 'B2B SaaS (Software as a Service)',
        sub: [
            'Enterprise Software',
            'Business Intelligence (BI)',
            'Customer Relationship Management (CRM)',
            'Project Management',
            'Marketing Automation',
            'Collaboration Tools',
        ]
    }, {
        value: 'Robotics and Automation',
        sub: [
            'Industrial Robotics',
            'Robotic Process Automation (RPA)',
            'Drones and UAVs',
            'Automation Software',
            'AI-Powered Robotics',
            'Warehouse Automation'
        ]
    }, {
        value: 'Investor',
        sub: [
            'Angel Investor',
            'Venture Capitalist',
            'Private Equity Investor',
            'Corporate Investor',
            'Crowdfunding Platform',
            'Family Office',
            'Accelerator',
            'Incubator',
            'Government Fund',
            'Strategic Investor',
            'High Net Worth Individual',
            'Social Impact Investor',
            'Technology Investor',
            'Real Estate Investor',
            'Retail Investor'
        ]
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
        value: 'Angel Investor'
    }, {
        value: 'Venture Capital'
    }, {
        value: 'Private Equity'
    }, {
        value: 'Crowdfunding'
    }, {
        value: 'Government Grants'
    }, {
        value: 'Debt Financing'
    }, {
        value: 'Initial Coin Offering (ICO)'
    }, {
        value: 'Market Validation'
    },{
        value: 'Revenue Sharing'
    }, {
        value: 'Partnerships'
    }, {
        value: 'Corporate Investments'
    }, {
        value: 'Strategic Alliances'
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
    }],
    whatsApp: 'https://chat.whatsapp.com/EzysJ8nag564VmIuSSDNVv'
}

export default String;