import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTumblr,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Social from './../../models/social'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export const Socials: React.FC<{ list: Social[] }> = props => {
    const icons: { [key: string]: any } = {
        email: faEnvelopeSquare,
        github: faGithub,
        tumblr: faTumblr,
        linkedin: faLinkedin,
    }

    return (
        <ul className="socials">
            {props.list.map((social: Social) => (
                <li key={social.service}>
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        <span className="ico-circle">
                            <FontAwesomeIcon icon={icons[social.service]} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
