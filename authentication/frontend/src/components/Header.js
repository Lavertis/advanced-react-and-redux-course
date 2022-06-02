import React from 'react';
import {Link} from "react-router-dom";


const Header = () => (
    <div>
            <Link to="/">Redux Auth</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/signout">Signout</Link>
            <Link to="/feature">Feature</Link>
    </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
