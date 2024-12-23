import { combineReducers } from 'redux';
import {
    GET_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    LOGIN_SUCCESS,
    LOGOUT,
    AUTH_ERROR
} from './actions';

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload;
        case ADD_PROJECT:
            return [...state, action.payload];
        case UPDATE_PROJECT:
            return state.map(project =>
                project._id === action.payload._id ? action.payload : project
            );
        case DELETE_PROJECT:
            return state.filter(project => project._id !== action.payload);
        default:
            return state;
    }
};

const initialAuthState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: {
        id: localStorage.getItem('userId'),
        role: localStorage.getItem('role')
    }
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { isAuthenticated: true, user: action.payload };
        case LOGOUT:
        case AUTH_ERROR:
            return { isAuthenticated: false, user: null };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    projects: projectsReducer,
    auth: authReducer
});

export default rootReducer;
