import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from "../../store/myTypes";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./experienceCard";
import ExperienceModel from "../../models/experience";
import "./style.scss";
import TitleBox from "../titleBox";

export const Experience: React.FC<{ experience: ExperienceModel[] }> = (
  props
) => {
  const images: object[] = [];
  const makePath = (image: string) => {
    return image ? "img/" + image : "";
  };
  return (
    <Container className="section-wrapper">
      <Row id="experience" className="text-center">
        <TitleBox
          headline={"Experience"}
          subhead={"Previous Roles & Education"}
        />
      </Row>
      <Row>
        {props.experience.map((exp: ExperienceModel, i: number) => {
          if (exp.image) images.push({ source: makePath(exp.image) });

          return (
            <Col xl={4} md={6} className="mb-4" key={i}>
              <ExperienceCard {...exp} key={i} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  // TODO: Sort these
  const jobs = state.portfolio.resume.jobs;
  const edu = state.portfolio.resume.edu;

  return {
    experience: [...jobs, ...edu],
  };
};

export default compose(connect(mapStateToProps))(Experience);
