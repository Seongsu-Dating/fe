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
        height: "120vh",
        alignItems: "center",
      }}
    >
      <img src="../img/doughnuts.png"
      alt="doughnut"style={{width:"1350px"}}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FF7074",
            fontWeight: "700",
            fontSize: "55px"
          }}
        >
          <span>AI추천</span>
          <span>데이트코스</span>
        </div>
       <div
          style={{
            color: "#FF7074",
            fontWeight: "700",
            fontSize: "80px",
            margin:"30px"
          }}
        >
          성수데이팅
        </div>
        <div
          style={{
            width: "800px",
            color: "#FF9494",
            fontWeight: "500",
            fontSize: "30px",
   
          }}
        >
          <p> 밥 먹고, 카페 가고, 팝업 가고, ...데이트코스를 어디서부터 어떻게 짜야할 지
         모르겠다면? AI추천을 활용해서 골라봐!</p>
          <span>신개념 데이트코스 메이커, 성수데이팅</span>
        </div>
          <div>
      <button
        type="button"
        style={{
          margin:"50px",
          backgroundColor: "white",
          width: "600px",
          height: "100px",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "40px",
          border:"none",
          cursor:"pointer"
        }}
        onClick={handleButtonClick}
      >
        데이트코스 생성하기
      </button></div>
    </div>
  );
};

export default Welcome;