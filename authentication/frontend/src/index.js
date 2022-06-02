import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/Auth/SignUp";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers, {})}>
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
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
