import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';
import App from "./components/app/app";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary";

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root')
);
