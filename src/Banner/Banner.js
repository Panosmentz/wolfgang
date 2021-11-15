import React from "react";
import "./Banner.css";
import Navbar from "../Navbar/Navbar";
import { Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner-container">
      <Container fluid>
        <Row>
          <Navbar />
        </Row>
        <Row xs={12}>
          <h1 className="awards-text">The Awards Wall</h1>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
