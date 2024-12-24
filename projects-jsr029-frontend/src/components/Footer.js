import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">A propos</h5>
                        <p>
                            Cette application MERN listera une dizaine de projets effectués, montrant l'évolution du code, chronologiquement dans le désordre.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="mailto:jsr029@gmail.com" className="text-dark">jsr059@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:+330665985036" className="text-dark">+33 06.65.32.50.36</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Jean-Sébastien Rakotonirina. tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
