import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        className="navbar shadow p-3 mb-5 bg-white rounded"
        color="light"
        light
        expand="md"
      >
        <div className="container">
          <NavbarBrand className="navbarBrand" href="/">
            <b>BOOK</b>{" "}
          </NavbarBrand>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Buku</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Kategori</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Peminjaman</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/borrower">Peminjam</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
