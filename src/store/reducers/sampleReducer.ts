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
        about: "Resume",
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
                title: "Technical Integrations Specialist",
                company: "RevOffers",
                timeframe: "February 2021 - Present",
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
                title: "Software Tester/QA Analyst",
                company: "CGI Inc.",
                timeframe: "August 2019 - February 2021",
                summary: [
                    "Planned, wrote, and executed formal test cases for a $1.2 Billion monthly Pension and Payroll Solution for the California State Government",
                    "Performed as Test Lead and coordinated efforts for technical file-based Interfaces",
                    "Data Mining & Generation",
                    "Supervised and executed formal test cases for integration of the product with numerous outside private, state, and federal organizations",
                ]
            },
            {
                title: "Point-of-Sale Escalation Technician",
                company: "Granbury Restaurant Solutions",
                timeframe: "September 2016 - May 2019",
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
                timeframe: "April 2016 - August 2016",
                summary: [
                    "Coordinated summer camps teaching children ages 6-14 basic programming/design practices",
                    "Android App Design",
                    "3D Game/Game Mod Design",
                ]
            },
            {
                title: "Assistant Manager, Produce Department",
                company: "United Supermarkets",
                timeframe: "April 2015 - April 2016",
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
                college: "The University of Texas - Arlington",
                timeframe: "Fall 2016 - Fall 2019",
                overallGPA: "Overall GPA: 3.266",
                programGPA: "Program GPA: 3.542 ",
                summary: [
                    "Android Development",
                    "Blockchain Development",
                    "Compiler Design",
                    "Project Management",
                    "Software Testing & Maintenance",
                ]
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
            id: "college",
            menu: "College Projects",
            headline: "College Projects",
            subhead: "Some programs from college",
            projects: [
                {
                    id: "college1",
                    title: "Bash Shell",
                    summary:
                        "A UNIX Bash Shell, developed in C",
                    image: "bash.png",
                },
                {
                    id: "college2",
                    title: "ASL Compiler",
                    summary:
                        "A compiler for an example language, built in Python with Lex & Yacc",
                    image: "ply.png",
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
                },
                {
                    id: "college5",
                    title: "Movie Decider",
                    summary:
                        "A JavaScript Web Application to recommend movies to watch based on a supplied search and selection",
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
                },
                {
                    id: "college6",
                    title: "ELAWaves",
                    summary:
                        "An Android P2P Encrypted Messaging Application built on the Elastos SDK",
                    image: "elastos.png",
                    links: [
                        {
                            label: "src",
                            url:
                                "https://github.com/gebarb/elawaves",
                        },
                    ],
                },
            ],
        },
        {
            id: "portfolio",
            menu: "Portfolio",
            headline: "Portfolio",
            subhead: "My Open-Source Projects",
            projects: [
                {
                    id: "project1",
                    title: "This Portfolio",
                    summary:
                        "Built with React and TypeScript, and hosted on AWS",
                    image: "portfolio.png",
                    links: [
                        {
                            label: "src",
                            url:
                                "https://github.com/gebarb/portfolio",
                        },
                    ],
                },
                {
                    id: "project2",
                    title: "Cannabis Reports API",
                    summary:
                        "Helper Classes for communicating with cannabisreports.com, written in Python",
                    image: "cannabis_reports.png",
                    links: [
                        {
                            label: "src",
                            url:
                                "https://github.com/gebarb/apis/tree/master/cannabis_reports",
                        },
                    ],
                },
                {
                    id: "project3",
                    title: "Alien Invasion",
                    summary:
                        "Mimic of Space Invaders, built in Python with Pygame",
                    image: "alien.bmp",
                    links: [
                        {
                            label: "src",
                            url:
                                "https://github.com/gebarb/python_crash_course/tree/master/alien_invasion",
                        },
                    ],
                },
            ],
        },
        {
            id: "contracts",
            menu: "Contracting",
            headline: "Contracting",
            subhead: "Proprietary Work",
            projects: [
                {
                    id: "contract1",
                    title: "Point-of-Sale",
                    summary:
                        "Designed & Developed a Point-of-Sale System in Object-Oriented Java for a Trade-In Comics/Games/Electronics store",
                    image: "pos.jpg",
                },
                {
                    id: "contract2",
                    title: "Sales Forecasting with Fourier Analysis",
                    summary:
                        "Derived an Algorithm for eCommerce Sales Forecasting utilizing Fourier Analysis of Time-Series Data",
                    image: "sales_forecast.png",
                },
                {
                    id: "contract3",
                    title: "eCommerce Applications",
                    summary:
                        "Created & Managed Public and Private Apps, for Magento & WooCommerce (PHP), Shopify & BigCommerce (TypeScript), utilizing REST APIs",
                        
                    image: "ecom.png",
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

export default (state: Portfolio = initState) => {
    return state
}