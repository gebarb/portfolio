import React from "react";
// TODO : fix to use these icons
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "./../../models/social";

export const Socials: React.FC<{ list: Social[] }> = (props) => {
  const icons: { [key: string]: any } = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    email: <FaEnvelopeOpenText />,
  };

  return (
    <ul className="socials">
      {props.list.map((social: Social) => (
        <li key={social.service}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {" "}
            <span className="ico-circle">{icons[social.service]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
