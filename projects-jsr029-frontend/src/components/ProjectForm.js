import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProject, updateProject } from '../redux/actions';
import { Modal, Button, Form } from 'react-bootstrap';

const ProjectForm = ({ show, setShow, editingProject }) => {
    const [title, setTitle] = useState('');
    const [appUrl, setAppUrl] = useState('');
    const [techno, setTechno] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (editingProject) {
            setTitle(editingProject.title);
            setAppUrl(editingProject.appUrl);
            setTechno(editingProject.techno);
            setDescription(editingProject.description);
        }
    }, [editingProject]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('appUrl', appUrl);
        formData.append('techno', techno);
        formData.append('description', description);
        if (image) formData.append('image', image);

        if (editingProject) {
            dispatch(updateProject(editingProject._id, formData));
        } else {
            dispatch(addProject(formData));
        }

        setShow(false);
    };

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{editingProject ? 'Edit Project' : 'Add Project'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>App URL</Form.Label>
                        <Form.Control type="url" value={appUrl} onChange={(e) => setAppUrl(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Techno</Form.Label>
                        <Form.Control type="text" value={techno} onChange={(e) => setTechno(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {editingProject ? 'Update' : 'Add'} Project
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProjectForm;
