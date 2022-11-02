import React from "react";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Nav,
} from "reactstrap";

function NavBar(args) {
  return (
    <Navbar {...args}>
      <NavbarBrand href="/">
        <img src="NWB.svg" width={100} alt="" />
      </NavbarBrand>
      <Nav className="me-auto">
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/user/profile">UserProfile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/gov/profile">Government</NavLink>
        </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    </Navbar>
  );
}

export default NavBar;
