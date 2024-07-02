import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import NextPage from './components/NextPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
} 

export default App;
