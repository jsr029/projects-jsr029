import axios from 'axios';
import { baseUrl } from '../baseUrl';

export const GET_PROJECTS = 'GET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action creators
export const getProjects = () => async dispatch => {
    try {
        const res = await axios.get(baseUrl+'/api/projects');
        dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const addProject = (project) => async dispatch => {
    try {
        const res = await axios.post(baseUrl+'/api/projects', project, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        });
        dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const updateProject = (id, project) => async dispatch => {
    try {
        const res = await axios.put(baseUrl+`/api/projects/${id}`, project, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        });
        dispatch({ type: UPDATE_PROJECT, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const deleteProject = (id) => async dispatch => {
    try {
        await axios.delete(baseUrl+`/api/projects/${id}`, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        });
        dispatch({ type: DELETE_PROJECT, payload: id });
    } catch (err) {
        console.error(err);
    }
};

// Authentication actions
export const login = (credentials) => async dispatch => {
    try {
        const res = await axios.post(baseUrl+'/api/auth/login', credentials);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
        console.error(err);
    }
};

export const register = (userData) => async dispatch => {
    try {
        const res = await axios.post(baseUrl+'/api/auth/register', userData);
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('role', user.role);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
        console.error(err);
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    return { type: LOGOUT };
};
