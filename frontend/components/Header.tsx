import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

interface Props {
  active: string;
}

const pages = ['Play', 'Info', 'Contact', 'Help'];

export default class Header extends React.Component<Props> {
  private active: string;

  constructor(props: Props) {
    super(props);
    this.active = props.active;
  }

  render() {
    return (
      <Navbar bg={'primary'} variant={'dark'} expand={'sm'}>
        <Container>
          <NavbarBrand href="#home">Placeholder Name</NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <Nav data-testid={'nav'} className={'ml-auto'}>
              {pages.map((page, idx) => {
                return (
                  <NavLink key={idx} active={page === this.active}>
                    {page}
                  </NavLink>
                );
              })}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
  }
}
