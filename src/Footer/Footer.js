import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer-container">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="footer-text">
              Talk to us about your next award winning campaign
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn">Get in Touch</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
