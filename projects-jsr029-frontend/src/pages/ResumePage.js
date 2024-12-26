import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ResumePage.css';
import Navbar from '../components/Navbar'

const ResumePage = () => {
    return (
        <>
            <Navbar />
            <div style={{marginTop: "45px"}}>
                <div className="resume-container">
                    <header className="resume-header">
                        <h1>Jean-Sébastien Rakotonirina</h1>
                        <p>Développeur d'Applications</p>
                        <p>Email: jsr059@gmail.com | Phone: (+33) 06.65.32.50.36</p>
                    </header>

                    <section className="resume-section">
                        <h2>Experience</h2>
                        <div className="resume-item">
                            <h3>Développeur d'Appications et Dev UX</h3>
                            <p>Benomads.fr | août 2024 - Present</p>
                            <ul>
                                <li>Créer des prototypes figma pour rendre la navigation intuitive</li>
                                <li>Développer des micro services comme à l'inscription l'application se crée automatiquement</li>
                                <li>Node, mongo, express, react, docker, github, gitlab, vscode, ubuntu</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h3>Développeur Filemaker et Filemaker Server</h3>
                            <p>Consultant | août 2024 - octobre 2024</p>
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
                        <p>Email: jsr059@gmail.com</p>
                        <p>LinkedIn: www.linkedin.com/in/rakotonirinajeansebastien</p>
                        <p>GitHub: https://github.com/jsr029</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ResumePage;

