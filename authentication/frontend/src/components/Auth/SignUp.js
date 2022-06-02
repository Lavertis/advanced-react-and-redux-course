import React from 'react';


const SignUp = () => {
    return (
        <form>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </fieldset>
        </form>
    );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
