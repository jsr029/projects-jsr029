import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ResumePage.css';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ResumePage = () => {
    return (
        <>
            <Helmet>
                <title>CV - Jean-Sébastien Rakotonirina</title>
                <meta name="description" content="CV de Jean-Sébastien Rakotonirina, Développeur d'Applications." />
                <meta name="keywords" content="CV, Jean-Sébastien Rakotonirina, Développeur d'Applications, JavaScript, React, Node.js" />
                <meta property="og:title" content="CV - Jean-Sébastien Rakotonirina" />
                <meta property="og:description" content="CV de Jean-Sébastien Rakotonirina, Développeur d'Applications." />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="main-container" style={{ marginTop: "45px" }}>
                <div className="resume-container">
                    <header className="resume-header text-center mb-4">
                        <h1>Jean-Sébastien Rakotonirina</h1>
                        <p>Développeur d'Applications</p>
                        <p>
                            Email : <a href="mailto:jsr059@gmail.com">jsr059@gmail.com</a> | Téléphone : <a href="tel:+33665325036">(+33) 6 65 32 50 36</a>
                        </p>
                    </header>

                    <section className="resume-section">
                        <h2>Projets récents</h2>
                        <div className="resume-item">
                            <h3>Créateur de drones</h3>
                            <p>Projet personnel pour un pays étranger | Janvier 2025 - Aujourd'hui</p>
                            <ul>
                                <li>Modélisation des drones sous Solidworks</li>
                                <li>Rédaction de la documentation</li>
                                <li>Création de prototypes</li>
                                <li>Projet en cours avec investisseurs</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h3>Créateur d’un traducteur de Braille</h3>
                            <p>Projet personnel | Janvier 2025 - Avril 2025</p>
                            <ul>
                                <li>Modélisation sous Solidworks</li>
                                <li>Connexion des composants électroniques</li>
                                <li>Impression 3D avec Chitubox</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Expérience professionnelle</h2>

                        <div className="resume-item">
                            <h3>Développeur d’Applications & UX (Bénévolat)</h3>
                            <p>Benomads.fr | Août 2024 - Janvier 2025</p>
                            <ul>
                                <li>Création de prototypes Figma pour améliorer l’expérience utilisateur</li>
                                <li>Développement de micro-services (ex. création automatique de comptes)</li>
                                <li>Technos : Node.js, MongoDB, Express, React, Docker, GitHub, GitLab, VS Code, Ubuntu</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h3>Développeur FileMaker & FileMaker Server (Bénévolat)</h3>
                            <p>Consultant indépendant | Août 2024 - Octobre 2024</p>
                            <ul>
                                <li>Création d’une application FileMaker personnalisée</li>
                                <li>Intégration des API Redmine et Jira via des API Node.js maison</li>
                                <li>Technos : FileMaker Pro, FileMaker Server, Node.js</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Formation</h2>
                        <div className="resume-item">
                            <h3>Bac+3/4 - Développement Web</h3>
                            <p>OpenClassRooms | 2021 - 2022</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Compétences</h2>
                        <ul className="skills-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </section>

                    <section className="resume-section">
                        <h2>Contact</h2>
                        <p>Email : <a href="mailto:jsr059@gmail.com">jsr059@gmail.com</a></p>
                        <p>LinkedIn : <a href="https://www.linkedin.com/in/rakotonirinajeansebastien" target="_blank" rel="noopener noreferrer">linkedin.com/in/rakotonirinajeansebastien</a></p>
                        <p>GitHub : <a href="https://github.com/jsr029" target="_blank" rel="noopener noreferrer">github.com/jsr029</a></p>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ResumePage;

