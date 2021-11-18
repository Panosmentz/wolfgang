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
        <Col sm={4}>
          <div className="filter-controls">
            <label>FILTER</label>
            <button>CLEAR FILTERS</button>
          </div>

          <Accordion>
            <Accordion.Item eventKey="0" className="award-category">
              <Accordion.Header>By Awards Ceremony</Accordion.Header>
              <Accordion.Body>
                <div className="filterbox">
                  {ceremonies.map((data) => (
                    <>
                      <label for={ceremonies.data}>
                        <input type="checkbox" id={ceremonies.data} />
                        {data}
                      </label>
                    </>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="award-category">
              <Accordion.Header>By Year</Accordion.Header>
              <Accordion.Body>
                <div className="filterbox">
                  {years.map((data) => (
                    <>
                      <label for={years.data}>
                        <input type="checkbox" id={years.data} />
                        {data}
                      </label>
                    </>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="award-category">
              <Accordion.Header>By Channel</Accordion.Header>
              <Accordion.Body>
                <div className="filterbox">
                  {uniqueChannels.map((data) => (
                    <>
                      <label for={uniqueChannels.data}>
                        <input type="checkbox" id={uniqueChannels.data} />
                        {data}
                      </label>
                    </>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="award-category">
              <Accordion.Header>By Industry</Accordion.Header>
              <Accordion.Body>
                <div className="filterbox">
                  {industries.map((data) => (
                    <>
                      <label for={industries.data}>
                        <input type="checkbox" id={industries.data} />
                        {data}
                      </label>
                    </>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={8} className="">
          <p className="viewing-container">
            Viewing <span id="award-count">7 </span>
            of 15 awards
          </p>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="award-item-right">
              <Accordion.Header>
                <div className="award-header-right">
                  2021
                  <span className="italics">
                    Click on the award to read more about the winning entry
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    {awards2021.map((data) => (
                      <>
                        <Col md={12}> {data.ceremony}</Col>
                        <Col md={8}>Winner - {data.award}</Col>

                        <Col md={4}>
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
            <Accordion.Item eventKey="1" className="award-item-right">
              <Accordion.Header>
                <div className="award-header-right">
                  2020
                  <span className="italics">
                    Click on the award to read more about the winning entry
                  </span>
                </div>
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
            <Accordion.Item eventKey="2" className="award-item-right">
              <Accordion.Header>
                <div className="award-header-right">
                  2019
                  <span className="italics">
                    Click on the award to read more about the winning entry
                  </span>
                </div>
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
            <Accordion.Item eventKey="3" className="award-item-right">
              <Accordion.Header>
                <div className="award-header-right">
                  2018
                  <span className="italics">
                    Click on the award to read more about the winning entry
                  </span>
                </div>
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
