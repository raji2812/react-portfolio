import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { FaReact, FaWordpress, FaDatabase, FaCode, FaArrowDown } from 'react-icons/fa';

function Header() {
  return (
    <header id="home" className="hero-section">
      {/* Animated particles */}
      <div className="particles" aria-hidden="true">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
        <span className="particle p6"></span>
      </div>

      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={7} className="text-center text-lg-start hero-content">
            <p className="hero-greeting">Welcome to my portfolio</p>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Raja shree</span>
            </h1>
            <h2 className="hero-subtitle">Wordpress & Frontend Developer</h2>
            <p className="hero-description">
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Passionate about turning complex problems
              into simple, beautiful solutions.
            </p>

            <div className="hero-skills">
              <div className="skill-item">
                <FaWordpress className="skill-icon" />
                <span>WordPress</span>
              </div>
              <div className="skill-item">
                <FaReact className="skill-icon" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <FaCode className="skill-icon" />
                <span>JavaScript</span>
              </div>
            </div>

            <div className="hero-buttons">
              <Button href="#contact" className="btn-hire">Hire Me</Button>
              <Button href="https://drive.google.com/file/d/1Mfy2vyKWMChM2oslKtMOGA7X5F18VFOM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-resume">Resume</Button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Year Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects Maintaining</span>
              </div>
            </div>
          </Col>

          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <Image
                src="/Raji.jpeg"
                roundedCircle
                fluid
                className="hero-image"
                alt="Raji - Developer"
              />
              <div className="floating-card card-1">
                <FaWordpress className="floating-icon" />
              </div>
              <div className="floating-card card-2">
                <FaReact className="floating-icon" />
              </div>
              <div className="floating-card card-3">
                <FaCode className="floating-icon" />
              </div>
            </div>
          </Col>
        </Row>

        <a href="#about" className="scroll-down">
          <FaArrowDown />
        </a>
      </Container>
    </header>
  );
}

export default Header;
