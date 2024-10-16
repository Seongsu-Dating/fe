import React from 'react';
import { useState } from 'react';

const MyDateCourse=({ likedCourses })=>{
 

  return(  
    <div>
    {likedCourses.length > 0 ? (
      likedCourses.map((course, index) => (
     <div className="savedDC" style={{ marginTop: "50px" }}>
    <div
      className="DC_title_bar"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className="DC_t_heart" style={{ display: "flex" }}>
        <p
          className="DC_title"
          style={{
            fontSize: "33px",
            color: "rgb(115, 115, 115)",
            marginLeft: "155px",
            fontWeight: "bold",
          }}
        >
          데이트코스명
        </p>
        <img
          src="../img/heart.png"
          className="heart"
          style={{
            height: "60px",
            width: "60px",
            marginTop: "6px",
            marginLeft: "10px",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "17px",
            borderRadius: "35px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          alt="Heart Icon"
        />
      </div>
      <div className="DC_shareTab" style={{ display: "flex" }}>
        <p
          className="sharing_title"
          style={{
            fontSize: "18px",
            marginLeft: "290px",
            color: "rgb(115, 115, 115)",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          공유하기
        </p>
        <img
          src="../img/sharing.png"
          className="sharing"
          style={{
            height: "55px",
            weight: "55px",
            marginTop: "20px",
            marginLeft: "0px",
            cursor: "pointer",
          }}
          alt="Sharing Icon"
        />
      </div>
    </div>

    <div
      className="DC_shop_bar"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "13px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(215, 228, 246, 1)",
          borderRadius: "20px",
          padding: "0.2% 3%",
          marginTop: "6px",
          paddingLeft: "55px",
          paddingBottom: "20px",
          marginLeft: "150px",
          cursor: "pointer",
        }}
      >
        <p
          className="DC_shop_title"
          style={{
            fontSize: "30px",
            color: "rgb(93, 93, 93)",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          할머니의 레시피
        </p>
        <p
          className="DC_shop_address"
          style={{ color: "rgba(0, 0, 0, 0.41)", fontSize: "23px" }}
        >
          서울시 중랑구 신내로 7나길 24
        </p>
      </div>

      <div
        className="DC_Naver_reser"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          className="naverTitle"
          style={{
            color: "rgba(48, 156, 62, 1)",
            fontSize: "35px",
            fontWeight: "bolder",
            margin: "0",
          }}
        >
          네이버 예약 &gt;&gt;
        </p>
        <img
          src="../img/naver.png"
          className="naverImg"
          alt="Naver Reservation"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
    <div
      className="DC_shop_bar"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "15px",
      }}
    >
  
      
      <div
        style={{
          backgroundColor: "rgba(215, 228, 216, 1)",
          borderRadius: "20px",
          padding: "0.2% 3%",
          marginTop: "6px",
          paddingLeft: "55px",
          paddingBottom: "20px",
          marginLeft: "150px",
          cursor: "pointer",
        }}
      >
        <p
          className="DC_shop_title"
          style={{
            fontSize: "30px",
            color: "rgb(93, 93, 93)",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          할머니의 레시피
        </p>
        <p
          className="DC_shop_address"
          style={{ color: "rgba(0, 0, 0, 0.41)", fontSize: "23px" }}
        >
          서울시 중랑구 신내로 7나길 24
        </p>
      </div>
      <div
        className="DC_Naver_reser"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          className="naverTitle"
          style={{
            color: "rgba(48, 156, 62, 1)",
            fontSize: "35px",
            fontWeight: "bolder",
            margin: "0",
          }}
        >
          네이버 예약 &gt;&gt;
        </p>
        <img
          src="../img/naver.png"
          className="naverImg"
          alt="Naver Reservation"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
    <div
      className="DC_shop_bar"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div
        className="DC_shop1"
        style={{
          backgroundColor: "rgba(1800, 218, 216, 1)",
          borderRadius: "20px",
          padding: "0.2% 3%",
          marginTop: "6px",
          paddingLeft: "55px",
          paddingBottom: "20px",
          marginLeft: "150px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            color: "rgb(93, 93, 93)",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          할머니의 레시피
        </p>
        <p
          className="DC_shop_address"
          style={{ color: "rgba(0, 0, 0, 0.41)", fontSize: "23px" }}
        >
          서울시 중랑구 신내로 7나길 24
        </p>
      </div>

      <div
        className="DC_Naver_reser"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          className="naverTitle"
          style={{
            color: "rgba(48, 156, 62, 1)",
            fontSize: "35px",
            fontWeight: "bolder",
          }}
        >
          네이버 예약 &gt;&gt;
        </p>
        <img
          src="../img/naver.png"
          className="naverImg"
          alt="Naver Reservation"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  </div>
 ))
) : (
  <p style={{fontSize:"50px",fontWeight:"bold",color:"gray",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"120px",marginTop:"400px",paddingBottom:"500px"}}>찜한 데이트 코스가 없습니다.</p>
)}
</div>
);
};  

export default MyDateCourse;