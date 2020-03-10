import React from 'react';
import {
  Navbar, 
  NavbarBrand,
  Nav,
  Form,
  FormControl
} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <NavbarBrand href="/">Company XYZ</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Sales</Nav.Link>
            <Nav.Link href="/warranty">Warranty</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      

    </div>
  );
}

export default App;
