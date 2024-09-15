import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
/*eslint-diable*/
function App() {
  let post='강남 우동 맛집';
  let [글제목,글제목변경]=useState(['카자 코트 추천','가자코트','라이썬']);
  let [좋아요,좋아요변경]=useState(0);

  let [p,글변경]=useState('2월 17일 발행');
  return (
    <div className="App">

     <div></div>
     {/* <button onClick={()=>{글제목변경(['여자코트추천','강남우동맛집','파이썬 독학'])}}>글수정</button> */}
     <button onClick={()=>{
      let copy=[...글제목];
      copy=copy.sort();
      글제목변경(copy);

     }}>가나다정렬</button>
      <h4>블로그임</h4>  
      <div className="list">
        <p>{p}</p>
        <h4>{글제목[0]} <span onClick={()=>{글변경('여자코트추천')}}>좋아요</span>{좋아요}</h4>
        <p>글제목</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>


      <Modal></Modal>
      <Modal></Modal>

    </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
