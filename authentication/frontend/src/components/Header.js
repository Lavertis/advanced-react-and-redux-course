import React from 'react';
import {Link} from "react-router-dom";


const Header = () => (
    <div>
        <Link to="/">Redux Auth</Link><br/>
        <Link to="/signup">Signup</Link><br/>
        <Link to="/signin">Signin</Link><br/>
        <Link to="/signout">Signout</Link><br/>
        <Link to="/feature">Feature</Link><br/>
    </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
