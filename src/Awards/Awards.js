import React from "react";
import "./Awards.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import awards from "../assets/awards.json";
import "./Awards.css";
import _ from "lodash";

//filters
let ceremonies = _.uniqBy(_.map(awards, "ceremony"));
let years = _.uniqBy(_.map(awards, "year"));
let channels = _.uniqBy(_.map(awards, "channels"));
let uniqueChannels = _.uniqWith(channels, _.isEqual);
//console.log(uniqueChannels);
let industries = _.uniqBy(_.map(awards, "industry"));

let awards2021 = [];
let awards2020 = [];
let awards2019 = [];
let awards2018 = [];
for (let i = 0; i < awards.length; i++) {
  if (awards[i].year === "2021") {
    awards2021.push(awards[i]);
  }
  if (awards[i].year === "2020") {
    awards2020.push(awards[i]);
  }
  if (awards[i].year === "2019") {
    awards2019.push(awards[i]);
  }
  if (awards[i].year === "2018") {
    awards2018.push(awards[i]);
  }
}

function Awards() {
  return (
    <Container className="awards-container">
      <Row>
        <Col sm={4} className="">
          <label>FILTER</label>
          <button>CLEAR FILTERS</button>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>By Awards Ceremony</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {ceremonies.map((data) => (
                      <Row xs={3} className="mb-5">
                        {data}
                      </Row>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>By Year</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {years.map((data) => (
                      <Row xs={3} className="mb-5">
                        {data}
                      </Row>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>By Channel</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {uniqueChannels.map((data) => (
                      <Row xs={3} className="mb-5">
                        {data}
                      </Row>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>By Industry</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {industries.map((data) => (
                      <Row xs={3} className="mb-5">
                        {data}
                      </Row>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={8} className="">
          <label>Viewing of....awards</label>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                2021 Click on the award to read more about the winning entry
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {awards2021.map((data) => (
                      <>
                        {data.ceremony}
                        Winner - {data.award}
                        <Col>
                          <img
                            src={`/assets/images/${data.logo}`}
                            alt="award-logo"
                          />
                        </Col>
                      </>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2020 Click on the award to read more about the winning entry
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {awards2020.map((data) => (
                      <>
                        {data.ceremony}
                        Winner - {data.award}
                        <Col>
                          <img
                            src={`/assets/images/${data.logo}`}
                            alt="award-logo"
                          />
                        </Col>
                      </>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                2019 Click on the award to read more about the winning entry
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {awards2019.map((data) => (
                      <>
                        {data.ceremony}
                        Winner - {data.award}
                        <Col>
                          <img
                            src={`/assets/images/${data.logo}`}
                            alt="award-logo"
                          />
                        </Col>
                      </>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                2018 Click on the award to read more about the winning entry
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {awards2018.map((data) => (
                      <>
                        {data.ceremony}
                        Winner - {data.award}
                        <Col>
                          <img
                            src={`/assets/images/${data.logo}`}
                            alt="award-logo"
                          />
                        </Col>
                      </>
                    ))}
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
