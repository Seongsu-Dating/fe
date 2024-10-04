import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CreateDCculLife() {
  const navigate = useNavigate();
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);

  const bigBox = "영화관";
  const foodPic = "theater";

  const smallBoxes = [
    { title: "난포", hours: "영업시간", time: "10:00~20:00", phone: "전화번호", num: "010-7788-0099" },
    { title: "난포", hours: "영업시간", time: "10:00~20:00", phone: "전화번호", num: "010-7788-0099" },
    { title: "난포", hours: "영업시간", time: "10:00~20:00", phone: "전화번호", num: "010-7788-0099" },
    { title: "난포", hours: "영업시간", time: "10:00~20:00", phone: "전화번호", num: "010-7788-0099" },
    { title: "난포", hours: "영업시간", time: "10:00~20:00", phone: "전화번호", num: "010-7788-0099" },
  ];

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
            marginLeft:'25px',
            marginTop: "0",
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
        <div style={{ width: "400px", height: "650px" }}>
          <div
            id="bigBox"
            style={{
              cursor: "pointer",
              width: "330px",
              height: "780px",
              borderRadius: "20px",
              backgroundColor: "rgba(240, 254, 216, 1)",
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
              src={`../img/${foodPic}.png`}
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
                width: "245px",
                height: "130px",
                marginTop: "30px",
                borderRadius: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor:
                  clickedBoxIndex === index
                    ? "rgba(210, 224, 206, 1)" // 클릭된 박스의 색상
                    : hoveredBoxIndex === index
                    ? "rgba(210, 224, 226, 1)" // 호버된 박스의 색상
                    : "rgba(240, 254, 216, 1)", // 기본 색상
                textAlign: "left",
                transition: "background-color 0.07s ease",
              }}
              onMouseEnter={() => setHoveredBoxIndex(index)}
              onMouseLeave={() => setHoveredBoxIndex(null)}
              onClick={() => setClickedBoxIndex(index)} // 클릭 이벤트
            >
              <p
                style={{
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  margin: "0",
                  marginBottom: "10px",
                  fontWeight: "bolder",
                  fontSize: "24px",
                }}
              >
                {box.title}
              </p>
              <p style={{ paddingLeft: "20px", margin: 0, color: "rgba(0, 0, 0, 0.41)" }}>
                {box.hours} {box.time}
              </p>
              <p style={{ paddingLeft: "20px", margin: 0, color: "rgba(0, 0, 0, 0.41)" }}>
                {box.phone} {box.num}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px" }}>
      <img
    src="../img/backBtn.png"
    alt="back button"
    style={{ width: "210px", height: "90px", cursor: "pointer" ,paddingRight:'110px'}}
    onClick={() => navigate("/createDC_popUp")}
  />
        <button
          alt="next button"
          style={{ width: "210px", height: "90px", marginLeft: "50px", cursor: "pointer" ,border:"none",backgroundColor:'rgba(255, 112, 116, 1)',color:"rgba(255, 255, 255, 1)",fontSize:'24px',fontWeight:"550",borderRadius:"50px"}}
          onClick={() => navigate("/")}
        >생성 결과 보기</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", paddingBottom: "80px" }}>
        <img
          src="../img/FootHome.png"
          alt="home button"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/createDC")}
        />
        <img
          src="../img/FootLike.png"
          alt="like button"
          style={{ marginLeft: "100%", cursor: "pointer" }}
          onClick={() => navigate("/likedDC")}
        />
        <img
          src="../img/FootMypage.png"
          alt="mypage button"
          style={{ marginLeft: "100%", cursor: "pointer" }}
          onClick={() => navigate("/myPage")}
        />
      </div>
    </div>
  );
}
