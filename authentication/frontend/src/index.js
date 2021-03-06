import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/Auth/SignUp";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import Feature from "./components/Feature";
import SignOut from "./components/Auth/SignOut";
import SignIn from "./components/Auth/SignIn";

const store = createStore(
    reducers,
    {
        auth: {authenticated: localStorage.getItem('token')}
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/signin" element={<SignIn/>}/>
                        <Route path="/signout" element={<SignOut/>}/>
                        <Route path="/feature" element={<Feature/>}/>
                    </Routes>
                </App>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
