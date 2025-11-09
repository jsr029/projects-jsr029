// src/components/ProjectForm.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, updateProject, getProjects } from '../redux/actions';
import { baseUrl } from '../baseUrl';

const ProjectForm = ({ show, setShow, editingProject }) => {
  const dispatch = useDispatch();
  const { success, error } = useSelector(state => state.projects);
  const [formData, setFormData] = useState({
    title: '', appUrl: '', techno: '', description: '', image: null
  });
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title,
        appUrl: editingProject.appUrl,
        techno: editingProject.techno,
        description: editingProject.description,
        image: null
      });
    } else {
      setFormData({ title: '', appUrl: '', techno: '', description: '', image: null });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocalError(null);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('appUrl', formData.appUrl);
    data.append('techno', formData.techno);
    data.append('description', formData.description);
    if (formData.image) data.append('image', formData.image);

    try {
      if (editingProject) {
        await dispatch(updateProject(editingProject._id, data));
      } else {
        await dispatch(addProject(data));
      }
      dispatch(getProjects());
      setShow(false);
    } catch (err) {
      setLocalError('Erreur lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{editingProject ? 'Modifier' : 'Ajouter'} un Projet</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {localError && <Alert variant="danger">{localError}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control name="title" value={formData.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lien de l'app</Form.Label>
            <Form.Control name="appUrl" value={formData.appUrl} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Technologies</Form.Label>
            <Form.Control name="techno" value={formData.techno} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image {editingProject && '(laisser vide pour garder l’ancienne)'}</Form.Label>
            <Form.Control type="file" name="image" accept="image/*" onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Annuler</Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Sauvegarder'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProjectForm;