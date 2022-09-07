import React from "react";
import "./style.scss";

export interface TitleBoxProps {
  box?: string;
  titleType?: string;
  headline?: string;
  subhead?: string;
}

export const TitleBox: React.FC<TitleBoxProps> = (props) => (
  <div className={props.box || "title-box"}>
    <h3 className={props.titleType || "title-a"}>{props.headline}</h3>
    <p className="subtitle-a">{props.subhead}</p>
    <div className="line-mf"></div>
  </div>
);

export default TitleBox;
