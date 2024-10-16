import { BrowserRouter, Routes, Route ,Link
} from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Welcome from "./tabs/welcome";
import Main from "./tabs/main";

import CreateDC from "./tabs/createDC";
import CreateDCcafe from "./tabs/createDC_cafe";
import CreateDCpopUp from "./tabs/createDC_popUp";
import CreateDCculLife from "./tabs/createDC_culLife";
import MyPage from "./tabs/myPage";
import LikedDC from "./tabs/likedDC";
import Result2 from "./tabs/course_result2";
import Result1 from "./tabs/course_result1";

function App() {
  return (

    <div className="App">
      <nav>
      <Link to="/welcome">welcome</Link>
      |<Link to="/main">main</Link>
      |<Link to="/createDC">createDC</Link>
      | <Link to="/myPage">마이페이지</Link>
      | <Link to="/likedDC">찜한 데이트코스</Link>
      | <Link to="/course_result1">데이트코스결과1</Link>
      | <Link to="/course_result2">데이트코스결과2</Link>
      </nav>
      <Routes>
      <Route path='/welcome'element={<Welcome/>}/>
      <Route path='/main'element={<Main/>}/>
        <Route path='/createDC'element={<CreateDC/>}/>
        <Route path='/createDC_cafe'element={<CreateDCcafe/>}/>
        <Route path='/createDC_popUp'element={<CreateDCpopUp/>}/>
        <Route path='/createDC_culLife'element={<CreateDCculLife/>}/>
        <Route path='/myPage'element={<MyPage/>}/>
        <Route path='/likedDC'element={<LikedDC/>}/>
        <Route path='/course_result2'element={<Result2/>}/>
        <Route path='/course_result1'element={<Result1/>}/>
      </Routes>
    </div>
  );
}

export default App;
