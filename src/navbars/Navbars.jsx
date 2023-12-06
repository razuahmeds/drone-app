import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Navbar,
  Row,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const body = { email, password };
    console.log(body);
    setShow(false);
  };

  return (
    <div
      style={{
        background: "#F9F9E0",
        clear: "#FAF6F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
      }}
    >
      <Navbar className=" justify-content-around">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <div className="img-content">
                  <img
                    style={{ marginRight: "70px" }}
                    src="https://w7.pngwing.com/pngs/454/664/png-transparent-drone-logo.png"
                    width="80"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </div>
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
          </Row>
        </Form>
      </Navbar>

      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Mobile" id="basic-nav-dropdown">
                <Link to={`/mobile`}>
                  <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Realma</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Samsung
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tecno</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Oppo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">TCL</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Lava</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nokia</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Vivo</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Tablet" id="basic-nav-dropdown">
                <Link to={`/tablet`}>
                  <NavDropdown.Item href="#action/3.1">Ipad</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Samsung
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Xiaomi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Walton</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Computer" id="basic-nav-dropdown">
                <Link to={`/computer`}>
                  <NavDropdown.Item href="#action/3.1">
                    Desktop
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Laptop</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Monitor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Component
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">UPS</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Accessories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Pen Drive
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mouse</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Moue pen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Keyboard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Headphone
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Speaker</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ear Phon</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cart" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Cart totals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Label>Use Phone Number</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                ></Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Col>
    </div>
  );
}

export default Navbars;
