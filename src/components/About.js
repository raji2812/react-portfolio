import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <section id="about">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image src="https://via.placeholder.com/250" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <p>
              Hello! I'm Raj, a passionate frontend developer with experience in creating responsive,
              modern websites. I enjoy turning design ideas into interactive web applications using React,
              Bootstrap, and JavaScript.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
