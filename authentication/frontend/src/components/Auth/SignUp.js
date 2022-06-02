import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as actions from "../../actions";
import {useDispatch} from "react-redux";


const SignUp = ({handleSubmit}) => {
    const dispatch = useDispatch();
    const onSubmit = (formProps) => {
        dispatch(actions.signup(formProps));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text"/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password"/>
            </fieldset>
            <button>Sign Up!</button>
        </form>
    );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default reduxForm({form: 'signup'})(SignUp);
