import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaWordpress, FaExternalLinkAlt, FaCode, FaDatabase, FaMicrochip, FaPaintBrush } from 'react-icons/fa';
import { TbLayoutGrid } from 'react-icons/tb';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Andhra Athletic Association',
      category: 'WordPress Development',
      description: 'A professional website built for Andhra Athletic Association featuring custom design, dynamic content management, and database integration for managing athletic events and members.',
      skills: ['WordPress', 'WPBakery', 'Custom Code', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop',
      link: 'https://khokhofederation.in/',
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Project',
      category: 'UI/UX Design',
      description: 'A comprehensive UI/UX design project showcasing modern design principles, user-centered approach, and creative visual solutions.',
      skills: ['Figma', 'Photoshop', 'UI Design', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      link: 'https://www.figma.com/files/team/1560859690379010727/recents-and-sharing?fuid=1242140711024079183', // Replace with actual link
      featured: false
    },
    {
      id: 3,
      title: 'IoT Academic Project',
      category: 'Academic Project',
      description: 'An innovative IoT-based academic project demonstrating practical application of Internet of Things concepts and embedded systems.',
      skills: ['IoT', 'Embedded Systems', 'Programming', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      link: 'https://ieeexplore.ieee.org/document/10560650', // Replace with actual link
      featured: false
    }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'WordPress Development':
        return <FaWordpress />;
      case 'UI/UX Design':
        return <FaPaintBrush />;
      case 'Academic Project':
        return <FaMicrochip />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map(project => (
          <div key={project.id} className="featured-project">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="featured-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-image"
                  />
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="featured-content">
                  <div className="project-category">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <h3 className="featured-title">{project.title}</h3>
                  <p className="featured-description">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        ))}

        {/* Other Projects */}
        <Row className="other-projects">
          {projects.filter(p => !p.featured).map(project => (
            <Col md={6} key={project.id} className="mb-4">
              <Card className="project-card">
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <Card.Body className="project-card-body">
                  <div className="project-category small">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <Card.Title className="project-card-title">{project.title}</Card.Title>
                  <Card.Text className="project-card-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-skills small">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
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
