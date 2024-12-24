import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const ProjectViewPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.find(p => p._id === id));

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        if (!project) {
            dispatch(getProjects());
        }
    }, [dispatch, project]);

    if (!project) return <div>Loading...</div>;

    return (
        <div>
            <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
            <div className="container mt-4">
                <div className="card">
                    <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <p className="card-text"><strong>Technologies: </strong>{project.techno}</p>
                        <a href={project.appUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to App</a>
                    </div>
                </div>
            </div>
            <LoginForm show={showLogin} setShow={setShowLogin} />
            <RegisterForm show={showRegister} setShow={setShowRegister} />
            <Footer />
        </div>
    );
};

export default ProjectViewPage;
