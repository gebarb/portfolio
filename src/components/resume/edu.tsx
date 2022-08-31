import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { listify } from './list'

export interface EduProps {
    timeframe: string
    degree: string
    college: string
    programGPA: string
    overallGPA: string
    summary: string[]
}

export const Edu: React.FC<EduProps> = props => (
    <React.Fragment>
        <Badge variant="dark" className="badge float-right bg-medium">
            {props.timeframe}
        </Badge>
        <h5>
            {props.degree} -{' '}
            <span className="font-weight-normal">{props.college}</span>
        </h5>
        <ul className="font-weight-light">
            <li>{props.overallGPA}</li>
            <li>{props.programGPA}</li>
            {listify(props.summary)}
        </ul>
    </React.Fragment>
)

export default Edu
