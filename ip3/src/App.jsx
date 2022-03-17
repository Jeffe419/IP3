import React from "react";
import "./App.css";

import NavbarComponent from "./components/NavbarComponent";
import Co2Data from "./components/Co2data";
import WeatherData from "./components/WeatherhData";
import News from "./components/News";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
        <Router>
            <NavbarComponent/>
          <Routes>
            <Route path="/co2Data" element={<Co2Data/>} />
            <Route path="/weatherData" element={<WeatherData/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/about" element={<About/>} />
            
          </Routes>

          <Footer/>


        </Router>
    );
}
export default App;
