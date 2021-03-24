import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/minty/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)
import './index.css';
import {Breath} from './components/Breath.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Breath></Breath>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
