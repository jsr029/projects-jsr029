import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../css/styles.css'; // Make sure to import the CSS file

const ProjectCard = ({ project, setEditingProject, setShowProjectForm }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditingProject(project);
        setShowProjectForm(true);
    };

    const handleDelete = () => {
        dispatch(deleteProject(project._id));
    };

    return (
        <div className="card mb-3">
            <img src={project.imageUrl} className="card-img-top" alt={project.title} height={200}/>
            <div className="card-body" style={{height: "300px"}}>
                <h5 className="card-title ellipsis-title" style={{
                    maxWidth: '390px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{project.title}</h5>
                <p className="card-text" style={{height: "120px"}}>{project.description}</p>
                <p style={{width: '390px', overflow:'hidden'}}><a href={project.appUrl} className="card-text" target="_blank" rel="noopener noreferrer" style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{project.appUrl}</a></p>
                <Link to={`/project/${project._id}`} className="btn btn-primary">View Project</Link>
                {auth.isAuthenticated && auth.user && (auth.user.role === 'admin' || auth.user.role === 'superAdmin') && (
                    <>
                        <button className="btn btn-warning ml-2" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
