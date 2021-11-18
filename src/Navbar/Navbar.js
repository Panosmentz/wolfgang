import React from "react";
import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logoSvg from "../assets/images/wolfgang_logo.svg";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="https://www.wolfgangdigital.com/">
          <img
            alt="wolfgang-logo"
            src={logoSvg}
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="nav-items">
            <Nav>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/our-work/"
              >
                OUR WORK
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/about-us/"
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/about-us/careers-with-wolfgang-digital/"
              >
                CAREERS
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/blog/"
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/awards/"
              >
                AWARDS
              </Nav.Link>
              <Nav.Link
                className="nav-links"
                href="https://www.wolfgangdigital.com/contact/"
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
