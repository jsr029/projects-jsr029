// src/components/RegisterForm.js
import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions';

const RegisterForm = ({ show, onHide }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: 'user' // par défaut
  });

  const dispatch = useDispatch();
  const { error, success } = useSelector(state => state.auth);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
    // Optionnel : fermer après succès
    // if (!error) onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Inscription</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="exemple@domaine.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              minLength="6"
              placeholder="6 caractères minimum"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rôle (optionnel)</Form.Label>
            <Form.Select name="role" value={userData.role} onChange={handleChange}>
              <option value="user">Utilisateur</option>
              <option value="admin">Admin</option>
              <option value="superAdmin">Super Admin</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Seuls les superAdmins peuvent créer d'autres admins.
            </Form.Text>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Annuler
          </Button>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RegisterForm;