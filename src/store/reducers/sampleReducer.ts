import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: "Grayson's Portfolio",
        description: "Grayson Ebarb",
        icon: "logo.jpg",
        showRepoLink: false,
    },
    menu: {
        home: "Welcome",
        experience: "Experience",
        resume: "Resume",
    },
    intro: {
        headline: "Howdy! Nice to meet you.",
        typed: [
            "I'm Grayson Ebarb",
            "a Software Engineer",
            "Mathematician",
            "and Data Guru",
        ],
    },
    resume: {
        headline: "A Prime Pick of an Engineer",
        summary: [
            "This is due to a plethora of reasons ranging from diverse topical expertise to varied industrial familiarity.",
            "Having always been a strong mathematician, it is my natural inclination to search for and understand the logic and patterns that drive everything from a website, to a business, to people themselves.",
            "This has led me to become both a very strong developer as well as data engineer, constantly trying to utilize the base properties of mathematics, with many well-known theoretical ideas, to find viable solution(s) to any given scenario or problem.",
            "Additionally, I have developed a widely-varied skill set with my experience working on farms, in restaurants, grocers, tech contracting, and software companies that constantly see one area seeping into the other, while simultaneously giving me a deeper insight into how various industries, and the people within them, may cross or cooperate.",
            "It is one notion to be able to write a line of code or encapsulate some sort of data; and a wholly different concept to truly understand why the consumer or user needs it, how it will be used, and why it is the effective route.",
        ],
        jobsHeadline: "Professional Experience",
        jobs: [
            {
                title: "Integrations Engineer",
                company: "Katalys",
                image: "katalys.png",
                timeframe_begin: "February 2021",
                timeframe_end: (() => {
                    const curr_time = new Date();
                    return curr_time.toLocaleString('default', { month: 'long' }) + " " + curr_time.getFullYear();
                })(),
                summary: [
                    "Within 1 year, doubled number of Onboarded Advertisers and reduce Onboarding Time from 3 months to 1 week"
                    , "Developed and Maintained public-facing Knowledge Base for Users & Developers"
                    , "Implemented various data collection techniques and endpoints to several eCommerce API Integrations"
                    , "Developed Sales Forecasting Algorithm using Fourier Analysis"
                    , "Worked closely with Advertiser Managers to ensure Advertiser Technology Integrations proceed smoothly and efficiently"
                    , "Interfaced directly with Advertisers as a Subject Matter Expert on the RevOffers Technology Products"
                    , "Supported Advertiser onboarding by validating data collection, writing and publishing documentation, debugging implementations, and solving integration problems as they arise",
                ]
            },
            {
                title: "Lead Integrations Analyst",
                company: "CGI Inc. * CalSTRS Project",
                image: "cgi.jpg",
                timeframe_begin: "August 2019",
                timeframe_end: "February 2021",
                summary: [
                    "Planned, wrote, and executed formal test cases for a $1.2 Billion monthly Pension and Payroll Solution for CalSTRS",
                    "Performed as Test Lead and coordinated efforts for technical file-based Interfaces",
                    "Data Mining & Generation",
                    "Supervised and executed formal test cases for integration of the product with numerous outside private, state, and federal organizations",
                ]
            },
            {
                title: "Database Admin/QA Analyst",
                company: "Granbury Restaurant Solutions",
                image: "granbury.png",
                timeframe_begin: "September 2016",
                timeframe_end: "May 2019",
                summary: [
                    "Linux / Network Administration",
                    "Database Administration",
                    "QA / Testing / Code Review",
                    "Accounting / Reporting Analytics",
                ]
            },
            {
                title: "IT Specialist",
                company: "Youth Digital, Inc.",
                image: "youthdigital.jpg",
                timeframe_begin: "April 2016",
                timeframe_end: "August 2016",
                summary: [
                    "Coordinated summer camps teaching children ages 6-14 basic programming/design practices",
                    "Android App Design",
                    "3D Game/Game Mod Design",
                ]
            },
            {
                title: "Assistant Manager, Produce Department",
                company: "United Supermarkets",
                timeframe_begin: "April 2015",
                timeframe_end: "April 2016",
                image: "united.png",
                summary: [
                    "Management & Scheduling of Staff/Sales Floor",
                    "Inventory Management",
                    "Assist customers while maintaining United Supermarkets’ Mission and Values",
                ]
            },
        ],
        eduHeadline: "Education",
        edu: [
            {
                degree: "Bachelor of Science in Computer Science & Mathematics",
                school: "The University of Texas - Arlington",
                image: "uta.png",
                timeframe_begin: "August 2015",
                timeframe_end: "December 2019",
                overallGPA: "Overall GPA: 3.266",
                programGPA: "Program GPA: 3.542 ",
                summary: [
                    "Android Development",
                    "Blockchain Development",
                    "Compiler Design",
                    "Project Management",
                    "Software Testing & Maintenance",
                ]
            },
            {
                degree: "Salutatorian",
                school: "Early High School",
                image: "early.png",
                timeframe_begin: "August 2011",
                timeframe_end: "May 2015",
                overallGPA: "Overall GPA: 4.0",
                summary: [""]
            }
        ],
        skillsHeadline: "Skills & Certifications",
        skills: [
            {
                name: "Programming Languages",
                list: "C, Java, Python, MySQL, PHP, JavaScript, TypeScript",
            },
            {
                name: "Technology Stacks",
                list: "AWS Lambda/CloudWatch/DynamoDB, Bitbucket CI/CD, Google Analytics, Kibana/ElasticSearch, Excel & Sheets",
            },
            {
                name: "CRMs",
                list: "SalesForce, HubSpot, Shopify, BigCommerce",
            },
            {
                name: "Awards",
                list:
                    "Red Hat Delivery Specialist – Business Process Automation, Red Hat Delivery Specialist – Platform-as-a-Service (PaaS) Development, TCU College of Science & Engineering – Dean’s Recognition of Professional Development, Early High School Salutatorian",
            },
        ],
        serviceHeadline: "Community Service",
        service: [
            {
                name: "Mission Trips",
                timeframe: "14 Years",
            },
            {
                name: "Meals on Wheels",
                timeframe: "4 Years",
            },
            {
                name: "Mission Arlington",
                timeframe: "2 Years",
            }
        ],
    },
    sections: [
        {
            id: "portfolio",
            menu: "Portfolio",
            headline: "Portfolio",
            subhead: "Open-Source & Proprietary Projects",
            projects: [
                {
                    id: "project1",
                    title: "This Portfolio",
                    summary:
                        "Built with React and TypeScript, and hosted with AWS Amplify",
                    image: "portfolio.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/portfolio",
                        },
                    ],
                    timeframe: "September 2022",
                },
                {
                    id: "project2",
                    title: "Book Projects",
                    summary:
                        "Full list of various example projects from books in my personal library",
                    image: "book.jpg",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/book-projects",
                        },
                    ],
                    timeframe: "August 2022",
                },
                {
                    id: "project3",
                    title: "Alien Invasion",
                    summary:
                        "Mimic of Space Invaders, built in Python with Pygame",
                    image: "alien_invasion.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/book-projects/tree/master/python_crash_course/alien_invasion",
                        },
                    ],
                    timeframe: "August 2022",
                },
                {
                    id: "project4",
                    title: "Learning Log",
                    summary:
                        "An organized online journal, built in Python with Django & Bootstrap, and hosted with AWS Elastic Beanstalk",
                    image: "learning_log.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/book-projects/tree/master/python_crash_course/learning_log",
                        },
                        {
                            label: "app",
                            url: "https://log.graysonebarb.com",
                        },
                    ],
                    timeframe: "September 2022",
                },
                {
                    id: "project5",
                    title: "Point-of-Sale",
                    summary:
                        "Designed & Developed a Point-of-Sale System in Object-Oriented Java for a Trade-In Comics/Games/Electronics store",
                    image: "pos.jpg",
                    timeframe: "2019",
                },
                {
                    id: "project6",
                    title: "Sales Forecasting with Fourier Analysis",
                    summary:
                        "Derived an Algorithm for eCommerce Sales Forecasting utilizing Fourier Analysis of Time-Series Data",
                    image: "sales_forecast.png",
                    timeframe: "2021",
                },
                {
                    id: "project7",
                    title: "Snake",
                    summary:
                        "Mimic of Snake, built with React and TypeScript, and hosted with AWS Amplify",
                    image: "snake.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/snake",
                        },
                        {
                            label: "app",
                            url: "https://snake.graysonebarb.com",
                        },
                    ],
                    timeframe: "October 2022",
                },
                {
                    id: "project8",
                    title: "eCommerce Applications",
                    summary:
                        "Created & Managed Public and Private Apps, for Magento & WooCommerce (PHP), Shopify & BigCommerce (TypeScript), utilizing REST & GraphQL APIs",
                    image: "ecom.png",
                    timeframe: (() => {
                        const curr_time = new Date();
                        return curr_time.toLocaleString('default', { month: 'long' }) + " " + curr_time.getFullYear();
                    })(),
                },
                {
                    id: "project9",
                    title: "LeetCode",
                    summary:
                        "Copies of my completed LeetCode Problem submissions",
                    image: "leetcode.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/leetcode",
                        },
                    ],
                    timeframe: "October 2022",
                },
            ],
        },
        {
            id: "college",
            menu: "College Projects",
            headline: "College Projects",
            subhead: "College Projects",
            projects: [
                {
                    id: "college1",
                    title: "Bash Shell",
                    summary:
                        "A UNIX Bash Shell, developed in C",
                    image: "bash.png",
                    timeframe: "2016",
                },
                {
                    id: "college2",
                    title: "Assembly Compiler",
                    summary:
                        "A compiler for `A Simple Language`, built in Python with Lex & Yacc",
                    image: "ply.png",
                    timeframe: "2018",
                },
                {
                    id: "college3",
                    title: "Macintosh File System",
                    summary:
                        "A demo of the Macintosh File System, developed in C",
                    image: "mac.jpg",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/mfs_demo",
                        },
                    ],
                    timeframe: "2016",
                },
                {
                    id: "college4",
                    title: "Nim Android Game",
                    summary:
                        "An Android Application of the Nim Game to show implementation of Game Theory",
                    image: "nim.png",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/nim",
                        },
                    ],
                    timeframe: "2017",
                },
                {
                    id: "college5",
                    title: "Movie Decider",
                    summary:
                        "A JavaScript Web Application to recommend movies to watch based on a supplied search and selection, hosted with AWS Amplify",
                    image: "movie_reel.jpg",
                    links: [
                        {
                            label: "src",
                            url: "https://github.com/gebarb/movie-decider",
                        },
                        {
                            label: "app",
                            url: "https://movie.graysonebarb.com",
                        },
                    ],
                    timeframe: "2018",
                },
                {
                    id: "college6",
                    title: "ELAWaves",
                    summary:
                        "An Android P2P Encrypted Messaging Application built on the Elastos Blockchain & SDK",
                    image: "elastos.png",
                    links: [
                        {
                            label: "src",
                            url:
                                "https://github.com/gebarb/elawaves",
                        },
                    ],
                    timeframe: "May 2019",
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: "linkedin",
                link: "https://www.linkedin.com/in/grayson-ebarb/",
            },
            {
                service: "github",
                link: "https://github.com/gebarb",
            },
        ],
        footerMessage: "Thanks for stopping by!",
        background: "",
    },
}

export const State = (state: Portfolio = initState) => {
    return state
}

export default State;