import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import College from "./College";
import Result from "./Result";
import Department from "./Department";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/College" element={<College />} />
        <Route exact path="/Result" element={<Result />} />
        <Route exact path="/dept" element={<Department />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
