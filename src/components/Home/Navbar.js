import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

const Sitebar = (props) => {
  return (
    <Navbar sticky="top" color ="primary" light expand="md">
      <NavbarBrand style={{color:"#f7d695", fontWeight: "bold"}} href="/">POTION SHOP</NavbarBrand>
      <Nav className="ml-auto">
        <NavItem >
          <Button style={{color:"black", fontWeight: "bold"}}className="pull-right" color="danger" onClick={props.clickLogout}>SIGN OUT</Button>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Sitebar;