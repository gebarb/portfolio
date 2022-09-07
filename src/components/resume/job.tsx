import React from "react";
import Badge from "react-bootstrap/Badge";
import { listify } from "./list";

export interface JobProps {
  timeframe: string;
  title: string;
  company: string;
  summary: string[];
}

export const Job: React.FC<JobProps> = (props) => (
  <React.Fragment>
    <Badge variant="dark" className="badge float-right bg-medium">
      {props.timeframe}
    </Badge>
    <h5>
      {props.title} -{" "}
      <span className="font-weight-normal">{props.company}</span>
    </h5>
    <ul className="font-weight-light">{listify(props.summary)}</ul>
  </React.Fragment>
);

export default Job;
