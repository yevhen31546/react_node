import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Navbar, 
  NavbarBrand,
  Nav,
  Form,
  FormControl,
} from 'react-bootstrap';
import { createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';

// Import pages
import SalesPage from './pages/sales';
import WarrantyPage from './pages/warranty';

// history
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
          <NavbarBrand href="/">Company XYZ</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/sales">Sales</Nav.Link>
              <Nav.Link href="/warranty">Warranty</Nav.Link>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>

      
        <Switch>
          <Route path="/" exact component={SalesPage} />
          <Route path="/sales" component={SalesPage} />
          <Route path="/warranty" component={WarrantyPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
