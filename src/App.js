import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import "./style.css"


function App() {
  return (
   <div className="App">
      <Navbar />
   </div>
  );
}

export default App;
