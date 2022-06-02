import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as actions from "../../actions";
import {useDispatch, useSelector} from "react-redux";


const SignUp = ({handleSubmit}) => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.auth.errorMessage);

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
            <div>
                {errorMessage}
            </div>
            <button>Sign Up!</button>
        </form>
    );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default reduxForm({form: 'signup'})(SignUp);
