import tv4 from 'tv4';
import stateSchema from "./stateSchema";

export default ({getState}) => next => action => {
    next(action);

    if (!tv4.validate(getState(), stateSchema))
        console.warn('Invalid state', tv4.error);
}