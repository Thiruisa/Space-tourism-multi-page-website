import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, Destination, Crew, Technology } from "./components";
// import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route paths="/destination" element={<Destination />} />
      
        <Route path="/crew" element={<Crew />} />

        <Route path="/technology" element={<Technology />} />

      </Routes>
    </Router>
  );
}

export default App;
