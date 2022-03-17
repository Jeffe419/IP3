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
            <ReactBootStrap.Navbar.Brand href="/">
              Save The Polar Bears
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="/weatherData">
                  Weather History Data
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/co2Data">
                  CO2 Data
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/news">
                  News
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="/about">
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
