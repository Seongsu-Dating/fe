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
        backgroundColor: "#FED8DF",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {/* <div>
        <img src="public\img\doughnut.png" className="pop-animation" />
      </div> */}
      <div
        style={{
          position: "fixed",
          bottom: "173px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            color: "#FF7074",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "42.46px",
          }}
        >
          <span>AI추천</span>
          <span>데이트코스</span>
        </div>
        <div
          style={{
            marginBottom: "97px",
            color: "#FF7074",
            fontWeight: "700",
            fontSize: "54px",
          }}
        >
          성수데이팅
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "348px",
            height: "88px",
            color: "#FF9494",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "21.78px",
          }}
        >
          <span>밥 먹고, 카페 가고, 팝업 가고, ...</span>
          <span>데이트코스를 어디서부터 어떻게 짜야할 지</span>
          <span>모르겠다면? AI추천을 활용해서 골라봐!</span>
          <span>신개념 데이트코스 메이커, 성수데이팅</span>
        </div>
      </div>
      <button
        type="button"
        style={{
          position: "fixed",
          bottom: "46px",
          backgroundColor: "white",
          width: "348px",
          height: "67px",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "20px",
        }}
        onClick={handleButtonClick}
      >
        데이트코스 생성하기
      </button>
    </div>
  );
};

export default Welcome;
