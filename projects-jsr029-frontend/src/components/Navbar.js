import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

const Navbar = ({ setShowLogin, setShowRegister }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Mes Projets</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {!auth.isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setShowLogin(true)}>se Loguer</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setShowRegister(true)}>s'enregistrer</button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-link nav-link" onClick={handleLogout}>sortir</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
