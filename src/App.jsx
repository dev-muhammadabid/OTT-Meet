import React from "react";
import "./App.css";
import { Home, Movies, Webshows, Youtube, Omeet } from "./components";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Webshows" element={<Webshows />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/Omeet" element={<Omeet />} />
      </Routes>
    </>
  );
};

export default App;
