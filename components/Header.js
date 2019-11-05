import Link from 'next/link';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../custom.scss';


const PostLink = dlinks => (
  <li>
    <Link href="/p/[id]" as={`/p/${dlinks.id}`}>
      <a>{dlinks.id}</a>
    </Link>
  </li>
);

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar className="align-items-center px-0" light expand="lg" id="navbar">
        <NavbarBrand href=""><img src="static/logo.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto align-items-center" navbar>
            <Link href="/caracteristicas">
              <a className="mx-3 text-dark align-middle">Caracteristicas</a>
            </Link>
            <Link href="/precios">
              <a className="mx-3 text-danger">Precios</a>
            </Link>
            <Link href="/soporte">
              <a className="mx-3 text-dark">Soporte</a>
            </Link>
            <Link href="/cuboxer">
              <a className="ml-3 text-white bg-danger px-3 py-2 rounded-lg">Quiero ser Cuboxer</a>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
}

export default Header;
