import Skill from './skill'
import Job from './job'
import Edu from './edu'
import Service from './service'

export default interface ListProps {
    headline: string;
    list: (Job | Skill | Edu | Service)[];
    tag: string;
  }