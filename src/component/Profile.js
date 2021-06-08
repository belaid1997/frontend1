import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                   
                    
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                   
                   
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    
                  </Row>
                  <Row>
                    
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                         
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    
                    
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                   
                  </Row>
                  <Row>
                   
                      <Form.Group>
                        <label>Telephone</label>
                        <Form.Control
                         defaultValue="32451312"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    
                  </Row>
                  
                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                   
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  
                </div>
                <p className="description text-center">
                  "You can <br></br>
                  Change hear all <br></br>
                  your personnel information"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;