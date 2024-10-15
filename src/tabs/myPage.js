import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function MyPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div style={{fontFamily:'arial',marginTop:'0',
      marginLeft: '0',
      marginRight: '0',
      marginBottom: '0',
      padding: '0',
      backgroundColor: 'rgb(255, 206, 234)'}}>
      <img src="../img/back.png"style={{display:'flex',marginBottom:'25px',marginLeft:'20px',height:'50px',cursor:'pointer',paddingTop:'20px'}} className="backBtn" alt="Back Button" />
      <div className="background_white"style={{backgroundColor:'rgba(240,248,255,0.869)',borderTopRightRadius:'40px',borderTopLeftRadius:"40px"}}>


        <div className="header"style={{  display: 'flex',
      alignItems:'center',
  flexDirection: 'column'
 }} >
       <p
              style={{
                margin:'0 auto',
                fontSize:'50px',
                fontWeight:'bolder',
                color: 'rgba(255, 112, 116, 1)',
                paddingLeft:"130px",
                marginTop:"14px"
              }}
            >000님 마이페이지</p>
        </div>
        <main>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
                marginLeft:'270px',
                verticalAlign: "middle",
              }}
            >
              <img
                src="../img/doughnut.png"
                style={{ width: "300px", height: "200px" ,marginLeft:'90px',marginTop:'30px'}}
                alt="Doughnut"
              />
              <div
                style={{
                  width: "450px",
                  height: "180px",
                  marginRight: "230px",
                  marginLeft: "100px",

                  marginBottom:'90px',
                 textAlign:"left",
                }}
              >
                <p style={{fontSize:"25px",color:'rgba(0, 0, 0, 0.8)'}}>7월 7일 예정 데이트 코스</p>
               
                <p style={{fontSize:"24px",color:"rgba(0, 0, 0, 0.6)"}}>
                  연인(친구와)즐거운 데이트를 하셨나요? 로맨틱하고 즐거운
                  경험이 되셨다면 찜하기를 통해 다른 이들에게도 추천해보세요!
                  더 즐거운 경험을 위해서 마이페이지에 데이트 코스를 저장해보세요!
                </p>

              </div>
            </div>

            <p
              style={{
                margin:'0 auto',
                marginLeft:"130px",
                marginTop:"40px",
                fontSize:'50px',
                fontWeight:'bolder',
                color: 'rgba(255, 112, 116, 1)'
              }}
            >
              지난 데이트 코스
            </p>
          </div>

          <div className="savedDC"style={{marginTop:"50px"}}>
            <div className="DC_title_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>
              <div className="DC_t_heart"style={{  display: 'flex'}}>
                <p className="DC_title"style={{  fontSize: '33px',
  color: 'rgb(115, 115, 115)',marginLeft:'155px',
  fontWeight: 'bold'}}>데이트코스명</p>
                <img
                  src="../img/heart.png"
                  className="heart"style={{  height: '60px',
                    width: '60px',
                    marginTop: '6px',
                    marginLeft: '10px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: '17px',
                    borderRadius: '35px',
                    cursor: 'pointer',
                    boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}
                  alt="Heart Icon"
                />
              </div>
              <div className="DC_shareTab"style={{  display: 'flex'}}>
                <p className="sharing_title"style={{  fontSize: '18px',marginLeft:'290px',color: 'rgb(115, 115, 115)',
  fontWeight: 'bold',  fontSize: '28px'}}>공유하기</p>
                <img
                  src="../img/sharing.png"
                  className="sharing"
                style={{  height: '55px',
                  weight: '55px',
                  marginTop: '20px',
                  marginLeft: '0px',
                  cursor: 'pointer'}}
                  alt="Sharing Icon"
                />
              </div>
            </div>

            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'13px'}}>
              <div style={{  backgroundColor: 'rgba(215, 228, 246, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',  cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              
              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder', margin: '0' }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'15px'}}>
              <div style={{  backgroundColor: 'rgba(215, 228, 216, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder', margin: '0' }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>

    
              <div className="DC_shop1"style={{  backgroundColor: 'rgba(1800, 218, 216, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',  cursor: 'pointer'}}>
                <p style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              


              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder',  }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
          </div>


          <div className="savedDC"style={{marginTop:"50px"}}>
            <div className="DC_title_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>
              <div className="DC_t_heart"style={{  display: 'flex'}}>
                <p className="DC_title"style={{  fontSize: '33px',
  color: 'rgb(115, 115, 115)',marginLeft:'155px',
  fontWeight: 'bold'}}>데이트코스명</p>
                <img
                  src="../img/heart.png"
                  className="heart"style={{  height: '60px',
                    width: '60px',
                    marginTop: '6px',
                    marginLeft: '10px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    padding: '17px',
                    borderRadius: '35px',
                    cursor: 'pointer',
                    boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}
                  alt="Heart Icon"
                />
              </div>
              <div className="DC_shareTab"style={{  display: 'flex'}}>
                <p className="sharing_title"style={{  fontSize: '18px',marginLeft:'290px',color: 'rgb(115, 115, 115)',
  fontWeight: 'bold',  fontSize: '28px'}}>공유하기</p>
                <img
                  src="../img/sharing.png"
                  className="sharing"
                style={{  height: '55px',
                  weight: '55px',
                  marginTop: '20px',
                  marginLeft: '0px',
                  cursor: 'pointer'}}
                  alt="Sharing Icon"
                />
              </div>
            </div>

            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'13px'}}>
              <div style={{  backgroundColor: 'rgba(215, 228, 246, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',  cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              
              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder', margin: '0' }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'15px'}}>
              <div style={{  backgroundColor: 'rgba(215, 228, 216, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',cursor: 'pointer'}}>
                <p className="DC_shop_title"style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder', margin: '0' }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
            <div className="DC_shop_bar"style={{  display: 'flex',
  justifyContent: 'space-evenly'}}>

    
              <div className="DC_shop1"style={{  backgroundColor: 'rgba(1800, 218, 216, 1)',
  borderRadius: '20px',
  padding: '0.2% 3%',
  marginTop:'6px',
  paddingLeft:'55px',
  paddingBottom:'20px',
  marginLeft: '150px',  cursor: 'pointer'}}>
                <p style={{fontSize: "30px",
                    color: "rgb(93, 93, 93)",
                    fontWeight: "bold",textAlign:"left"}}>할머니의 레시피</p>
                <p className="DC_shop_address"style={{color:"rgba(0, 0, 0, 0.41)",fontSize:"23px"}}>서울시 중랑구 신내로 7나길 24</p>
              </div>
              


              <div className="DC_Naver_reser" style={{ display: 'flex', alignItems: 'center' }}>
  <p className="naverTitle" style={{ color: 'rgba(48, 156, 62, 1)', fontSize: '35px', fontWeight: 'bolder',  }}>
    네이버 예약 &gt;&gt;
  </p>
  <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
</div>
            </div>
          </div>


        </main>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "80px",marginLeft:'200px',paddingBottom:'80px' }}>
        <img
          src="../img/FootHome.png"
          alt="home button"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/createDC")}
        />
        <img
          src="../img/FootLike.png"
          alt="like button"
          style={{ cursor: "pointer" ,marginLeft:'4%'}}
          onClick={() => navigate("/likedDC")}/>
        
        <img
          src="../img/FootMypage.png"
          alt="mypage button"
          style={{ cursor: "pointer" ,marginLeft:'4%'}}
          onClick={() => navigate("/myPage")}/>

      </div>
      </div>
    </div>
  );
}
