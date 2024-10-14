import React, { useState } from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";

const category_test = [
  {
     category: "음식",
     subCategory: "양식",
  },
  {
     category: "카페",
     subCategory: "디저트"
  },
  {
     category: "팝업"
  },
  {
     category: "문화생활",
     subCategory: ["영화", "재즈바", "미술관"]
  }
]

export default function CreateDC() {
  const navigate = useNavigate();
  // 각 smallBox의 hover 상태와 클릭 상태를 관리하기 위한 state
  const [hoveredBoxIndex, setHoveredBoxIndex] = useState(null);
  const [clickedBoxIndex, setClickedBoxIndex] = useState(null);
  // const [foodPic, setFoodPic] = useState("");

  const { category } = useParams();

  const bigBox = category;
  let foodPic = '';

  if(bigBox === '일식') {
    foodPic = 'Japanese';
  } else if (bigBox === "중식") {
    foodPic = 'Chinese';
  } else if (bigBox === "양식") {
    foodPic = "Western";
  } else {
    foodPic = "Korean";
  }
  // const foodPic='Japanese';
  
  // smallBox 배열
  const smallBoxes = [
    { title: "난포",hours: "영업시간", time:"10:00~20:00",phone: "전화번호",num:"010-7788-0099" },
    { title: "난포", hours: "영업시간",time:"10:00~20:00",phone: "전화번호",num:"010-7788-0099" },
    { title: "난포",hours: "영업시간", time:"10:00~20:00",phone: "전화번호",num:"010-7788-0099" },
    { title: "난포", hours: "영업시간", phone: "전화번호" ,time:"10:00~20:00",num:"010-7788-0099" },
    { title: "난포", hours: "영업시간", phone: "전화번호" ,time:"10:00~20:00",num:"010-7788-0099" },
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
            fontSize:"25PX",
            marginLeft:'25px',
            marginTop: '0',
            marginBottom: "30px",
          }}
        >
          신개념 AI 추천 데이트코스 메이커, 성수데이팅
        </p>
        <p style={{ marginRight: "375px", marginBottom: 0, fontWeight: "bolder", fontSize: "40px" }}>
          뭐 먹으러 가지?
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center"}}>
        <div style={{ width: "400px", height: "650px" }}>
          <div
            id="bigBox"
            style={{
              cursor: "pointer",
              width: "330px",
              height: "780px",
              borderRadius: "20px",
              backgroundColor: "rgba(215, 228, 246, 1)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              marginTop:"30PX"
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
              style={{ width: "265px", height: "260px", zIndex: 10, position: "relative", paddingLeft: "50px" }}
            />
            <div style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}>
              <h1>{bigBox}</h1>
              <p style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"20PX",fontWeight:"bolder"}}>서울숲 근처의 BEST{bigBox}맛집 추천</p>
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
                marginTop: "30PX",
                borderRadius: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor:
                  clickedBoxIndex === index
                    ? "rgba(192, 203, 219, 1)" // 클릭된 박스의 색상
                    : hoveredBoxIndex === index
                    ? "rgba(192, 203, 219, 1)" // 호버된 박스의 색상
                    : "rgba(215, 228, 246, 1)", // 기본 색상
                textAlign: "left",
                transition: "background-color 0.07s ease",
              }}
              onMouseEnter={() => setHoveredBoxIndex(index)}
              onMouseLeave={() => setHoveredBoxIndex(null)}
              onClick={() => setClickedBoxIndex(index)} // 클릭 이벤트
            >
              <p style={{ paddingTop: "20px", paddingLeft: "20px", margin:"0",marginBottom:"10PX",fontWeight: "bolder", fontSize: "24px", }}>
                {box.title}
              </p>
              <p style={{ paddingLeft: "20px", margin: 0 ,color:"rgba(0, 0, 0, 0.41)"}}>{box.hours}  {box.time}</p>
              <p style={{ paddingLeft: "20px", margin: 0 ,color:"rgba(0, 0, 0, 0.41)"}}>{box.phone} {box.num}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px" }}>
        <img
          src="../img/nextBtn.png"
          alt="next button"
          style={{ width: "210px", height: "90px", marginLeft: "360px", cursor: "pointer" }}
          onClick={() => navigate("/createDC_cafe")}
        />
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
