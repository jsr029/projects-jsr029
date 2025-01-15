import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import ProjectViewPage from './pages/ProjectViewPage';
import ResumePage from './pages/ResumePage';
import CustomNavbar from './components/CustomNavbar';
import LoginForm from './components/LoginForm'; // Import the LoginForm component
import RegisterForm from './components/RegisterForm';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <Provider store={store}>
            <Router>
                <CustomNavbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/cv" element={<ResumePage setShowLogin={setShowLogin} setShowRegister={setShowRegister} />} />                    <Route path="/project/:id" element={<ProjectViewPage />} />
                </Routes>
                <LoginForm show={showLogin} setShow={setShowLogin} /> {/* Use the LoginForm component */}
                <RegisterForm show={showRegister} setShow={setShowRegister} /> {/* Use the LoginForm component */}
            </Router>
        </Provider>
    );
}

export default App;
