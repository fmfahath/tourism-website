import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import "./style.css"


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home/>
    </React.Fragment>
  );
}

export default App;
