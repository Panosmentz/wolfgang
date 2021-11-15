import React from "react";
import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logoSvg from "../assets/images/wolfgang_logo.svg";

function Navigationbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={logoSvg} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">OUR WORK</Nav.Link>
              <Nav.Link href="#">ABOUT US</Nav.Link>
              <Nav.Link href="#">CAREERS</Nav.Link>
              <Nav.Link href="#">BLOG</Nav.Link>
              <Nav.Link href="#">AWARDS</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
