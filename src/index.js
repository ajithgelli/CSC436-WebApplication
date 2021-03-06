import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/'
})

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider  value={axiosInstance}>
      <Provider store={store}>
        <App />
      </Provider>
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
