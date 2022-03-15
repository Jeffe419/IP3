import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

class Navbar extends Component {
  render() {
    


    return (
      <React.Fragment className="Navbar">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#home">
              Save The Polar Bears
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="#features">
                  Weather History Data
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href='/public/co2Data.html'>
                  CO2 Data
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#deets">
                  News
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </React.Fragment>
    );
  }
}

export default Navbar;
