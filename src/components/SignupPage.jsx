import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setShowGreeting(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Nationality: ", nationality);
  };

  let greeting = "";
  switch (nationality) {
    case "en":
      greeting = "Hello";
      break;
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
            {/* controlId is a unique identifier for a form control element. It is used to associate the label with the input element so that when the label is clicked, the corresponding input element receives focus. */} 
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isValid={email !== "" ? email.includes("@") : null}
                isInvalid={email !== "" ? !email.includes("@") : null}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email
              </Form.Control.Feedback>
              <Form.Control.Feedback>
                You typed a valid email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                isValid={password !== "" ? password.length >= 8 : null}
                isInvalid={password !== "" ? password.length < 8 : null}
              />
              <Form.Control.Feedback type="invalid">
                Password is too weak
              </Form.Control.Feedback>
              <Form.Control.Feedback>
                Great password!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicNationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                as="select"
                value={nationality}
                onChange={handleNationalityChange}
              >
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
              </Form.Control>
            </Form.Group>

            {showGreeting && (
              <p id="greeting">
                {greeting} Your email is {email}
              </p>
            )}

            <Button variant="primary" type="submit" disabled={!email.includes("@") || password.length < 8}>
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;