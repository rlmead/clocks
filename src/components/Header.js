import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  var items = ["Uncooperative Clock"];

  return (
    <>
      <Navbar
        expand="md"
        light
        className="navbar-default navbar-light sticky-top bg-light">
        <h1>
          Misbehaving Clocks
        </h1>
        <NavbarToggler
          onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar>
          <Nav
            style={{ display: "flex", flexFlow: "row nowrap" }} className="ml-auto">
            {
              items.map((item, index) => {
                return (
                  <NavItem
                    key={index}>
                    <p>{item}</p>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;