import React from "react";
import "../../App.css";

export default function MyPage() {
  return (
    <div style={{fontFamily:'arial',marginTop:'0',
      marginLeft: '0',
      marginRight: '0',
      marginBottom: '0',
      padding: '0',
      backgroundColor: 'rgb(255, 206, 234)'}}>
      <img src="../assets/images/back.png"style={{display:'flex',marginBottom:'25px',marginLeft:'20px',height:'50px',cursor:'pointer',paddingTop:'20px'}} className="backBtn" alt="Back Button" />
      <div className="background_white"style={{backgroundColor:'rgba(240,248,255,0.869',borderTopRightRadius:'40px',borderTopLeftRadius:"40px"}}>


        <div className="header"style={{  display: 'flex',
  flexDirection: 'column'
 }} >
          <h1 className="headline"style={{marginTop:'30px',  color: 'rgba(255, 112, 116, 1)',margin:"20px auto"  
  
}}>000님 마이페이지</h1>
          <h3 className="description" style={{  color: 'gray',
  fontWeight: '600',margin:'0 auto'  }}>컬렉션 목록(데이트코스 보관함) </h3>
        </div>
        <main>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
                marginLeft:'200px',
                verticalAlign: "middle",
              }}
            >
              <img
                src="../assets/images/doughnut.png"
                style={{ width: "300px", height: "200px" }}
                alt="Doughnut"
              />
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  marginRight: "10px",
                  marginLeft: "130px",
                  marginTop: "20px",
                 textAlign:"left",
                }}
              >
                <p>7월 7일 예정 데이트 코스</p>
               
                <p style={{fontSize:"16px"}}>
                  연인(친구와)즐거운 데이트를 하셨나요? 로맨틱하고 즐거운
                  경험이 되셨다면 찜하기를 통해 다른 이들에게도 추천해보세요!
                  더 즐거운 경험을 위해서 마이페이지에 데이트 코스를 저장해보세요!
                </p>

              </div>
            </div>

            <h1
              className="headline"
              style={{
            
                marginTop:'5px',
                marginRight:"30%"  
              }}
            >
              지난 데이트 코스
            </h1>
          </div>

          <div className="savedDC">

            

            <div className="DC_title_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>
              <div className="DC_t_heart"style={{  display: 'flex'}}>
                <p className="DC_title"style={{  fontSize: '18px',
  color: 'rgb(115, 115, 115)',marginLeft:'150px',
  fontWeight: 'bold'}}>데이트코스명</p>
                <img
                  src="../assets/images/heart.png"
                  className="heart"style={{  height: '30px',
                    width: '30px',
                    marginTop: '6px',
                    marginLeft: '10px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: '10px',
                    borderRadius: '20px',
                    cursor: 'pointer'}}
                  alt="Heart Icon"
                />
              </div>
              <div className="DC_shareTab"style={{  display: 'flex'}}>
                <p className="sharing_title"style={{  fontSize: '18px',marginLeft:'110px'
,  color: 'rgb(115, 115, 115)',
  fontWeight: 'bold',  fontSize: '16px'}}>공유하기</p>
                <img
                  src="../assets/images/sharing.png"
                  className="sharing"
                style={{  height: '35px',
                  weight: '35px',
                  marginTop: '7px',
                  marginLeft: '0px',
                  cursor: 'pointer'}}
                  alt="Sharing Icon"
                />
              </div>
            </div>

            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'15px'}}>
              <div className="DC_shop1"style={{  backgroundColor: 'rgba(215, 228, 246, 1)',
  borderRadius: '20px',
  padding: '2% 5%',
  marginLeft: '20px',  cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "20px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address">서울시 중랑구 신내로 7나길 24</p>
              </div>
              
              <div className="DC_Naver_reser">
                <p className="naverTitle"style={{  color: 'rgba(48, 156, 62, 1)',
  fontSize: '20px',
  fontWeight: 'bolder',
  marginTop: '0px'}}>네이버 예약 &gt;&gt;</p>
                <img
                  src="../assets/images/naver.png"
                  className="naverImg"
                  alt="Naver Reservation"
                />
              </div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'15px'}}>
              <div className="DC_shop1"style={{  backgroundColor: 'rgba(215, 228, 216, 1)',
  borderRadius: '20px',
  padding: 
  '2% 5%',
  marginLeft: '20px',  cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "20px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address">서울시 중랑구 신내로 7나길 24</p>
              </div>
              
              <div className="DC_Naver_reser">
                <p className="naverTitle"style={{  color: 'rgba(48, 156, 62, 1)',
  fontSize: '20px',
  fontWeight: 'bolder',
  marginTop: '0px',}}>네이버 예약 &gt;&gt;</p>
                <img
                  src="../assets/images/naver.png"
                  className="naverImg"
                  alt="Naver Reservation"
                />
              </div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>

    
              <div className="DC_shop1"style={{  backgroundColor: 'rgba(1800, 218, 216, 1)',
  borderRadius: '20px',
  padding: 
  '2% 5%',
  marginLeft: '20px',  cursor: 'pointer'}}>
                <p style={{fontSize: "20px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address">서울시 중랑구 신내로 7나길 24</p>
              </div>
              


              <div className="DC_Naver_reser">
                <p className="naverTitle"style={{  color: 'rgba(48, 156, 62, 1)',
  fontSize: '20px',
  fontWeight: 'bolder'}}>네이버 예약 &gt;&gt;</p>
                <img
                  src="../assets/images/naver.png"
                  className="naverImg"
                  alt="Naver Reservation"
                />
              </div>
            </div>
          </div>
        </main>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px",paddingBottom:'80px' }}>
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
