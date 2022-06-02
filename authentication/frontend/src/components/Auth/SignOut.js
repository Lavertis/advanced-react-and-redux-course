import React, {useEffect} from 'react';
import * as actions from "../../actions";
import {useDispatch} from "react-redux";

const SignOut = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.signOut());
    });

    return (
        <div>
            Sorry to see you go!
        </div>
    );
}

SignOut.propTypes = {};

SignOut.defaultProps = {};

export default SignOut;
