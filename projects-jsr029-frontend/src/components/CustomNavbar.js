import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions';

const CustomNavbar = ({ setShowLogin, setShowRegister }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Navbar expand={false} bg="dark" variant="dark" fixed="top" collapseOnSelect>
            <Navbar.Brand onClick={() => handleNavigate('/')}>Mes Projets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="custom-nav-item">
                        <Button 
                            variant="link"
                            className="nav-button" 
                            onClick={handleNavigate('/cv')}
                        >
                            CV
                        </Button>
                    </Nav.Item>
                    {!isAuthenticated ? (
                        <>
                            <Nav.Item className="custom-nav-item">
                                <Button 
                                    variant="link" 
                                    className="nav-button" 
                                    onClick={() => setShowLogin(true)}
                                >
                                    Se Loguer
                                </Button>
                            </Nav.Item>
                            <Nav.Item className="custom-nav-item">
                                <Button 
                                    variant="link" 
                                    className="nav-button" 
                                    onClick={() => setShowRegister(true)}
                                >
                                    S'enregistrer
                                </Button>
                            </Nav.Item>
                        </>
                    ) : (
                        <Nav.Item className="custom-nav-item">
                            <Button 
                                variant="link" 
                                className="nav-button" 
                                onClick={handleLogout}
                            >
                                Sortir
                            </Button>
                        </Nav.Item>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
