import {Provider} from "react-redux";
import React from "react";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise";

const Root = ({children, initialState = {}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
        // compose(
        //     applyMiddleware(reduxPromise),
        //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // )
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Root;