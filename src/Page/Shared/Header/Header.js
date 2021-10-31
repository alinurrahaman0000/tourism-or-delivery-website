import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logOut}= useAuth()
    return (
   <>
  <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Fast Delivery</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
      <Nav.Link as={HashLink} to="/namageProduct">ManageProduct</Nav.Link>
      <Nav.Link as={HashLink} to="/addProduct"> Add Products</Nav.Link>
      <Nav.Link as={HashLink} to="/about"> About</Nav.Link>
      <Nav.Link as={HashLink} to="/home#delivary">Delivary</Nav.Link>
      {  user?.email?
      <Button onClick={logOut} variant="light">Logout</Button>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="me-auto">
        </Nav>
    </Container>
  </Navbar>
  <br />
 

        </>
    );
};

export default Header;