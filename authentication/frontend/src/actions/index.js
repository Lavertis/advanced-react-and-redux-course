import axios from "axios";
import {AUTH_ERROR, AUTH_USER} from "./types";

export const signup = formProps => async dispatch => {
    axios.post('http://localhost:3090/signup', formProps).then(res => {
        dispatch({type: AUTH_USER, payload: res.data.token});
    }).catch(() => {
        dispatch({type: AUTH_ERROR, payload: 'Email in use'});
    })
};