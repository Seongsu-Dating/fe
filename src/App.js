import { BrowserRouter, Routes, Route ,Link
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CreateDC from "./tabs/createDC";
import CreateDCcafe from "./tabs/createDC_cafe";
import CreateDCpopUp from "./tabs/createDC_popUp";
import CreateDCculLife from "./tabs/createDC_culLife";

import MyPage from "./tabs/myPage";
import LikedDC from "./tabs/likedDC";
import Welcome from "./tabs/index1";
import Result from "./tabs/index4";
import DateCourseResult from "./tabs/index5";
import Result2 from "./tabs/course_result2";
import Result3 from "./tabs/course_result3";
import Result1 from "./tabs/course_result1";


//import CreateDC from "./tabs/createDC.tsx";

function App() {
  // let post = "강남 우동 맛집";
  // let[글제목, 글제목함수]=useState(['남자 코트 추천','여자코트 추천','공용코트 추천']);
  // let[따봉, 따봉함수]=useState(0);
  return (
    // <div className="App">
    //   <div className="black-nav">
    //     <h4>ReactBlog</h4>
    //   </div>

    // <button onClick={()=>{
    //   let copy=[...글제목];
    //   copy[0]='여자 코트 추천';
    //   글제목함수(copy);
    // }}
    
    // style={{cursor:'pointer',display:'flex',margin:'20px'}}>글수정</button>

    //   <div className="list">   
    //     <h4>{글제목[0]} 
    //       <span style={{cursor:'pointer'}}onClick={()=>{따봉함수(따봉+1) }}>👍</span> {따봉}</h4>
    //     <p>2월 17일 발행</p>

    //   </div>
    //   <div className="list">   
    //     <h4>{글제목[1]}</h4>
    //     <p>2월 17일 발행</p>

    //   </div>
    //   <div className="list">   
    //     <h4>{글제목[2]}</h4>
    //     <p>2월 17일 발행</p>

    //   </div>
    // <Modal></Modal>
    // </div>
    <div className="App">
      <nav>
      <Link to="/createDC">createDC</Link>
      | <Link to="/myPage">마이페이지</Link>
      | <Link to="/likedDC">찜한 데이트코스</Link>
      | <Link to="/index1">찜한 데이트코스</Link>
      | <Link to="/index4"></Link>
      | <Link to="/index5">데이트코스결과</Link>
      | <Link to="/course_result1">데이트코스결과1</Link>
      | <Link to="/course_result2">데이트코스결과2</Link>
      | <Link to="/course_result3">데이트코스결과3</Link>

      
      

      </nav>
      <Routes>
        <Route path='/createDC'element={<CreateDC/>}/>
        <Route path='/createDC_cafe'element={<CreateDCcafe/>}/>
        <Route path='/createDC_popUp'element={<CreateDCpopUp/>}/>
        <Route path='/createDC_culLife'element={<CreateDCculLife/>}/>

        <Route path='/myPage'element={<MyPage/>}/>
        <Route path='/likedDC'element={<LikedDC/>}/>
        <Route path='/index1'element={<Welcome/>}/>
        <Route path='/index4'element={<Result/>}/>
        <Route path='/index5'element={<DateCourseResult/>}/>
        <Route path='/course_result2'element={<Result2/>}/>
        <Route path='/course_result3'element={<Result3/>}/>
        <Route path='/course_result1'element={<Result1/>}/>
      
      </Routes>
    </div>
  );
}

// function Modal(){
//   return(
//     <div className="modal">
//         <h4>제목</h4>
//         <p>날짜</p>
//         <p>상세내용</p>
//         <p>더 상세</p>
//       </div>
//   )
// }

export default App;
