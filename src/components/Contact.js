import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_izj80kd';
const EMAILJS_TEMPLATE_ID = 'template_5h8kx8a';
const EMAILJS_PUBLIC_KEY = 'HOIbeeXy_EYVLL_T8';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorText('');

    try {
      // 1. Save to database via backend
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Server error');
      }

      // 2. Send email via EmailJS (to owner)
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'Owner',
          },
          EMAILJS_PUBLIC_KEY
        );
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      console.error('Contact form error:', err);
      setErrorText(err.text || err.message || 'Submission failed');
    }
  };

  return (
    <section id="contact" className="bg-light">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            {status === 'success' ? (
              <Alert variant="success">Thank you — your message has been sent.</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                {status === 'error' && <Alert variant="danger">{errorText}</Alert>}
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control value={message} onChange={(e) => setMessage(e.target.value)} as="textarea" rows={5} placeholder="Your Message" required />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><Spinner animation="border" size="sm" role="status" aria-hidden="true" /> Sending...</>
                  ) : 'Send Message'}
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
