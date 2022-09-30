import React from "react";
import Card from "react-bootstrap/Card";
import Experience from "../../models/experience";

// TODO: make these scroll horizontally
export const ExperienceCard: React.FC<Experience> = (props) => {
  const imagePath: string = props.image ? "img/" + props.image : "";
  let header;
  let sub;
  if (props.title) {
    header = props.title;
    sub = props.company;
  } else if (props.degree) {
    header = props.degree;
    sub = props.school;
  }

  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={imagePath} alt={header} />
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Subtitle>{sub}</Card.Subtitle>
        <Card.Text>
          {props.timeframe_begin + " - " + props.timeframe_end}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
