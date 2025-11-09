import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import ProjectViewPage from './pages/ProjectViewPage';
import ResumePage from './pages/ResumePage';
import CustomNavbar from './components/CustomNavbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <CustomNavbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<ResumePage />} />
          <Route path="/project/:id" element={<ProjectViewPage />} />
        </Routes>
        <LoginForm show={showLogin} onHide={() => setShowLogin(false)} />
        <RegisterForm show={showRegister} onHide={() => setShowRegister(false)} />
      </Router>
    </Provider>
  );
}

export default App;