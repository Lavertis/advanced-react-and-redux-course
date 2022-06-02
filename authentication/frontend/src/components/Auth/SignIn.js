import React from 'react';
import {Field, reduxForm} from "redux-form";
import * as actions from "../../actions";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const SignIn = ({handleSubmit}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const errorMessage = useSelector(state => state.auth.errorMessage);

    const onSubmit = (formProps) => {
        dispatch(actions.signIn(formProps, () => {
            navigate('/feature')
        }));
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
            <button>Sign In!</button>
        </form>
    );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default reduxForm({form: 'signIn'})(SignIn);
