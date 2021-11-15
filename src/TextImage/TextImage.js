import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CelebrateImage from "../assets/images/content_image.jpg";

function TextImage() {
  return (
    <div className="textimage-container">
      <Container>
        <Row>
          <Col sm={8} className="text-container">
            <p>
              Back in 2011, when Wolfgang was only two people we submitted some
              case studies to the Digital Media Awards, optimistically entering
              the "Best Agency" category. At that time nobody knew who we were
              and our clients were not of the "catwalk" variety. So we certainly
              didn't expect to win, we optimistically hoped to get one of those
              cool "finalist" badges for our email signatures. Lo and behold,
              the judges loved our case studies, scored them strongly and we
              took the Gold Medal* home.
            </p>
            <p>
              This success imbued us with a wolfish hunger to execute
              outstanding campaigns and win further domestic & international
              awards.
            </p>
          </Col>
          <Col sm={4} className="img-container">
            <Image src={CelebrateImage} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextImage;
