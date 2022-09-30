import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import Project from "../../models/project";
import Section from "../../models/section";
import TitleBox from "../titleBox";

export const ProjectSet: React.FC<Section> = (props) => {
  const images: object[] = [];
  const makePath = (image: string) => {
    return image ? "img/" + image : "";
  };

  return (
    <Container className="section-wrapper">
      <Row id={props.id} className="text-center">
        <TitleBox
          headline={props.headline === "Portfolio" ? props.headline : ""}
          subhead={props.subhead}
        />
      </Row>
      <Row>
        {props.projects.map((project: Project, i: number) => {
          images.push({ source: makePath(project.image) });

          return (
            <Col xl={4} md={6} className="mb-4" key={project.id}>
              <ProjectCard {...project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectSet;
