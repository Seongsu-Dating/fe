import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} /> {/* 추가 */}
      </Routes>
    </Router>
  );
};

export default App;