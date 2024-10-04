/* eslint-disable jsx-a11y/alt-text */
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
          }}>
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
          <div>

         
            <div
              style={{
              display: "flex",
              //justifyContent: "",
              flexDirection:"column",
            
              marginTop: "10px",
              //verticalAlign: "middle",
              width:"auto",
              height:"650px",
              border:"1px #F7F7F7",
              marginLeft:'440px',
              marginRight:'280px',
              borderRadius:'40px',
              boxShadow:'1px 4px 4px #00000040',
              paddingLeft:"40px"
      
             }}
            >
             <p
              style={{
              margin:'0 auto',
              fontSize:'50px',
              fontWeight:'bolder',
              color: 'rgba(255, 112, 116, 1)',
             // paddingLeft:"40px",
              marginTop:"50px",
              marginLeft:"60px"
             }}
              >데이트코스명 설정</p>
              <p
              style={{
              margin:'0 auto',
              fontSize:'25px',
              fontWeight:'bolder',
              color: 'rgba(255, 112, 116, 1)',
            // paddingLeft:"40px",
              marginTop:"50px",
              marginLeft:"60px"
             }}
              >원하는 데이트 코스명 입력</p> 
              <form>
                <input type='text' placeholder="예시: 7월 셋째주 데이트 " style={{width:"67%",height:"90px",marginTop:"50px", border:"1px solid #FF9B9B", borderRadius:'50px',boxShadow:'1px 4px 4px #00000040',fontSize:'23px',paddingLeft:'50px'}}></input>
                <br></br>
                <input type='image' src='../img/savaBtn.png' alt="save button" name="saveBtn" 
                 style={{ width: "25%", height: "90px", marginLeft: "45%", marginTop:"170px",cursor: "pointer" }}></input>
              </form>
        
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
