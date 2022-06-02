import React from 'react';
import requireAuth from "./Auth/requireAuth";


const Feature = () => (
    <div>
        Feature Component
    </div>
);

Feature.propTypes = {};

Feature.defaultProps = {};

export default requireAuth(Feature);
