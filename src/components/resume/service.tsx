import React from 'react'
import Badge from 'react-bootstrap/Badge'

export interface ServiceProps {
    timeframe: string
    name: string
}

export const Service: React.FC<ServiceProps> = props => (
    <React.Fragment>
        <Badge variant="dark" className="badge float-right bg-medium">
            {props.timeframe}
        </Badge>
        <li>
            <span className="font-weight-normal">{props.name}</span>
        </li>
    </React.Fragment>
    
)

export default Service
