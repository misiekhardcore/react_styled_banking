import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavLink,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = (props) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">Sign Up</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
