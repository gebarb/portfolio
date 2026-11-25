import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Col, Container, Row, Card } from "react-bootstrap";
import { RootState } from "../../store/myTypes";
import ContactModel, { Offer } from "../../models/contact";
import TitleBox from "../titleBox";
import "./style.scss";

export const Contact: React.FC<ContactModel> = (props) => {
  const mailto = (offer: Offer) =>
    "mailto:" + offer.email + "?subject=" + encodeURIComponent(offer.subject);

  return (
    <Container className="section-wrapper" id="contact">
      <Row className="text-center">
        <TitleBox headline={props.headline} subhead={props.subhead} />
      </Row>
      <Row>
        {props.offers.map((offer: Offer) => (
          <Col md={4} className="mb-4" key={offer.id}>
            <Card className="contact-card shadow-sm h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.detail}</Card.Text>
                <a className="btn btn-primary mt-auto" href={mailto(offer)}>
                  {offer.action}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return state.portfolio.contact;
};

export default compose(connect(mapStateToProps))(Contact);
