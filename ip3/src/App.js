import React from "react";
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import NavbarComponent from "./components/navbarComponent";
import co2Data from "./components/co2data";
import WeatherhData from "./components/weatherhData";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
    return(

        <Router>
            <div className="App">
                <NavbarComponent /> 
                <co2Data path = "/co2Data" component={ co2Data }/>
                <WeatherhData path = "/weatherHData" component={WeatherhData} />
            </div>
        </Router>

    

    );
}

export default App;