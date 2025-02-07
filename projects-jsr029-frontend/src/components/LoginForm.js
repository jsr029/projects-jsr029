import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const LoginForm = ({ show, setShow }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login({ email, password }));
            setShow(false);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            aria-describedby="emailHelp" 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control 
                            id="password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            aria-describedby="passwordHelp"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginForm;
