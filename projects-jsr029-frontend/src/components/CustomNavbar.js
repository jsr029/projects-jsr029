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
    <Navbar bg="dark" variant="dark" expand={false} fixed="top" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">JSR029</Navbar.Brand>

        {/* Burger toujours visible sur TOUS les écrans */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/cv" className="text-white">CV</Nav.Link>

            {isAuthenticated ? (
              <>
                <Nav.Link disabled className="text-info">{user?.role}</Nav.Link>
                <Nav.Link onClick={() => dispatch(logout())} className="text-warning">
                  Déconnexion
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => setShowLogin(true)} className="text-white">
                  Connexion
                </Nav.Link>
                <Nav.Link onClick={() => setShowRegister(true)} className="text-white">
                  Inscription
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;