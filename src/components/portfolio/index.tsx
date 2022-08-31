import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container } from 'react-bootstrap'
import Section from './section'
import SectionModel from '../../models/section'
import './style.scss'

export const Portfolio: React.FC<{ sections: SectionModel[] }> = props => (
    <Container>
        {props.sections.map((section: SectionModel, i: number) => (
            <Section {...section} key={i} />
        ))}
    </Container>
)

const mapStateToProps = (state: RootState) => {
    return {
        sections: state.portfolio.sections,
    }
}

export default compose(connect(mapStateToProps))(Portfolio)
