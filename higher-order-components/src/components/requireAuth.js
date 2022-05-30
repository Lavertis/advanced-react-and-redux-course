import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const requireAuth = (ChildComponent) => {
    return (props) => {
        const auth = useSelector(state => state.auth);
        const navigate = useNavigate()

        const shouldNavigateAway = () => {
            if (!auth)
                navigate('/')
        }
        useEffect(() => {
            shouldNavigateAway();
        }, [auth]);

        return (
            <ChildComponent {...props}/>
        )
    };
}


requireAuth.propTypes = {};

requireAuth.defaultProps = {};

export default requireAuth;
