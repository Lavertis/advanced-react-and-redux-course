import React from 'react';
import requireAuth from "./HOC/requireAuth";


const Feature = () => (
    <div>
        This is the feature!
    </div>
);

Feature.propTypes = {};

Feature.defaultProps = {};

export default requireAuth(Feature);
