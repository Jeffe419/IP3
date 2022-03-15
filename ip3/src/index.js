import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbarComponent';
import co2Data from "./components/co2data";
import WeatherhData from "./components/weatherhData";

ReactDOM.render(<Navbar />, document.getElementById('root') );
ReactDOM.render(<co2Data/> );
ReactDOM.render(<WeatherhData/> );

