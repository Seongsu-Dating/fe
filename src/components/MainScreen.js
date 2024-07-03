// MainScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainScreen.css';
import donutImage from './images/image.png'; // 이미지 경로를 올바르게 설정합니다.

const MainScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/next');
  };

  return (
    <div className="main-screen">
      <div className="donuts">
        <img src={donutImage} alt="Donuts" />
      </div>
      <div className="text">
        <h1>AI추천<br />데이트코스</h1>
        <h2>성수데이팅</h2>
        <p>
          밥 먹고, 카페 가고, 팝업 가고, ...<br />
          데이트코스를 어디서부터 어떻게 짜야할 지<br />
          모르겠다면? AI추천을 활용해서 골라봐!<br />
          신개념 데이트코스 메이커, 성수데이트
        </p>
        <button onClick={handleButtonClick}>데이트코스 생성하기</button>
      </div>
    </div>
  );
}

export default MainScreen;