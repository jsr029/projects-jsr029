// src/pages/ResumePage.js
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
                <meta name="description" content="CV de Jean-Sébastien Rakotonirina, Développeur d’Applications React Frontend." />
                <meta name="keywords" content="CV, Jean-Sébastien Rakotonirina, React, Fullstack, Microservices, Sécurité, Docker, Kubernetes" />
                <meta property="og:title" content="CV - Jean-Sébastien Rakotonirina" />
                <meta property="og:description" content="Développeur React Frontend expérimenté – Portfolio & CV en ligne" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="main-container" style={{ marginTop: "45px", padding: "20px 0" }}>
                <div className="resume-container container">

                    {/* EN-TÊTE */}
                    <header className="resume-header text-center mb-5 pb-4 border-bottom">
                        <h1 className="display-4 fw-bold">Jean-Sébastien Rakotonirina</h1>
                        <p className="lead">Développeur d’Applications React Frontend</p>
                        <p className="mb-2">
                            14 Rue Michel Colombe, 29000 Quimper<br />
                            Tél : <a href="tel:+33665325036">06.65.32.50.36</a> / <a href="tel:+33767807538">07.67.80.75.38</a><br />
                            Email : <a href="mailto:jsr059@gmail.com">jsr059@gmail.com</a>
                        </p>
                        <p>
                            LinkedIn : <a href="https://linkedin.com/in/jrakotonirina" target="_blank" rel="noopener noreferrer">linkedin.com/in/jrakotonirina</a><br />
                            GitHub : <a href="https://github.com/jsr029" target="_blank" rel="noopener noreferrer">github.com/jsr029</a> | 
                            <a href="https://github.com/jeanSebastienRakotonirina" target="_blank" rel="noopener noreferrer"> github.com/jeanSebastienRakotonirina</a>
                        </p>
                    </header>

                    {/* RÉSUMÉ */}
                    <section className="resume-section mb-5">
                        <h2 className="section-title">Résumé</h2>
                        <p>
                            Développeur polyvalent avec une reconversion réussie dans le développement web (Licence Pro RNCP niveau 6). 
                            Expertise en <strong>React Frontend</strong>, <strong>Fullstack</strong>, et <strong>microservices</strong>. 
                            Expérience bénévole et professionnelle variée, incluant leadership et gestion de projets. 
                            Forte emphase sur la <strong>sécurité</strong> (chiffrement, authentification). 
                            À la recherche d’un poste de Développeur React Frontend pour des applications accessibles et responsives.
                        </p>
                    </section>

                    {/* EXPÉRIENCES */}
                    <section className="resume-section mb-5">
                        <h2 className="section-title">Expériences</h2>

                        <div className="resume-item mb-4">
                            <h3>Développeur ReactJS Frontend (Bénévole) – Benomads.fr, Full Remote</h3>
                            <p className="text-muted">2024 – 2025</p>
                            <ul>
                                <li>Création microservices sécurisés avec authentification</li>
                                <li>Automatisation MongoDB avec scripts sécurisés</li>
                                <li>Plateforme NoCode en 3 clics</li>
                                <li>Travail en équipe</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Développeur Filemaker Pro (Bénévole) – Consultant, Full Remote</h3>
                            <p className="text-muted">2023</p>
                            <ul>
                                <li>Récupération données via API Jira</li>
                                <li>Visualisation données Filemaker avec contrôle d’accès</li>
                                <li>Travail en autonomie</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Agent de Production – Actual, Quimper</h3>
                            <p className="text-muted">2018 – 2019</p>
                            <ul>
                                <li>Fabrication agro-alimentaire</li>
                                <li>Travail en équipe</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Développeur d’Applications (Bénévole) – Affable 59, Dunkerque</h3>
                            <p className="text-muted">2016 – 2018</p>
                            <ul>
                                <li>Applications web/Windows</li>
                                <li>Formation collaborateurs</li>
                                <li>Travail en équipe</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Développeur Web FullStack – Odea-Amcala, Dunkerque</h3>
                            <p className="text-muted">2014 – 2016</p>
                            <ul>
                                <li>Front-End/Back-End (CakePHP, WordPress)</li>
                                <li>Travail en équipe</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Responsable Adjoint de Magasin – Mondial Moquette</h3>
                            <p className="text-muted">1996 – 2012</p>
                            <ul>
                                <li>Gestion personnel, stock, SAV</li>
                                <li>Travail en équipe</li>
                            </ul>
                        </div>

                        <div className="resume-item mb-4">
                            <h3>Secrétaire/Conducteur du Colonel – Armée de Terre, Mourmelon</h3>
                            <p className="text-muted">1994 – 1995</p>
                            <ul>
                                <li>Service National</li>
                            </ul>
                        </div>
                    </section>

                    {/* FORMATIONS */}
                    <section className="resume-section mb-5">
                        <h2 className="section-title">Formations</h2>
                        <div className="resume-item">
                            <h3>Licence Pro RNCP Niveau 6 – Développement Web</h3>
                            <p className="text-muted">2023</p>
                        </div>
                        <div className="resume-item">
                            <h3>CACES 1A, 3, 5 – AFTRAL, Ergué-Gabéric</h3>
                            <p className="text-muted">Oct/Nov 2023</p>
                        </div>
                        <div className="resume-item">
                            <h3>Conducteur de lignes – IUMM, Quimper</h3>
                            <p className="text-muted">2018</p>
                        </div>
                    </section>

                    {/* PROJETS RÉALISÉS */}
                    <section className="resume-section mb-5">
                        <h2 className="section-title">Projets réalisés</h2>
                        <div className="resume-item">
                            <h3>Job Document Generator</h3>
                            <p>Application IA générant un CV adapté, une lettre de motivation et un pitch de présentation à partir de la description d’une offre et du CV utilisateur.</p>
                        </div>
                    </section>

                    {/* COMPÉTENCES */}
                    <section className="resume-section mb-5">
                        <h2 className="section-title">Compétences</h2>
                        <ul className="skills-list list-unstyled d-flex flex-wrap gap-3">
                            <li><strong>React Frontend</strong></li>
                            <li><strong>Fullstack Development</strong></li>
                            <li><strong>Microservices (Quasar, Kubernetes, Docker, Redis)</strong></li>
                            <li><strong>Sécurité (Chiffrement, Authentification)</strong></li>
                            <li>CakePHP, WordPress</li>
                            <li>Filemaker Pro, MongoDB</li>
                            <li>API Jira</li>
                            <li>Leadership, Gestion de projets</li>
                        </ul>
                    </section>

                    {/* DIVERS */}
                    <section className="resume-section">
                        <h2 className="section-title">Divers</h2>
                        <p>Permis B</p>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ResumePage;