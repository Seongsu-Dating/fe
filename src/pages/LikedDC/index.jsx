import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";



export default function LikedDC() {
    const navigate = useNavigate();

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
        src="../assets/images/back.png"
        alt="Back Button"
        style={{
          display: "flex",
          marginBottom: "25px",
          marginLeft: "20px",
          height: "50px",
          cursor: "pointer",
          paddingTop:'20px'
        }}
        onClick={() => navigate("/")}
      />
      <div
        style={{
          backgroundColor: "rgba(240, 248, 255, 0.869)",
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
          <h1
            style={{
              marginTop: "30px",
              color: "rgba(255, 112, 116, 1)",
              paddingTop:'5px'
            }}
          >
            찜한 데이트코스
          </h1>
          <p
            style={{
              color: "gray",
              fontWeight: 600,
            }}
          >
            컬렉션 목록(데이트코스 보관함)
          </p>
        </div>

        <main>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "darkslategray",
                fontSize: "20px",
                fontWeight: 800,
                backgroundColor: "rgba(239, 242, 213, 0.813)",
                marginTop: "1px",
                padding: "2% 20%",
                borderRadius: "20px",
                cursor: "pointer",
                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              컬렉션 명1
            </p>
            <p
              style={{
                color: "darkslategray",
                fontSize: "20px",
                fontWeight: 800,
                backgroundColor: "rgba(239, 242, 213, 0.813)",
                marginTop: "1px",
                padding: "2% 20%",
                borderRadius: "20px",
                cursor: "pointer",
                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              컬렉션 명2
            </p>
            <p
              style={{
                color: "darkslategray",
                fontSize: "20px",
                fontWeight: 800,
                backgroundColor: "rgba(239, 242, 213, 0.813)",
                marginTop: "1px",
                padding: "2% 20%",
                borderRadius: "20px",
                cursor: "pointer",
                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              컬렉션 명3
            </p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgb(115, 115, 115)",
                    fontWeight: "bold",
                    paddingTop:'35px'
                  }}
                >
                  데이트코스명
                </p>
                <img
                  src="../assets/images/heart.png"
                  alt="Heart Icon"
                  style={{
                    height: "30px",
                    marginTop: "34px",
                    marginLeft: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    padding: "10px",
                    paddingTop:'15px',
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    color: "rgb(115, 115, 115)",
                    fontWeight: "bold",
                    paddingTop:'35px'
                  }}
                >
                  공유하기
                </p>
                <img
                  src="../assets/images/sharing.png"
                  alt="Sharing Icon"
                  style={{
                    height: "35px",
                    marginTop: "13px",
                    marginLeft: "10px",
                    cursor: "pointer",
                     paddingTop:'35px'
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(215, 228, 246, 1)",
                  borderRadius: "20px",
                  padding: "14px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",
                  }}
                >
                  할머니의 레시피
                </p>
                <p>서울시 중랑구 신내로 7나길 24</p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "rgba(48, 156, 62, 1)",
                    fontSize: "20px",
                    fontWeight: "bolder",
                    marginTop: "35px",
                  }}
                >
                  네이버 예약 &gt;&gt;
                </p>
                <img
                  src="../assets/images/naver.png"
                  alt="Naver Reservation"
                  style={{
                    height: "100px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(222, 210, 242, 1)",
                  borderRadius: "20px",
                  padding: "14px",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",
                  }}
                >
                  할머니의 레시피
                </p>
                <p>서울시 중랑구 신내로 7나길 24</p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "rgba(48, 156, 62, 1)",
                    fontSize: "20px",
                    fontWeight: "bolder",
                    marginTop: "35px",
                  }}
                >
                  네이버 예약 &gt;&gt;
                </p>
                <img
                  src="../assets/images/naver.png"
                  alt="Naver Reservation"
                  style={{
                    height: "100px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        </main>

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
          style={{ marginLeft: "20%", cursor: "pointer" }}
          onClick={() => (window.location.href = "likedDC.html")}
        />
        <img
          src="../assets/images/FootMypage.png"
          alt="mypage button"
          style={{ marginLeft: "20%", cursor: "pointer" }}
          onClick={() => (window.location.href = "myPage.html")}
        />
      </div>
      </div>
    </div>
  );
}
