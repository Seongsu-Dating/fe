import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";



export default function CreateDC() {


  const [smallBoxes, setSmallBoxes] = useState([]); // 데이터를 저장할 상태
  const navigate = useNavigate();
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);

  const bigBox = '일식';
  const foodPic = 'Japanese';

  useEffect(() => {
    // API 호출
    fetch('http://15.165.28.79:3000/place/japanese')
      .then((response) => response.json())
      .then((data) => {
        // 받아온 데이터가 있으면 상태를 업데이트
        if (data.result) {
          const formattedBoxes = data.result.map((item) => ({
            title: item.name,
            hours: "영업시간",
            time: item.hour || "정보 없음", // 영업시간이 없을 경우 처리
            phone: "전화번호",
            num: item.phone_number || "정보 없음", // 전화번호가 없을 경우 처리
          }));
          setSmallBoxes(formattedBoxes); // 상태 업데이트
        }
      })
      .catch((error) => console.error("API 호출 에러:", error));
  }, []); // 컴포넌트 마운트 시 한 번만 실행

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
        
              color: "rgba(255, 112, 116, 1)",
            }}
          >
            데이트코스 생성
          </p>

        </div>
        <p
          style={{

            color: "rgba(0, 0, 0, 0.6)",
            fontSize:"27PX",

            marginTop: '0',
            marginBottom: "5px",
          }}
        >
          신개념 AI 추천 데이트코스 메이커, 성수데이팅
        </p>
        <p style={{ marginRight: "505px", marginBottom: 0, fontWeight: "bolder", fontSize: "33px" }}>
          뭐 먹으러 가지?
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
              backgroundColor: "rgba(215, 228, 246, 1)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              marginTop: "40PX",
            }}
          >
            <img
              src="../img/likeBtn.png"
              alt="like button"
              className="likingImg"
              style={{ width: "50px", margin: "20px" }}
            />
            <img
              src={`../img/${foodPic}.png`}
              alt="Korean food"
              style={{ width: "400px", zIndex: 10, position: "relative", paddingLeft: "150px" }}
            />
            <div style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}>
              <h1 style={{fontSize:'40px'}}>{bigBox}</h1>
              <p style={{ color:"rgba(0, 0, 0, 0.41)", fontSize:"25PX", fontWeight:"bolder" }}>
                서울숲 근처의 BEST {bigBox} 맛집 추천
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
                marginTop: "30PX",
                borderRadius: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor:
                  clickedBoxIndex === index
                    ? "rgba(192, 203, 219, 1)"
                    : hoveredBoxIndex === index
                    ? "rgba(192, 203, 219, 1)"
                    : "rgba(215, 228, 246, 1)",
                textAlign: "left",
                transition: "background-color 0.07s ease",
              }}
              onMouseEnter={() => setHoveredBoxIndex(index)}
              onMouseLeave={() => setHoveredBoxIndex(null)}
              onClick={() => setClickedBoxIndex(index)}
            >
              <p style={{ paddingTop: "20px", paddingLeft: "20px", margin:"0", marginBottom:"10PX", fontWeight: "bolder", fontSize: "28px" }}>
                {box.title}
              </p>
              <p style={{paddingTop:"15px",paddingLeft: "20px", margin: 0 ,color:"rgba(0, 0, 0, 0.41)",fontSize:"21px" }}>
                {box.hours} {box.time}
              </p>
              <p style={{ paddingTop:"10px",paddingLeft: "20px", margin: 0 ,color:"rgba(0, 0, 0, 0.41)" ,fontSize:"21px"}}>
                {box.phone} {box.num}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
        <img
          src="../img/nextBtn.png"
          alt="next button"
          style={{ width: "270px", marginLeft: "700px", cursor: "pointer" }}
          onClick={() => navigate("/createDC_cafe")}
        />
      </div>

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
