import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from "../../store/myTypes";
import { Container, Row, Col } from "react-bootstrap";
import List from "./list";
import Intro from "./intro";
import ResumeProps from "../../models/resumeProps"

export const Resume: React.FC<ResumeProps> = (props) => (
  <Container className="section-wrapper">
    <Row id="resume">
      <Col className="shadow-sm p-5 bg-light">
        <Row>
          <Col md={6} style={{ padding: "25px" }}>
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
            <List headline={props.eduHeadline} list={props.edu} tag="edu" />
          </Col>
          <Col md={6}>
            <List headline={props.jobsHeadline} list={props.jobs} tag="job" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = (state: RootState) => {
  return state.portfolio.resume;
};

export default compose(connect(mapStateToProps))(Resume);
