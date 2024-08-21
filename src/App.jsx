import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import CreateDC from "./pages/CreateDC";
import MyPage from "./pages/MyPage";
import LikedDC from "./pages/LikedDC";
import Result from "./pages/Result";
import DateCourseResult from "./pages/Result 2";

const App = () => {
  return (
    <>      
    <Router>
      <Routes>
      <Route path='/createDC'element={<CreateDC/>}/>
        <Route path='/myPage'element={<MyPage/>}/>
        <Route path='/likedDC'element={<LikedDC/>}/>
        <Route path='/'element={<Welcome/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/result2' element={<DateCourseResult/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;