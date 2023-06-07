import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardDet from "./components/CardDet";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<CardDet />} />
      </Routes>
    </>
  );
}

export default App;
