import React from "react";
import { Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const HomeRoutes = () => {
  return (
    <Routes>
      <Routes path="/" element={<Home />} />
      <Routes path="/about" element={<About />} />
    </Routes>
  );
};

export default HomeRoutes;
