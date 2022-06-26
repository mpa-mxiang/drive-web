import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Navbar, NavDropdown } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Navbar.Brand>
          Max Driving School
        </Navbar.Brand>
        <Bars />

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavDropdown title="Packages">
            <NavDropdown.Item href="groups/group1">Sliver</NavDropdown.Item>
            <NavDropdown.Item href="groups/group2">Gold</NavDropdown.Item>
          </NavDropdown>
          <NavLink to='/book' activeStyle>
            Book Your Class
          </NavLink>
          <NavLink to='/clients' activeStyle>
            Success Clients
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            More
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;
