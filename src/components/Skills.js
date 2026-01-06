import React from 'react';
import { Container } from 'react-bootstrap';
import {
  FaWordpress,
  FaReact,
  // FaHtml5,
  // FaCss3Alt,
  // FaJs,
  FaDatabase,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaPhp
} from 'react-icons/fa';
import { SiElementor, SiWoo, SiAdobephotoshop } from 'react-icons/si';
import { TbLayoutGrid } from 'react-icons/tb';

function Skills() {
  const skills = [
    { name: 'WordPress', icon: FaWordpress, level: 90, color: '#21759b' },
    { name: 'WPBakery', icon: TbLayoutGrid, level: 85, color: '#0073AA' },
    { name: 'Elementor', icon: SiElementor, level: 85, color: '#92003B' },
    { name: 'WooCommerce', icon: SiWoo, level: 80, color: '#96588a' },
    { name: 'React', icon: FaReact, level: 75, color: '#61DAFB' },
    // { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E' },
    // { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    // { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'Bootstrap', icon: FaBootstrap, level: 90, color: '#7952B3' },
    { name: 'MySQL', icon: FaDatabase, level: 75, color: '#4479A1' },
    { name: 'PHP', icon: FaPhp, level: 70, color: '#777BB4' },
    { name: 'GitHub', icon: FaGithub, level: 80, color: '#181717' },
    { name: 'Figma', icon: FaFigma, level: 50, color: '#F24E1E' },
    { name: 'Photoshop', icon: SiAdobephotoshop, level: 50, color: '#31A8FF' },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-badge"
              style={{ '--skill-color': skill.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="skill-badge-inner">
                <skill.icon className="skill-badge-icon" />
                <span className="skill-badge-name">{skill.name}</span>
                <div className="skill-badge-level">
                  <svg viewBox="0 0 36 36" className="skill-circle">
                    <path
                      className="skill-circle-bg"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="skill-circle-fill"
                      strokeDasharray={`${skill.level}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="skill-badge-percent">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
