import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from "../../store/myTypes";
import { Container, Row, Col } from "react-bootstrap";
import Socials from "./socials";
import Portfolio from "../../models/portfolio";
import "./style.scss";

export const Footer: React.FC<Portfolio> = (props) => {
  const footer = props.footer;

  return (
    <Container
      className="paralax-mf footer-paralax bg-image section-wrapper"
      fluid={true}
    >
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <Socials list={[...footer.social]} />
              <div className="copyright-box">
                <p className="copyright">{footer.footerMessage}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return state.portfolio;
};

export default compose(connect(mapStateToProps))(Footer);
