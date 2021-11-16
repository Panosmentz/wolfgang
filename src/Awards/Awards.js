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

//award entries
//let awards2021 = awards.filter((awards) => awards.year === "2021");
//console.log(awards2021);
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
//console.log(awards[0].year);
//let awardsArray = Object.entries(awards);
//console.log(awardsArray[5][1].year);

function Awards() {
  return (
    <div className="awards-container">
      <Container>
        <Row>
          <Col sm={4} className="">
            <div className="filter-controls">
              <label>FILTER</label>
              <button>CLEAR FILTERS</button>
            </div>
            <div className="">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>By Awards Ceremony</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        {ceremonies.map((data) => (
                          <Col xs={3} className="mb-5">
                            {data}
                          </Col>
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
                          <Col xs={3} className="mb-5">
                            {data}
                          </Col>
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
                          <Col xs={3} className="mb-5">
                            {data}
                          </Col>
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
                          <Col xs={3} className="mb-5">
                            {data}
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm={8} className="">
            <div className="filter-awards">
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
                          <Col>{data.ceremony}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2021.map((data) => (
                          <Col>Winner - {data.award}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2021.map((data) => (
                          <Col>{data.logo}</Col>
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
                          <Col>{data.ceremony}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2020.map((data) => (
                          <Col>Winner - {data.award}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2020.map((data) => (
                          <Col>{data.logo}</Col>
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
                          <Col>{data.ceremony}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2019.map((data) => (
                          <Col>Winner - {data.award}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2019.map((data) => (
                          <Col>{data.logo}</Col>
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
                          <Col>{data.ceremony}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2018.map((data) => (
                          <Col>Winner - {data.award}</Col>
                        ))}
                      </Row>
                      <Row>
                        {awards2018.map((data) => (
                          <Col>{data.logo}</Col>
                        ))}
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Awards;
