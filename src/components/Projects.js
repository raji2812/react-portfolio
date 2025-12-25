import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row>
          {[1,2,3].map((project) => (
            <Col md={4} className="mb-4" key={project}>
              <Card className="project-card">
                <Card.Img src={`https://via.placeholder.com/400x200`} />
                <Card.Body>
                  <Card.Title>Project {project}</Card.Title>
                  <Card.Text>
                    This is a sample project description for Project {project}.
                  </Card.Text>
                  <Button variant="primary" size="sm">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
