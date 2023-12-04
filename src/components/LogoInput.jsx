import { useState } from "react";
import "../styles/LogoInput.css";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Navbar,
  Row,
} from "react-bootstrap";

function LogoInput() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="LogoInput-content">
      <Navbar className="bg-body-tertiary justify-content-around">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <div className="img-content">
                <img
                  src="https://www.freeiconspng.com/thumbs/logo-design/3d-link-logo-brand-design-png-image-12.png"
                  width="80"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Form inline></Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <>
                <Button variant="primary" onClick={handleShow}>
                  Login
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                        <Form.Label>Use Phone Number</Form.Label>
                        <Form.Control
                          type="phone"
                          placeholder="Phone Number"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      ></Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Continue
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </div>
  );
}

export default LogoInput;
