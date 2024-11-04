import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

export default function Result1() {
  const handleNavigation = () => {
    navigate('/course_result2', { state: { descriptions } }); // Pass descriptions here
  };

  const navigate = useNavigate();
  const [descriptions, setDescriptions] = useState(''); // descriptions 상태 추가

  useEffect(() => {
    const storedCoordinates = JSON.parse(localStorage.getItem('coordinates')) || {};

    const waypoints = Object.values(storedCoordinates).map(coord => ({
      lat: coord.latitude,
      lng: coord.longitude
    }));

    const initTmap = () => {
      const map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.544148, 127.056935),
        width: '800px',
        height: '450px',
        zoomControl: true,
        scrollwheel: true,
      });

      new window.Tmapv2.Marker({
        position: new window.Tmapv2.LatLng(37.544148, 127.056935),
        icon: '/pin_r_m_s.png',
        iconSize: new window.Tmapv2.Size(24, 38),
        map,
      });

      waypoints.forEach((point, index) => {
        new window.Tmapv2.Marker({
          position: new window.Tmapv2.LatLng(point.lat, point.lng),
          icon: `/pin_b_m_${index + 1}.png`,
          iconSize: new window.Tmapv2.Size(24, 38),
          map,
        });
      });

      const passList = waypoints.map((point) => `${point.lng},${point.lat}`).join('_');

      $.ajax({
        method: 'POST',
        headers: { appKey: '1Vzhyu5cih7oQ2Tk38YcpbCbC5Sbqcd83xyCHXQ9' },
        url: 'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json',
        data: {
          startX: '127.056935',
          startY: '37.544148',
          endX: '127.056935',
          endY: '37.544148',
          reqCoordType: 'WGS84GEO',
          resCoordType: 'EPSG3857',
          startName: '출발지',
          endName: '도착지',
          passList,
        },
        success: (response) => {
          const resultData = response.features;
          const tDistance = `총 거리 : ${(resultData[0].properties.totalDistance / 1000).toFixed(1)}km,`;
          const tTime = ` 총 시간 : ${(resultData[0].properties.totalTime / 60).toFixed(0)}분`;
          $('#result').text(tDistance + tTime);

          // 짝수 번째 description 속성만 수집하여 이어 붙입니다.
          const filteredDescriptions = resultData
            .filter((_, index) => index % 2 === 0) // 짝수 인덱스 필터링
            .map(data => data.properties.description)
            .filter(desc => desc)
            .join(' ');

          // 상태를 업데이트합니다.
          setDescriptions(filteredDescriptions);

          const drawInfoArr = [];
          resultData.forEach((data) => {
            if (data.geometry.type === 'LineString') {
              data.geometry.coordinates.forEach((coord) => {
                const latlng = new window.Tmapv2.Point(coord[0], coord[1]);
                const convertPoint = new window.Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
                drawInfoArr.push(new window.Tmapv2.LatLng(convertPoint._lat, convertPoint._lng));
              });
            }
          });

          drawLine(drawInfoArr, map);
        },
        error: (request, status, error) => {
          console.log(`code: ${request.status}\nmessage: ${request.responseText}\nerror: ${error}`);
        },
      });
    };

    const drawLine = (arrPoint, map) => {
      new window.Tmapv2.Polyline({
        path: arrPoint,
        strokeColor: '#DD0000',
        strokeWeight: 6,
        map,
      });
    };

    initTmap();
  }, []);

  return (
    <div style={{
      fontFamily: 'arial',
      margin: '0',
      padding: '0',
      backgroundColor: 'rgb(255, 206, 234)'
    }}>
      <img
        src="../img/back.png"
        style={{
          display: 'flex',
          marginBottom: '25px',
          marginLeft: '20px',
          height: '50px',
          cursor: 'pointer',
          paddingTop: '20px'
        }}
        className="backBtn"
        alt="Back Button"
        onClick={() => navigate(-1)}
      />
      <div className="map_wrap3" style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '450px' }}>
        <div id="map_div" style={{ width: '800px', height: '100%' }}></div>
      </div>
      <p id="result" style={{ textAlign: 'center' }}></p>
      <div className="background_white" style={{ backgroundColor: 'rgba(240,248,255,0.869)', borderTopRightRadius: '40px', borderTopLeftRadius: "40px" }}>
        <div className="header" style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <p style={{
            margin: '0 auto',
            fontSize: '50px',
            fontWeight: 'bolder',
            color: 'rgba(255, 112, 116, 1)',
            paddingLeft: "110px",
            marginTop: "14px"
          }}>데이트코스 생성 결과</p>
        </div>
        <main>
          <div>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
              marginLeft: '270px',
              verticalAlign: "middle",
            }}>
              <div style={{
                width: "600px",
                height: "auto",
                marginRight: "180px",
                marginBottom: '40px',
                textAlign: "left",
              }}>
                <p style={{ fontSize: "25px", color: 'rgba(0, 0, 0, 0.8)' }}>오늘의 데이트스코스에 관해💕😊</p>
                <p style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.6)" }}>
                  {descriptions} {/* descriptions 변수를 사용하여 표시 */}! 다음으로 경로 안내 추천드립니다😉 이상 즐거운 데이트 되세요.💕😊
                </p>
              </div>
            </div>
          </div>
        </main>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "80px", marginLeft: '200px', paddingBottom: '80px' }}>
          <img
            src="../img/sharing.png"
            alt="sharing button"
            style={{ cursor: "pointer" }}
            width="70px"
            height="70px"
          />
          <img
            src="../img/course_btn.png"
            alt="course button"
            style={{ cursor: "pointer" }}
            onClick={handleNavigation}
            width="400px"
            height="90px"
          />
        </div>
      </div>
    </div>
  );
}
