import { combineReducers } from 'redux';
import {
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    LOGIN_SUCCESS,
    LOGOUT,
    AUTH_ERROR,
    PROJECT_ERROR,
    PROJECT_SUCCESS
} from './actions';

const initialProjectsState = {
    projects: [],
    error: null,
    success: null
};

const projectsReducer = (state = initialProjectsState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return { ...state, projects: action.payload, error: null, success: null };
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload], error: null, success: 'Project added successfully' };
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: state.projects.map(project =>
                    project._id === action.payload._id ? action.payload : project
                ),
                error: null,
                success: 'Project updated successfully'
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload),
                error: null,
                success: 'Project deleted successfully'
            };
        case PROJECT_ERROR:
            return { ...state, error: action.payload, success: null };
        case PROJECT_SUCCESS:
            return { ...state, success: action.payload, error: null };
        default:
            return state;
    }
};

const initialAuthState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: {
        id: localStorage.getItem('userId'),
        role: localStorage.getItem('role')
    },
    error: null,
    success: null
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { isAuthenticated: true, user: action.payload, error: null, success: 'Login successful' };
        case LOGOUT:
        case AUTH_ERROR:
            return { isAuthenticated: false, user: null, error: action.type === AUTH_ERROR ? 'Authentication error' : null, success: null };
        case PROJECT_ERROR:
            return { ...state, error: action.payload, success: null };
        case PROJECT_SUCCESS:
            return { ...state, success: action.payload, error: null };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    projects: projectsReducer,
    auth: authReducer
});

export default rootReducer;
