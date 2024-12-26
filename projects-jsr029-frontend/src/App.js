import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import ProjectViewPage from './pages/ProjectViewPage';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/project/:id" element={<ProjectViewPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;

