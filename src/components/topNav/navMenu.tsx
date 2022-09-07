import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Portfolio from "../../models/portfolio";
import { smoothScroll } from "../../utilities";

export const navMenu: React.FC<Portfolio> = (props) => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" defaultActiveKey="#home">
        <Nav.Link href="#home" onClick={(e: any) => smoothScroll(e, "home")}>
          {props.menu.home}
        </Nav.Link>
        <Nav.Link href="#about" onClick={(e: any) => smoothScroll(e, "about")}>
          {props.menu.about}
        </Nav.Link>
        {props.sections.map((section) => (
          <Nav.Link
            key={section.id}
            href={"#" + section.id}
            onClick={(e: any) => smoothScroll(e, section.id)}
          >
            {section.menu}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  );
};

export default navMenu;
