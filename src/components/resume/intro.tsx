import React from "react";

export interface IntroProps {
  headline?: string;
  summary?: [];
}

export const Intro: React.FC<IntroProps> = (props) => (
  <div className="pb-2 mb-5 pt-md-0">
    <p className="lead font-weight-normal">{props.headline}</p>
    {props.summary &&
      props.summary.map((content: string, i: number) => {
        return (
          <p className="lead" key={i}>
            {content}
          </p>
        );
      })}
  </div>
);

export default Intro;
