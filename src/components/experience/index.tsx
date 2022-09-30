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
          // TODO: Add Experience Images
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
  const jobs = state.portfolio.resume.jobs;
  const edu = state.portfolio.resume.edu;
  const experiences = [...jobs, ...edu];
  experiences.sort((a: ExperienceModel, b: ExperienceModel) => {
    const a_time = new Date(a.timeframe_end).getTime();
    const b_time = new Date(b.timeframe_end).getTime();
    if (a_time < b_time) return 1;
    else if (a_time > b_time) return -1;
    else return 0;
  });

  return {
    experience: experiences,
  };
};

export default compose(connect(mapStateToProps))(Experience);
