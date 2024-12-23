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
            <a className="navbar-brand" href="/">Project Manager</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {!auth.isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setShowLogin(true)}>Login</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setShowRegister(true)}>Register</button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
