import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ResumePage.css';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ResumePage = () => {
    return (
        <>
            <Helmet>
                <title>Resume - Jean-Sébastien Rakotonirina</title>
                <meta name="description" content="Resume of Jean-Sébastien Rakotonirina, Application Developer." />
                <meta name="keywords" content="Resume, Jean-Sébastien Rakotonirina, Application Developer, JavaScript, React, Node.js" />
                <meta property="og:title" content="Resume - Jean-Sébastien Rakotonirina" />
                <meta property="og:description" content="Resume of Jean-Sébastien Rakotonirina, Application Developer." />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="main-container" style={{ marginTop: "45px" }}>
                <div className="resume-container">
                    <header className="resume-header">
                        <h1>Jean-Sébastien Rakotonirina</h1>
                        <p>Développeur d'Applications</p>
                        <p>Email: <a href="mailto:jsr059@gmail.com">jsr059@gmail.com</a> | Phone: <a href="tel:+330665985036">(+33) 06.65.32.50.36</a></p>
                    </header>
                        <div className="resume-item">
                            <h3>Créateur de drones</h3>
                            <p>Pour un pays étranger | janvier 2025 - à ce jour</p>
                            <ul>
                                <li>Modéliser des drones sous Solidworks</li>
                                <li>Créer la documentation</li>
                                <li>Créer un prototype</li>
                                <li>Prise en charge par les investisseurs du traducteur et des drones, en cours</li>
                            </ul>
                        </div>

                    <section className="resume-section">
                        <h2>Experience</h2>
                        <div className="resume-item">
                            <h3>Créateur d'un traducteur de Braille</h3>
                            <p>Pour moi | janvier 2025 - avril 2025</p>
                            <ul>
                                <li>Modéliser sous Solidworks</li>
                                <li>Connecter les différents composants</li>
                                <li>Imprimer en 3D avec Chitubox</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h3>Développeur d'Appications et Dev UX (Bénévolat)</h3>
                            <p>Pour Benomads.fr | août 2024 - janvier 2025</p>
                            <ul>
                                <li>Créer des prototypes figma pour rendre la navigation intuitive</li>
                                <li>Développer des micro services comme à l'inscription l'application se crée automatiquement</li>
                                <li>Node, mongo, express, react, docker, github, gitlab, vscode, ubuntu</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h3>Développeur Filemaker et Filemaker Server (Bénévolat)</h3>
                            <p>Pour un Consultant | août 2024 - octobre 2024</p>
                            <ul>
                                <li>Créer une application Filemaker</li>
                                <li>Utiliser les APIs de 2 sites web redmine et jira en créant mes propres APIs</li>
                                <li>Filemaker Pro et Server, Nodejs</li>
                            </ul>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Education</h2>
                        <div className="resume-item">
                            <h3>Bac+3/4</h3>
                            <p>OpenClassRooms | 2021 - 2022</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Skills</h2>
                        <ul className="skills-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Mongo</li>
                            <li>SQL</li>
                        </ul>
                    </section>

                    <section className="resume-section">
                        <h2>Contact</h2>
                        <p>Email: <a href="mailto:jsr059@gmail.com">jsr059@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/rakotonirinajeansebastien" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/rakotonirinajeansebastien</a></p>
                        <p>GitHub: <a href="https://github.com/jsr029" target="_blank" rel="noopener noreferrer">https://github.com/jsr029</a></p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ResumePage;
