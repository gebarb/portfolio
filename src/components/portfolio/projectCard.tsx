import React from 'react'
import Card from 'react-bootstrap/Card'
import Project from '../../models/project'

export const ProjectCard: React.FC<Project> = props => {
    const imagePath: string = props.image ? 'img/' + props.image : ''

    return (
        <Card className="shadow-sm">
            <Card.Img variant="top" src={imagePath} alt={props.title} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                {props.links &&
                    props.links.map((link, i) => (
                        <Card.Link key={i} href={link.url} target="_blank">
                            {link.label}
                        </Card.Link>
                    ))}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
