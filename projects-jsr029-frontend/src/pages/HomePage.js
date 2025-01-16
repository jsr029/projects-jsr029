import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../redux/actions';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const HomePage = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const auth = useSelector(state => state.auth);

    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div style={{marginTop: "5rem"}}>
            <Helmet>
                <title>Accueil - mes Projets</title>
                <meta name="description" content="Liste de mes projets, mongodb, express, react, node. Rakotonirina Jean-Sébastien" />
                <meta name="keywords" content="projets, node, react, mongodb, express, rakotonirina, jean-sebastien" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "http://schema.org",
                        "@type": "WebPage",
                        "name": "Mes Projets page d'accueil",
                        "description": "Liste de certains projets.",
                        "url": "https://projects-jsr029-frontend.vercel.app"
                    }
                    `}
                </script>
            </Helmet>
            <div className="container mt-4">
                <input
                    type="text"
                    placeholder="Rechercher par titre ou description"
                    className="form-control mb-4"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                {auth.isAuthenticated && auth.user && (auth.user.role === 'admin' || auth.user.role === 'superAdmin') && (
                    <button className="btn btn-primary mb-4" onClick={() => setShowProjectForm(true)}>Ajouter un Projet</button>
                )}
                <div className="row">
                    {currentProjects.map(project => (
                        <div className="col-md-4" key={project._id}>
                            <ProjectCard project={project} setEditingProject={setEditingProject} setShowProjectForm={setShowProjectForm} />
                        </div>
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredProjects.length / projectsPerPage)} paginate={paginate} />
            </div>
            <ProjectForm
                show={showProjectForm}
                setShow={setShowProjectForm}
                editingProject={editingProject}
            />
            <LoginForm show={showLogin} setShow={setShowLogin} />
            <RegisterForm show={showRegister} setShow={setShowRegister} />
            <Footer />
        </div>
    );
};

export default HomePage;
