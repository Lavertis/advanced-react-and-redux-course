import axios from "axios";
import {AUTH_ERROR, AUTH_USER} from "./types";

export const signUp = (formProps, callback) => async dispatch => {
    axios.post('http://localhost:3090/signup', formProps)
        .then(res => {
            dispatch({type: AUTH_USER, payload: res.data.token});
            localStorage.setItem('token', res.data.token);
            callback();
        })
        .catch(() => {
            dispatch({type: AUTH_ERROR, payload: 'Email in use'});
        })
};

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
}