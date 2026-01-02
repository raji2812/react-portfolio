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
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Raja Shree',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      console.error('Contact form error:', err);
      setErrorText(err.text || err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
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
