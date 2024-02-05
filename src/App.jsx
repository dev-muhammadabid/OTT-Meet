import React from "react";
import "./App.css";
import { Home, Youtube, Omeet, Login, Signup } from "./components";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/Omeet" element={<Omeet />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
