import React from "react";
import "./Awards.css";
import { Container, Row, Col } from "react-bootstrap";

function Awards() {
  return (
    <div className="awards-container">
      <Container>
        <Row>
          <Col sm={4} className="">
            filter 1
          </Col>
          <Col sm={8} className="">
            filter 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Awards;
