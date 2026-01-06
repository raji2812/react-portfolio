import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-main">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Raji</h5>
            <p className="footer-tagline">Developer | Designer</p>
            <p className="footer-description">
              Passionate about building web applications and solving complex problems with clean, efficient code.
            </p>
          </Col>

          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="footer-section">
            <h5 className="footer-title">Get In Touch</h5>
            <div className="footer-social">
              <a href="mailto:rajidevi2812@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/raji2812" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/raja-shree-govindharaju/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Raji. All rights reserved.</p>
            <p className="footer-credit">Designed & Built with React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
