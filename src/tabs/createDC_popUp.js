import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import moveToNextCategory from "../utils/moveToNextCategory";
import moveToPreviousCategory from "../utils/moveToPreviousCategory";
import BottomButtom from "../components/BottomButton";

export default function CreateDCpopUp() {
  const [smallBoxes, setSmallBoxes] = useState([]); // 팝업 데이터를 저장할 상태
  const navigate = useNavigate();
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);

  const bigBox = "팝업";
  const popUpPic = "popUp";

  useEffect(() => {
    // 팝업 데이터를 API로부터 불러옴
    fetch('http://15.165.28.79:3000/place/popup')
    .then((response) => response.json())
    .then((data) => {
    console.log("API 응답 데이터:", data); // API 응답 데이터를 확인
    if (data.result) {
      const formattedBoxes = data.result.map((item) => ({
        title: item.name,
        open_hour: item.open_hour || "영업시간 정보 없음",
        place_type: item.place_type || "음식 종류 정보 없음",
        rating: item.rating || "평점 없음",
        review: item.review || "리뷰 없음",
      }));
      setSmallBoxes(formattedBoxes);
      }
     })
    .catch((error) => console.error("API 호출 에러:", error));
     }, [popUpPic]); // 컴포넌트 마운트 시 한 번만 실행
  return (
    <div
      style={{
        backgroundColor: "rgba(240, 248, 255, 0.869)",
        minHeight: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ backgroundColor: "pink", width: "20px" }}></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              display: "inline",
              marginBottom: "5px",
              fontSize: "50px",
              fontWeight: "bold",
              marginRight: "244px",
              color: "rgba(255, 112, 116, 1)",
            }}
          >
            데이트코스 생성
          </p>
          <img
            src="../img/search.png"
            alt="search"
            style={{ width: "60px", height: "60px", marginRight: "3px", cursor: "pointer" }}
          />
        </div>
        <p
          style={{
            marginRight: "180px",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "25px",
            marginTop: "0",
            marginLeft: "25px",
            marginBottom: "30px",
          }}
        >
          신개념 AI 추천 데이트코스 메이커, 성수데이팅
        </p>
        <p style={{ marginRight: "375px", marginBottom: 0, fontWeight: "bolder", fontSize: "40px" }}>
          밥 먹고 뭐하지?
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "700px", height: "650px" }}>
          <div
            id="bigBox"
            style={{
              cursor: "pointer",
              width: "460px",
              height: "1000px",
              borderRadius: "20px",
              backgroundColor: "rgba(222, 210, 242, 1)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            <img
              src="../img/likeBtn.png"
              alt="like button"
              className="likingImg"
              style={{ width: "50px", margin: "20px" }}
            />
            <img
              src={`../img/popUp.png`}
              alt="Exhibition"
              style={{
                width: "265px",
                height: "260px",
                zIndex: 10,
                position: "relative",
                paddingLeft: "50px",
              }}
            />
            <div style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}>
              <h1>{bigBox}</h1>
              <p style={{ color: "rgba(0, 0, 0, 0.41)", fontSize: "20px", fontWeight: "bolder" }}>
                그거 알아? 요새 여기 완전 핫하대
              </p>
            </div>
          </div>
        </div>

        <div id="smallBoxes">
          {smallBoxes.map((box, index) => (
            <div
              key={index}
              id="smallBox"
              style={{
                cursor: "pointer",
                width: "500px",
                height: "180px",
                marginTop: "30px",
                borderRadius: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor:
                  clickedBoxIndex === index
                    ? "rgba(183, 174, 199, 1)" // 클릭된 박스의 색상
                    : hoveredBoxIndex === index
                    ? "rgba(183, 174, 199, 1)" // 호버된 박스의 색상
                    : "rgba(222, 210, 242, 1)", // 기본 색상
                textAlign: "left",
                transition: "background-color 0.07s ease",
              }}
              onMouseEnter={() => setHoveredBoxIndex(index)}
              onMouseLeave={() => setHoveredBoxIndex(null)}
              onClick={() => setClickedBoxIndex(index)} // 클릭 이벤트
            >
                   <p style={{ paddingTop: "20px", paddingLeft: "20px", margin:"0", marginBottom:"10px", fontWeight: "bolder", fontSize: "28px" }}>
                {box.title}
              </p>
              <p style={{ paddingTop: "10px", paddingLeft: "20px", margin: 0, color:"rgba(0, 0, 0, 0.41)", fontSize:"21px" }}>
                {box.place_type}
              </p>
              <p style={{ paddingTop: "10px", paddingLeft: "20px", margin: 0, color:"rgba(0, 0, 0, 0.41)", fontSize:"21px" }}>
                평점: {box.rating}
              </p>
              <p style={{ paddingTop: "10px", paddingLeft: "20px", margin: 0, color:"rgba(0, 0, 0, 0.41)", fontSize:"21px" }}>
               {box.review}
              </p>
            </div>
          ))}
        </div>
      </div>



     

      <BottomButtom navigate={navigate}/>

<div style={{ display: "flex", justifyContent: "center", marginTop: "80px", paddingBottom: "110px" }}>
  <img
    src="../img/FootHome.png"
    alt="home button"
    style={{ cursor: "pointer",width:'180px' }}
    onClick={() => navigate("/createDC")}
  />
  <img
    src="../img/FootLike.png"
    alt="like button"
    style={{ marginLeft: "100%", cursor: "pointer" ,width:'150px' }}
    onClick={() => navigate("/likedDC")}
  />
  <img
    src="../img/FootMypage.png"
    alt="mypage button"
    style={{ marginLeft: "100%", cursor: "pointer",width:'150px'  }}
    onClick={() => navigate("/myPage")}
  />
</div>
</div>
);
}
