import {Provider} from "react-redux";
import React from "react";
import {createStore} from "redux";
import reducers from "./reducers";


const Root = ({children, initialState = {}}) => {
    const store = createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Root;