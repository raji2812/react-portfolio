import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skills() {
  return (
    <section id="skills" className="bg-light">
      <Container>
        <h2 className="section-title">My Skills</h2>
        <Row className="text-center">
          <Col md={3} className="mb-4">
            <h5>Frontend</h5>
            <ProgressBar now={95} label="95%" />
          </Col>
          <Col md={3} className="mb-4">
            <h5>React</h5>
            <ProgressBar now={90} label="80%" variant="success" />
          </Col>
          <Col md={3} className="mb-4">
            <h5>Mysql</h5>
            <ProgressBar now={85} label="80%" variant="info" />
          </Col>
          <Col md={3} className="mb-4">
            <h5>Bootstrap</h5>
            <ProgressBar now={95} label="95%" variant="warning" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
