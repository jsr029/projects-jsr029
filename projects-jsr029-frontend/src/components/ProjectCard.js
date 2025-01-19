import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { baseUrl } from '../baseUrl';
import "../css/projectCard.css"

const ProjectCard = ({ project, setEditingProject, setShowProjectForm }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditingProject(project);
        setShowProjectForm(true);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            dispatch(deleteProject(project._id));
        }
    };

    return (
        <div className="card mb-3 sc">
            <img src={`${baseUrl}${project.imageUrl}`} className="card-img-top" alt={project.title} height={200}/> 
            <div className="card-body" style={{height: "300px"}}>
                <h5 className="card-title ellipsis-title">{project.title}</h5>
                <p className="card-text" style={{
                    height: "120px",
                    maxWidth: '380px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: "justify"
                }}>{project.description.substring(0, 200)}...</p>
                <p style={{maxWidth: "410px", overflow: "hidden"}}><a href={project.appUrl} className="card-text ellipsis-title" target="_blank" rel="noopener noreferrer">{project.appUrl}</a></p>
                <Link to={`/project/${project._id}`} className="btn btn-primary">Voir</Link>
                {auth.isAuthenticated && auth.user && (auth.user.role === 'admin' || auth.user.role === 'superAdmin') && (
                    <>
                        <button 
                            className="btn btn-warning ml-2" 
                            onClick={handleEdit} 
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                            aria-label="Edit project"
                        >
                            Editer
                        </button>
                        <button 
                            className="btn btn-danger ml-2" 
                            onClick={handleDelete}
                            aria-label="Delete project"
                        >
                            Supprimer
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
