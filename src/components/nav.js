import React from "react";
import { Navbar, Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navigation(){
    return(
        <div className="Navigation">
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home" >WMF</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/pool">Pool</Nav.Link>
      <Nav.Link href="/farm">Farm</Nav.Link>
      <Nav.Link href="/game">Game</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
    );
}

export default Navigation