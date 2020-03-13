import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Navbar, 
  NavbarBrand,
  Nav
} from 'react-bootstrap';
import history from './history';

// import logo from './logo.svg';
import './App.css';

// Import pages
import SalesPage from './pages/sales';
import WarrantyPage from './pages/warranty';
import RegisterSale from './pages/sales/RegisterSale';
import RegisterWarranty from './pages/warranty/RegisterWarranty'

function App() {
  return (
    <Router history={history}>
      <div className="container-fluid" style={{marginTop: '2%'}}>
        <Navbar bg="white" expand="lg">
          <NavbarBrand href="/" style={{fontWeight: 700}}>Company XYZ</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/sales">Sales</Nav.Link>
              <Nav.Link href="/warranty">Warranty</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
        <Switch>
          <Route path="/" exact component={SalesPage} />
          <Route path="/sales" exact component={SalesPage} />
          <Route path="/warranty" exact component={WarrantyPage} />
          <Route path="/registersale" exact component={RegisterSale} />
          <Route path="/registerwarranty" exact component={RegisterWarranty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
