import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AsideBar from "./components/AsideBar/Asidebar";
import "./index.css";
import Home from "./pages/Home";
import UnknownPage from "./pages/UnknownPage/UnknownPage";

export default function App() {
  return (
    <div className="bg-transparent">
      <div className=""></div>
      <div>
        <AsideBar />
        <div className="left-1/3 fixed">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<UnknownPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
