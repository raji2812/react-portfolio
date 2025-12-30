import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaHeart, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <Row className="about-content">
          <Col lg={6} className="about-text">
            <h3 className="about-heading">Who I Am</h3>
            <p>
              Hello! I'm <strong>Raja Shree</strong>, a passionate WordPress & Frontend Developer
              based in India. I specialize in building beautiful, functional websites that help
              businesses establish their online presence.
            </p>
            <p>
              With over 1 year of experience in web development, I've worked on various projects
              ranging from corporate websites to e-commerce platforms. I love transforming ideas
              into reality through clean code and thoughtful design.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or learning new skills to stay updated with the latest trends
              in web development.
            </p>

            {/* <div className="about-buttons">
              <a href="https://drive.google.com/file/d/1Mfy2vyKWMChM2oslKtMOGA7X5F18VFOM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-download">
                <FaDownload /> Download CV
              </a>
            </div> */}
          </Col>

          <Col lg={6}>
            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">
                  <FaGraduationCap />
                </div>
                <div className="about-card-content">
                  <h4>Education</h4>
                  <p>B.E. in Computer Science</p>
                  <span>2020 - 2024</span>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <FaBriefcase />
                </div>
                <div className="about-card-content">
                  <h4>Experience</h4>
                  <p>WordPress & Frontend Developer</p>
                  <span>1+ Year Professional Experience</span>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="about-card-content">
                  <h4>Preferred Locations</h4>
                  <p>Bangalore, Coimbatore, Chennai</p>
                  <span>On-site / Hybrid / Remote</span>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <FaHeart />
                </div>
                <div className="about-card-content">
                  <h4>Interests</h4>
                  <p>Web Development, UI/UX Design</p>
                  <span>Always Learning New Things</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
