// src/components/ProjectCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../redux/actions';
import { Link } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

const ProjectCard = ({ project, setEditingProject, setShowProjectForm }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const isAdmin = user && (user.role === 'admin' || user.role === 'superAdmin');

  const handleDelete = () => {
    if (window.confirm('Supprimer ce projet ?')) {
      dispatch(deleteProject(project._id));
    }
  };

  // URL de l'image : si c'est déjà une URL complète → on l'utilise telle quelle
  // sinon → on ajoute baseUrl (compatibilité ancienne version)
  const url = "https://projects-jsr029-frontend.vercel.app";
  const imageSrc = project.imageUrl.startsWith('http') 
    ? project.imageUrl 
    : `${url}${project.imageUrl}`;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={imageSrc} 
        alt={project.title} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {project.description.substring(0, 100)}...
        </Card.Text>
        <Card.Text><small className="text-muted">{project.techno}</small></Card.Text>
        <div className="mt-auto">
          <Link to={`/project/${project._id}`} className="btn btn-outline-primary btn-sm me-2">
            Voir
          </Link>
          {isAdmin && (
            <>
              <Button 
                size="sm" 
                variant="warning" 
                onClick={() => { 
                  setEditingProject(project); 
                  setShowProjectForm(true); 
                }}
              >
                Éditer
              </Button>
              <Button size="sm" variant="danger" className="ms-2" onClick={handleDelete}>
                Supprimer
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;