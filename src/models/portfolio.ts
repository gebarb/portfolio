import Job from './job'
import Skill from './skill'
import Section from './section'
import Social from './social'
import Edu from './edu'
import Service from './service'

export default interface Portfolio {
    meta: {
        title: string
        description: string
        icon: string
        showRepoLink: boolean
    }
    menu: {
        home: string
        experience: string
        resume: string
    }
    intro: {
        headline: string
        typed: string[]
    }
    resume: {
        headline: string
        summary: string[]
        jobsHeadline: string
        jobs: Job[]
        skillsHeadline: string
        skills: Skill[]
        eduHeadline: string
        edu: Edu[]
        serviceHeadline: string
        service: Service[]
    }
    sections: Section[]
    footer: {
        social: Social[]
        footerMessage: string
        background: string
    }
}
