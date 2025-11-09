// src/components/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ setShowLogin, setShowRegister }) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand={false} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">JSR029</Navbar.Brand>
        
        {/* Burger toujours visible */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Menu qui apparaît dans le burger sur TOUS les écrans */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/cv">CV</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link disabled>{user?.role || 'Admin'}</Nav.Link>
                <Nav.Link onClick={() => dispatch(logout())}>Déconnexion</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => setShowLogin(true)}>Connexion</Nav.Link>
                <Nav.Link onClick={() => setShowRegister(true)}>Inscription</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;