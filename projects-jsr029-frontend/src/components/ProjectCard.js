import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../redux/actions';
import { Link } from 'react-router-dom';
import "../css/styles.css"

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
        <div className="card mb-4" style={{overflow: "hidden"}}>
            <img src={project.imageUrl} className="card-img-top" alt={project.title} height={200}/>
            <div className="card-body" style={{height: "220px"}}>
                <h5 className="card-title" style={{
                    maxWidth: '390px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{project.title}</h5>
                <a href={project.appUrl} className='card-text' target='_blank' rel="noopener noreferrer" style={{
                    width: '390px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: "block"
                }}>{project.appUrl}</a>
                <p className="card-text" style={{height: "90px"}}>{project.description}</p>
                <Link to={`/project/${project._id}`} className="btn btn-primary">View</Link>
                {(auth.user.role === 'admin' || auth.user.role === 'superAdmin') && (
                    <>
                        <button className="btn btn-warning ml-2" onClick={handleEdit} style={{marginRight: "10px", marginLeft: "10px"}}>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
