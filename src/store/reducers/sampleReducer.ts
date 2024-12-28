import Portfolio from "../../models/portfolio";

export const initState: Portfolio = {
  meta: {
    title: "Grayson's Portfolio",
    description: "Grayson Ebarb",
    icon: "logo.png",
    showRepoLink: false,
  },
  menu: {
    home: "Welcome",
    experience: "Experience",
    resume: "Resume",
  },
  intro: {
    headline: "Howdy! Nice to meet you.",
    typed: ["I'm Grayson Ebarb", "a Software Engineer", "and IT Professional"],
  },
  resume: {
    headline: "",
    summary: [],
    jobsHeadline: "Professional Experience",
    jobs: [
      {
        title: "Developer III",
        company: "Certrec",
        image: "certrec.png",
        timeframe_begin: "February 2023",
        timeframe_end: (() => {
          const curr_time = new Date();
          return (
            curr_time.toLocaleString("default", { month: "long" }) +
            " " +
            curr_time.getFullYear()
          );
        })(),
      },
      {
        title: "Technical Integrations Specialist",
        company: "Katalys",
        image: "katalys.png",
        timeframe_begin: "February 2021",
        timeframe_end: "February 2023",
        summary: [],
      },
      {
        title: "Test/QA Analyst",
        company: "CGI Inc. * CalSTRS Project",
        image: "cgi.jpg",
        timeframe_begin: "August 2019",
        timeframe_end: "February 2021",
        summary: [],
      },
      {
        title: "Escalation Support Technician",
        company: "Granbury Restaurant Solutions",
        image: "granbury.png",
        timeframe_begin: "September 2016",
        timeframe_end: "May 2019",
        summary: [],
      },
      {
        title: "IT Specialist",
        company: "Youth Digital, Inc.",
        image: "youthdigital.jpg",
        timeframe_begin: "April 2016",
        timeframe_end: "August 2016",
        summary: [],
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
        overallGPA: "",
        programGPA: "",
        summary: [],
      },
      {
        degree: "Salutatorian",
        school: "Early High School",
        image: "early.png",
        timeframe_begin: "August 2011",
        timeframe_end: "May 2015",
        overallGPA: "",
        summary: [],
      },
    ],
    skillsHeadline: "Skills & Certifications",
    skills: [],
    serviceHeadline: "Community Service",
    service: [],
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
          summary: "Mimic of Space Invaders, built in Python with Pygame",
          image: "alien_invasion.png",
          links: [
            {
              label: "src",
              url:
                "https://github.com/gebarb/book-projects/tree/master/python_crash_course/alien_invasion",
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
              url:
                "https://github.com/gebarb/book-projects/tree/master/python_crash_course/learning_log",
            },
            // {
            //     label: "app",
            //     url: "https://log.graysonebarb.com",
            // },
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
            "Mimic of Snake, built with React and TypeScript, and hosted with AWS",
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
          timeframe: "October 11, 2022",
        },
        {
          id: "project8",
          title: "eCommerce Applications",
          summary:
            "Created & Managed Public and Private Apps, for Magento & WooCommerce (PHP), Shopify & BigCommerce (TypeScript), utilizing REST & GraphQL APIs",
          image: "ecom.png",
          timeframe: "February 17, 2023",
        },
        {
          id: "project9",
          title: "LeetCode",
          summary: "Copies of my completed LeetCode Problem submissions",
          image: "leetcode.png",
          links: [
            {
              label: "src",
              url: "https://github.com/gebarb/leetcode",
            },
          ],
          timeframe: "March 24, 2024",
          // timeframe: (() => {
          //     const curr_time = new Date();
          //     return curr_time.toLocaleString('default', { month: 'long' }) + " " + curr_time.getFullYear();
          // })(),
        },
        {
          id: "project10",
          title: "Markets Charts",
          summary:
            "A React Application that charts Real-Time Stock, Forex, & Crypto market data, hosted with AWS",
          image: "stonks.png",
          links: [
            {
              label: "src",
              url: "https://github.com/gebarb/markets-charts",
            },
            {
              label: "app",
              url: "https://markets.graysonebarb.com",
            },
          ],
          timeframe: "October 18, 2022",
        },
        {
          id: "project11",
          title: "Stumblr",
          summary:
            "A React Application to randomly browse the Internet, hosted with AWS",
          image: "stumbling.png",
          links: [
            {
              label: "app",
              url: "https://stumblr.graysonebarb.com",
            },
          ],
          timeframe: "May 5, 2023",
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
          summary: "A UNIX Bash Shell, developed in C",
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
          summary: "A demo of the Macintosh File System, developed in C",
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
            "A JavaScript Web Application to recommend movies to watch based on a supplied search and selection, hosted with AWS",
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
              url: "https://github.com/gebarb/elawaves",
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
};

export const State = (state: Portfolio = initState) => {
  return state;
};

export default State;
