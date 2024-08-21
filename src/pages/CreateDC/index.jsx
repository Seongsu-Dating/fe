import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function CreateDC() {
    const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "rgba(240, 248, 255, 0.869)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ backgroundColor: "pink", width: "20px" }}></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              display: "inline",
              marginBottom: "35px",
              fontSize: "40px",
              fontWeight: "bolder",
              marginRight: "200px",
              color: "rgba(255, 112, 116, 1)",
            }}
          >
            데이트코스 생성
          </p>
          <img
            src="../assets/images/search.png"
            alt="search"
            style={{ width: "60px", height: "60px", marginRight: "3px", cursor: "pointer" }}
          />
        </div>
        <p
          style={{
            marginRight: "210px",
            color: "rgba(0, 0, 0, 0.6)",
            marginTop: 0,
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          신개념 AI 추천 데이트코스 메이커, 성수데이팅
        </p>
        <h2 style={{ marginRight: "375px", marginBottom: 0 }}>뭐 먹으러 가지?</h2>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "350px", height: "650px" }}>
          <div
            id="bigBox"
            style={{
              cursor: "pointer",
              width: "250px",
              height: "650px",
              borderRadius: "20px",
              backgroundColor: "rgba(215, 228, 246, 1)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
                           
            <img src="../assets/images/likeBtn.png" alt="like button" className="likingImg" style={{ width: "50px", margin: "20px" }} />
            <img
              src="../assets/images/Korean.png"
              alt="Korean food"
              style={{ width: "230px", height: "200px", zIndex: 10, position: "relative", paddingLeft: "50px" }}
            />
            <div style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}>
              <h1>한식</h1>
              <p>서울숲 근처의 BEST한식 맛집 추천🌿</p>
            </div>
          </div>
        </div>

        <div id="smallBoxes">
          {["난포", "난포", "난포", "난포", "난포"].map((text, index) => (
            <div
              key={index}
              id="smallBox"
              style={{
                cursor: "pointer",
                width: "240px",
                height: "120px",
                margin: "10px",
                borderRadius: "20px",
                backgroundColor: "rgba(215, 228, 246, 1)",
                textAlign: "left",
                
              }}
            >
              <p style={{ paddingTop: "20px", paddingLeft: "20px", fontWeight: "bolder", fontSize: "20px" }}>{text}</p>
              <p style={{ paddingLeft: "20px", margin: 0 }}>영업시간 </p>
              <p style={{ paddingLeft: "20px", margin: 0 }}>전화번호</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} onClick={() => navigate("/result")}>
        <img src="../assets/images/nextBtn.png" alt="next button" style={{ width: "180px", height: "80px", marginLeft: "365px", cursor: "pointer" }} />
      </div>

    
      <div style={{ display: "flex", justifyContent: "center", marginTop: "80px",paddingBottom:'80px' }}>
        <img
          src="../assets/images/FootHome.png"
          alt="home button"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "courseCreate.html")}
        />
        <img
          src="../assets/images/FootLike.png"
          alt="like button"
          style={{ marginLeft: "100%", cursor: "pointer" }}
          onClick={() => (window.location.href = "likedDC.html")}
        />
        <img
          src="../assets/images/FootMypage.png"
          alt="mypage button"
          style={{ marginLeft: "100%", cursor: "pointer" }}
          onClick={() => (window.location.href = "myPage.html")}

     
        />
      </div>
    </div>
  );
}
