import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/actions';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const HomePage = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const auth = useSelector(state => state.auth);

    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div>
            <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
            <div className="container mt-4">
                {auth.isAuthenticated && auth.user && (auth.user.role === 'admin' || auth.user.role === 'superAdmin') && (
                    <button className="btn btn-primary mb-4" onClick={() => setShowProjectForm(true)}>Add Project</button>
                )}
                <div className="row">
                    {projects.map(project => (
                        <div className="col-md-4" key={project._id}>
                            <ProjectCard project={project} setEditingProject={setEditingProject} setShowProjectForm={setShowProjectForm} />
                        </div>
                    ))}
                </div>
            </div>
            <ProjectForm
                show={showProjectForm}
                setShow={setShowProjectForm}
                editingProject={editingProject}
            />
            <LoginForm show={showLogin} setShow={setShowLogin} />
            <RegisterForm show={showRegister} setShow={setShowRegister} />
        </div>
    );
};

export default HomePage;
