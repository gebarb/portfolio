import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from "../store/myTypes";
import MetaTags from "react-meta-tags";

export interface DocumentProps {
  icon?: string;
  title: string;
  description: string;
}

export const Document: React.FC<DocumentProps> = (props) => {
  const iconPath = props.icon
    ? "/img/" + props.icon
    : "https://reactjs.org/favicon.ico";

  return (
    <React.Fragment>
      <MetaTags>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <link rel="shortcut icon" href={iconPath} />
      </MetaTags>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState) => {
  return state.portfolio.meta;
};

export default compose(connect(mapStateToProps))(Document);
