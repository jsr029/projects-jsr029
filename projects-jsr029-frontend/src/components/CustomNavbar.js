import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ setShowLogin, setShowRegister }) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">JSR029</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/cv">CV</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link disabled>{user?.role}</Nav.Link>
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