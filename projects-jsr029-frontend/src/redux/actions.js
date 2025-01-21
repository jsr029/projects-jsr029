import axios from 'axios';
import { baseUrl } from '../baseUrl';

export const GET_PROJECTS = 'GET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const PROJECT_ERROR = 'PROJECT_ERROR'; // New action type for project errors
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS'; // New action type for project success

const setAuthHeaders = () => ({
    headers: {
        'authorization': localStorage.getItem('token')
    }
});

// Action creators
export const getProjects = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/api/projects`);
        dispatch({ type: GET_PROJECTS, payload: res.data });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Projects fetched successfully' });
    } catch (err) {
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to fetch projects' });
    }
};

export const addProject = (project) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/api/projects/create`, project, setAuthHeaders());
        dispatch({ type: ADD_PROJECT, payload: res.data });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Project added successfully' });
    } catch (err) {
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to add project' });
    }
};

export const updateProject = (id, project) => async dispatch => {
    try {
        const res = await axios.put(`${baseUrl}/api/projects/edit/${id}`, project, setAuthHeaders());
        dispatch({ type: UPDATE_PROJECT, payload: res.data });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Project updated successfully' });
    } catch (err) {
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to update project' });
    }
};

export const deleteProject = (id) => async dispatch => {
    try {
        await axios.delete(`${baseUrl}/api/projects/${id}`, setAuthHeaders());
        dispatch({ type: DELETE_PROJECT, payload: id });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Project deleted successfully' });
    } catch (err) {
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to delete project' });
    }
};

// Authentication actions
export const login = (credentials) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/api/auth/login`, credentials);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Login successful' });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to login' });
    }
};

export const register = (userData) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/api/auth/register`, userData);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        dispatch({ type: PROJECT_SUCCESS, payload: 'Registration successful' });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
        console.error(err);
        dispatch({ type: PROJECT_ERROR, payload: 'Failed to register' });
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    return { type: LOGOUT };
};
