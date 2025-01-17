import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions';

const CustomNavbar = ({ setShowLogin, setShowRegister }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Navbar expand={false} bg="dark" variant="dark" fixed="top" collapseOnSelect>
            <Navbar.Brand onClick={() => navigate('/')} >Mes Projets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="custom-nav-item">
                        <Button 
                            variant="link"
                            className='btn btn-link cv-link' 
                            onClick={() => navigate('/cv')}
                        >
                            CV
                        </Button>
                    </Nav.Item>
                    {!auth.isAuthenticated ? (
                        <>
                            <Nav.Item className="custom-nav-item">
                                <Button variant="link" onClick={() => setShowLogin(true)}>se Loguer</Button>
                            </Nav.Item>
                            <Nav.Item className="custom-nav-item">
                                <Button variant="link" onClick={() => setShowRegister(true)}>s'enregistrer</Button>
                            </Nav.Item>
                        </>
                    ) : (
                        <Nav.Item className="custom-nav-item">
                            <Button variant="link" onClick={handleLogout}>sortir</Button>
                        </Nav.Item>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
