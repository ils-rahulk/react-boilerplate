import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Provider } from 'react-redux'
import configureStore from './store';
import App from './containers/App';
import { GlobalStyle } from './global-style';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore();
toast.configure()

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
            <GlobalStyle />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
