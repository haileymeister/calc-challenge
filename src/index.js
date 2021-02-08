import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyD_E2EZMnErGgYbnCRYEZoDyh8ItcSeEBM",
    authDomain: "calc-challenge.firebaseapp.com",
    databaseURL: "https://calc-challenge-default-rtdb.firebaseio.com",
    projectId: "calc-challenge",
    storageBucket: "calc-challenge.appspot.com",
    messagingSenderId: "1024475497479",
    appId: "1:1024475497479:web:e102eb7c82fadaa2bad6a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
