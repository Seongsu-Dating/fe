import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function MyPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div style={
      {fontFamily:'arial',marginTop:'0',
      marginLeft: '0',
      marginRight: '0',
      marginBottom: '0',
      padding: '0',
      backgroundColor: 'rgb(255, 206, 234)'}}>
      <img src="../img/back.png"style={{display:'flex',marginBottom:'25px',marginLeft:'20px',height:'50px',cursor:'pointer',paddingTop:'20px'}} className="backBtn" alt="Back Button" />
      <div className="background_white"style={{backgroundColor:'rgba(240,248,255,0.869',borderTopRightRadius:'40px',borderTopLeftRadius:"40px"}}>


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
            paddingLeft:"110px",
            marginTop:"14px"
            }}
          >데이트코스 생성 결과</p>
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
              {/* <img
                src="../img/doughnut.png"
                style={{ width: "300px", height: "200px" ,marginLeft:'90px',marginTop:'30px'}}
                alt="Doughnut"
              /> */}
              <div
                style={{
                  width: "600px",
                  height: "auto",
                  marginRight: "180px",
                 // marginLeft: "100px",
                  marginBottom:'40px',
                  textAlign:"left",
                }}
              >
                <p style={{fontSize:"25px",color:'rgba(0, 0, 0, 0.8)'}}>오늘의 데이트스코스에 관해</p>
                <p style={{fontSize:"24px",color:"rgba(0, 0, 0, 0.6)"}}>
                  세부내용세부내용세부내용세부내용세부내용세부내용 
                  세부내용세부내용세부내용세부내용세부내용세부내용 
                  세부내용세부내용세부내용세부내용세부내용세부내용
                  세부내용세부내용세부내용세부내용세부내용세부내용 
                  세부내용세부내용세부내용세부내용세부내용세부내용 
                  세부내용세부내용세부내용세부내용세부내용세부내용 
                </p>
              </div> 
             
            </div>

          </div>

          <div className="selectDC"style={{marginTop:"10px"}}>
            <div className="DC_title_bar"style={{  display: 'flex'}}>
                <p className="DC_title"style={{  fontSize: '33px',
                  color: 'rgb(115, 115, 115)',marginLeft:'25%',
                  fontWeight: 'bold'}}>데이트코스
                </p>
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
                네이버 예약 &gt;&gt;</p>
                <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
              </div>
            </div>

            <div className="total_hour_bar"style={{  display: 'flex'}}>
                <p className="total_hour"style={{  fontSize: '33px',
                  color: '#FF7074',marginLeft:'25%',
                  fontWeight: 'bold'}}> => 도보 이동 시간은  약 15분입니다.
                </p>
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
                네이버 예약 &gt;&gt;</p>
                <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
              </div>
            </div>


            <div className="total_hour_bar"style={{  display: 'flex'}}>
                <p className="total_hour"style={{  fontSize: '33px',
                  color: '#FF7074',marginLeft:'25%',
                  fontWeight: 'bold'}}> => 도보 이동 시간은  약 15분입니다.
                </p>
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
                네이버 예약 &gt;&gt;</p>
                <img src="../img/naver.png" className="naverImg" alt="Naver Reservation" style={{ marginLeft: '10px' }} />
              </div>
            </div>

          
            <div className="total_hour_bar"style={{  display: 'flex'}}>
                <p className="total_hour"style={{  fontSize: '33px',
                  color: '#FF7074',marginLeft:'25%',
                  fontWeight: 'bold'}}> => 총예상 시간은 2시간입니다.
                </p>
            </div>
          </div>


          

        </main>
        <div style={{ display: "flex", justifyContent: "space-evenly",alignItems:"center", marginTop: "80px",marginLeft:'200px',paddingBottom:'80px' }}>
          <img
            src="../img/sharing.png"
            alt="sharing button"
            style={{ cursor: "pointer" }}
            width="70px"
            height="70px"
            // onClick={() => navigate("/createDC")}
           />
        
          <img
            src="../img/namingBtn.png"
            alt="naming button"
            style={{ cursor: "pointer"}}
            onClick={() => navigate("/course_result3")}
            width="400px"
            height="90px"
          />
        </div>
      </div>
    </div>
  );
}