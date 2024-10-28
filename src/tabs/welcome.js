import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/main");
  };

  return (
    <div
      style={{
        backgroundColor: "#FED8DF", // 전체 배경색을 연한 핑크 (#FED8DF)로 설정
        display: "flex",
        flexDirection: "column",
        height: "120vh",
        alignItems: "center",
      }}
    >
      {/* 도넛 이미지 */}
      <img
        src="../img/doughnuts.png"
        alt="doughnut"
        style={{ width: "1350px" }}
      />

      {/* 제목 부분 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#FF7074", // 텍스트 색상을 진한 핑크로 설정
          fontWeight: "700",
          fontSize: "55px",
        }}
      >
        <span>AI추천</span>
        <span>데이트코스</span>
      </div>

      {/* 서브타이틀 */}
      <div
        style={{
          color: "#FF7074",
          fontWeight: "700",
          fontSize: "80px",
          margin: "30px",
        }}
      >
        성수데이팅
      </div>

      {/* 설명 텍스트 */}
      <div
        style={{
          width: "800px",
          color: "#FF9494", // 연한 핑크로 텍스트 색상 설정
          fontWeight: "500",
          fontSize: "30px",
          textAlign: "center", // 텍스트 중앙 정렬
        }}
      >
        <p>
          밥 먹고, 카페 가고, 팝업 가고, ...데이트코스를 어디서부터 어떻게 짜야할 지
          모르겠다면? AI추천을 활용해서 골라봐!
        </p>
        <span>신개념 데이트코스 메이커, 성수데이팅</span>
      </div>

      {/* 버튼 부분 */}
      <div
        style={{
          backgroundColor: "#FED8DF", // 버튼 감싸는 div의 배경색도 전체 배경과 동일하게 설정
          width: "100%", // 버튼이 가운데 정렬되도록 전체 너비 설정
          display: "flex",
          justifyContent: "center", // 가운데 정렬
          padding: "50px 0", // 버튼 위아래로 패딩 추가
          marginTop: "auto", // 아래쪽으로 붙게 설정
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: "white", // 버튼 배경색을 흰색으로 설정
            width: "600px",
            height: "100px",
            borderRadius: "50px", // 둥근 버튼 모양
            fontWeight: "600",
            fontSize: "40px",
            border: "none", // 테두리 없음
            cursor: "pointer",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // 그림자를 추가해 버튼이 더 돋보이게 설정
          }}
          onClick={handleButtonClick}
        >
          데이트코스 생성하기
        </button>
      </div>
    </div>
  );
};

export default Welcome;
