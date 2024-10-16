import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import MyDateCourse from "../components/MyDateCourse";
import { useLocation } from "react-router-dom";
export default function LikedDC() {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const likedCourses = location.state?.likedCourses || []; // 전달받은 likedCourses 배열


  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        padding: 0,
   
        backgroundColor: "rgb(255, 206, 234)",
      }}
    >
      <img
        src="../img/back.png"
        alt="Back Button"
        style={{
          display: "flex",
          marginBottom: "25px",
          marginLeft: "20px",
          height: "50px",
          cursor: "pointer",
          paddingTop: "20px",
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(240, 248, 255, 0.869)",height: "120vh",
          borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: "0 auto",
              fontSize: "50px",
              fontWeight: "bolder",
              color: "rgba(255, 112, 116, 1)",
              paddingLeft: "130px",
              marginTop: "14px",
            }}
          >
            찜한 데이트코스
          </p>
          <p
            style={{
              color: "gray",
              fontWeight: 600,
              paddingLeft: "125px",
              fontSize: "30px",
            }}
          >
            컬렉션 목록(데이트코스 보관함)
          </p>
        </div>
        <main>
          <MyDateCourse likedCourses={likedCourses}/>
        </main>

        <div
          style={{
            display: "fixed",
            justifyContent: "space-evenly",
            marginTop: "80px",
            marginLeft: "200px",
        
          }}
        >
          <img
            src="../img/FootHome.png"
            alt="home button"
            style={{ cursor: "pointer",     }}
            onClick={() => navigate("/createDC")}
          />
          <img
            src="../img/FootLike.png"
            alt="like button"
            style={{ cursor: "pointer", marginLeft: "28%" }}
            onClick={() => navigate("/likedDC")}
          />

          <img
            src="../img/FootMypage.png"
            alt="mypage button"
            style={{ cursor: "pointer", marginLeft: "28%" }}
            onClick={() => navigate("/myPage")}
          />
        </div>
      </div>
    </div>
  );
}
