import React from "react";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
