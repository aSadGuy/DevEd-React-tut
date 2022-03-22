import Home from "./Home";
import Cuisine from "./Cuisine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
