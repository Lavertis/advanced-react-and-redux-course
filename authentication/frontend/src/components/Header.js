import React from 'react';
import {Link} from "react-router-dom";


const Header = () => (
    <div>
            <Link to="/">Redux Auth</Link><br/>
            <Link to="/signup">Sign Up</Link><br/>
            <Link to="/signin">Sign In</Link><br/>
            <Link to="/signout">Sign Out</Link><br/>
            <Link to="/feature">Feature</Link><br/>
    </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
