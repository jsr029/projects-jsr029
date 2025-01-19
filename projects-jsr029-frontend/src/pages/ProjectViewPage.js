import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Navbar from '../components/CustomNavbar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import { baseUrl } from '../baseUrl';
import Spinner from 'react-bootstrap/Spinner';
import "../css/viewPage.css"

const ProjectViewPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.projects.find(p => p._id === id)); // Ensure projects is an array
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                if (!project) {
                    await dispatch(getProjects());
                }
            } catch (err) {
                setError('Failed to fetch project data.');
            }
        };
        fetchProject();
    }, [dispatch, project, id]);

    if (error) return <div className="container mt-4"><div className="alert alert-danger">{error}</div></div>;

    if (!project) return <div className="container mt-4"><Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></div>;

    return (
        <div>
            <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
            <div className="container mt-4">
                <div className="card">
                    <img src={`${baseUrl}${project.imageUrl}`} className="card-img-top" alt={project.title} />
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
