import Project from './project'

export default interface Section {
    id: string
    menu: string
    headline: string
    subhead: string
    projects: Project[]
}
