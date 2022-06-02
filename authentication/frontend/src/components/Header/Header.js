import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Header.css";

const Header = () => {
    const auth = useSelector(state => state.auth.authenticated);

    const renderLinks = () => {
        if (auth) {
            return (
                <div>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/feature">Feature</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        }
    }

    return (
        <div className="header">
            <Link to="/">Redux Auth</Link>
            {renderLinks()}
        </div>
    );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
