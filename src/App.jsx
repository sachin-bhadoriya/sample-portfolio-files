import React from "react";
import Home from "./Home";
import MainWebTwo from "./Components/TempTwo/MainWebTwo";
import MainWebOne from "./Components/TempOne/mainWebOne";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeTwo from "./Components/TempTwo/CompoTwo/HomeTwo";
import AboutTwo from "./Components/TempTwo/CompoTwo/AboutTwo";
import ProjectTwo from "./Components/TempTwo/CompoTwo/ProjectTwo";
import ContactTwo from "./Components/TempTwo/CompoTwo/ContactTwo";
import SkillsTwo from "./Components/TempTwo/CompoTwo/Skills";
import HireMeTwo from "./Components/TempTwo/CompoTwo/HireMeTwo";
import ServiceTwo from "./Components/TempTwo/CompoTwo/ServiceTwo";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/First/*" element={<MainWebOne />} />
        <Route path="/Second/*" element={<MainWebTwo />} />
        {/* <Route path="*" element={<Navigate to="/Second/" />} />
        <Route path="*" element={<Navigate to="/First/" />} /> */}
      </Routes>
    </>
  );
};

export default App;
