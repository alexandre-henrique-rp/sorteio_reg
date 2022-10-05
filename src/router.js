import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./home";
import PoliPrivat from "./poliPriv";
import TermoDeUso from "./termouso";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica_de_privacidade" element={<PoliPrivat />} />
        <Route path="/termos_de_uso" element={<TermoDeUso />} />
      </Routes>
    </BrowserRouter>
  );
}
