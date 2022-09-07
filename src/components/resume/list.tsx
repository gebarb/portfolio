import React from "react";
import TitleBox from "../titleBox";
import Job from "./job";
import Skill from "./skill";
import Edu from "./edu";
import Service from "./service";
import JobModel from "../../models/job";
import SkillModel from "../../models/skill";
import EduModel from "../../models/edu";
import ServiceModel from "../../models/service";

export interface ListProps {
  headline: string;
  list: (JobModel | SkillModel | EduModel | ServiceModel)[];
  tag: string;
}

export const List: React.FC<ListProps> = (props) => {
  const components: any = {
    job: Job,
    skill: Skill,
    edu: Edu,
    service: Service,
  };
  const TagName: any = components[props.tag || "job"];

  return (
    <React.Fragment>
      <TitleBox
        headline={props.headline}
        box="title-box-2"
        titleType="title-left"
      />
      {props.list.map(
        (item: SkillModel | JobModel | EduModel | ServiceModel, i: number) => (
          <TagName {...item} key={i} />
        )
      )}
    </React.Fragment>
  );
};

export default List;

export function listify(summary: string[]) {
  return summary.map((bullet, i) => {
    return <li key={i}> {bullet}</li>;
  });
}
