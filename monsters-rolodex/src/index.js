import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React.StrictMode - identifies checks/warnings (i.e. using DEPRECATED 
// packages) in our application

// document.getElementById('root') - located in index.html 
// ReactDOM.render will render inside of our <div id="root"></div> tag with 
// our entire react application 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
