import Skill from './skill'
import Job from './job'
import Edu from './edu'
import Service from './service'

export default interface resumeProps {
    skillsHeadline: string;
    skills: Skill[];
    jobsHeadline: string;
    jobs: Job[];
    eduHeadline: string;
    edu: Edu[];
    serviceHeadline: string;
    service: Service[];
}