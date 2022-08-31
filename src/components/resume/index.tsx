import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container, Row, Col } from 'react-bootstrap'
import List from './list'
import Intro from './intro'
import Skill from '../../models/skill'
import Job from '../../models/job'
import Edu from '../../models/edu'
import Service from '../../models/service'

export interface ResumeProps {
    skillsHeadline: string
    skills: Skill[]
    jobsHeadline: string
    jobs: Job[]
    eduHeadline: string
    edu: Edu[]
    serviceHeadline: string
    service: Service[]
}

export const Resume: React.FC<ResumeProps> = props => (
    <Container className="section-wrapper">
        <Row id="about">
            <Col className="shadow-sm p-5 bg-light">
                <Row>

                    <Col md={6} style={{ padding: '25px' }}
                    >
                        <Intro {...props} />
                        <List
                            headline={props.skillsHeadline}
                            list={props.skills}
                            tag="skill"
                        />
                        <List
                            headline={props.serviceHeadline}
                            list={props.service}
                            tag="service"
                        />
                    </Col>
                    <Col md={6}>
                        <List
                            headline={props.jobsHeadline}
                            list={props.jobs}
                            tag="job"
                        />
                        <List
                            headline={props.eduHeadline}
                            list={props.edu}
                            tag="edu"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

const mapStateToProps = (state: RootState) => {
    return state.portfolio.resume
}

export default compose(connect(mapStateToProps))(Resume)
