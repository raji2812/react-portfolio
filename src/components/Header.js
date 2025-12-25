import React from 'react';
import { Container, Button, Row, Col, Image, Badge } from 'react-bootstrap';

function Header() {
  return (
    <header
      style={{
        background: 'linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%)',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* animated background blobs */}
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="blob b4" />
      </div>
      <style>{`
        .bg-blobs { position:absolute; inset:0; pointer-events:none; z-index:0;
          /* responsive sizes (min, preferred vw, max) */
          --b1: clamp(180px, 26vw, 480px);
          --b2: clamp(140px, 20vw, 360px);
          --b3: clamp(110px, 16vw, 300px);
          --b4: clamp(80px, 12vw, 220px);
        }
        .blob { position:absolute; border-radius:50%; mix-blend-mode:screen; filter: blur(36px); opacity:0.75; }
        .b1 { width:var(--b1); height:var(--b1); background:rgba(255,255,255,0.12); top:-8%; left:-6%; animation: move1 14s ease-in-out infinite; }
        .b2 { width:var(--b2); height:var(--b2); background:rgba(255,255,255,0.08); top:18%; right:-4%; animation: move2 18s ease-in-out infinite; }
        .b3 { width:var(--b3); height:var(--b3); background:rgba(255,255,255,0.06); bottom:8%; left:12%; animation: move3 16s ease-in-out infinite; }
        .b4 { width:var(--b4); height:var(--b4); background:rgba(255,255,255,0.09); bottom:-6%; right:18%; animation: move4 12s ease-in-out infinite; }

        @keyframes move1 { 0%{transform:translate(0,0) scale(1)}50%{transform:translate(44px,32px) scale(1.05)}100%{transform:translate(0,0) scale(1)} }
        @keyframes move2 { 0%{transform:translate(0,0) scale(1)}50%{transform:translate(-34px,44px) scale(1.06)}100%{transform:translate(0,0) scale(1)} }
        @keyframes move3 { 0%{transform:translate(0,0) scale(1)}50%{transform:translate(22px,-28px) scale(1.04)}100%{transform:translate(0,0) scale(1)} }
        @keyframes move4 { 0%{transform:translate(0,0) scale(1)}50%{transform:translate(-18px,-18px) scale(1.03)}100%{transform:translate(0,0) scale(1)} }

        /* keep content above blobs and add gentle float to image */
        .container, .container * { position: relative; z-index: 1; }
        .profile-float { animation: floatY 6s ease-in-out infinite; }
        @keyframes floatY { 0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)} }

        /* small screens: reduce intensity and blur for performance */
        @media (max-width:540px) {
          .bg-blobs { --b1: 220px; --b2: 160px; --b3: 120px; --b4: 80px; }
          .blob { filter: blur(22px); opacity:0.65; }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          <Col md={7} className="text-center text-md-start">
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem' }}>Hello, I'm Raj</h1>
            <p className="lead" style={{ fontSize: '1.15rem', opacity: 0.95 }}>Frontend Developer · React · Bootstrap · HTML/CSS/JS</p>

            <div style={{ margin: '1rem 0' }}>
              <Badge bg="light" text="dark" className="me-2">React</Badge>
              <Badge bg="light" text="dark" className="me-2">Bootstrap</Badge>
              <Badge bg="light" text="dark" className="me-2">JavaScript</Badge>
              <Badge bg="light" text="dark" className="me-2">CSS</Badge>
            </div>

            <div>
              <Button href="#contact" variant="light" className="me-2">Hire Me</Button>
              <Button href="#projects" variant="outline-light">View Projects</Button>
            </div>
          </Col>

          <Col md={5} className="text-center mt-4 mt-md-0">
  <div className="profile-wrapper">
    <Image
      src="https://i.pravatar.cc/300?img=12"
      roundedCircle
      fluid
      className="profile-float"
    />
  </div>
</Col>

        </Row>
      </Container>
    </header>
  );
}

export default Header;
