import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from "../../store/myTypes";
import { Container } from "react-bootstrap";
import Section from "./section";
import SectionModel from "../../models/section";
import ProjectModel from "../../models/project";
import "./style.scss";

export const Portfolio: React.FC<{ sections: SectionModel[] }> = (props) => (
  <Container>
    {props.sections.map((section: SectionModel, i: number) => (
      <Section {...section} key={i} />
    ))}
  </Container>
);

const mapStateToProps = (state: RootState) => {
  const sections: SectionModel[] = state.portfolio.sections;
  for (let i = 0; i < sections.length; i++) {
    sections[i].projects.sort((a: ProjectModel, b: ProjectModel) => {
      const a_time = new Date(a.timeframe).getTime();
      const b_time = new Date(b.timeframe).getTime();
      if (a_time < b_time) return 1;
      else if (a_time > b_time) return -1;
      else return 0;
    });
  }
  return {
    sections: sections,
  };
};

export default compose(connect(mapStateToProps))(Portfolio);
