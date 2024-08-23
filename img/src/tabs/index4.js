import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Result() {
  // useEffect(() => {
 
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
  //   script.async = true;
  //   script.defer = true;
  //   document.head.appendChild(script);

  //   script.onload = () => {
    
  //     const map = new window.google.maps.Map(document.getElementById('map'), {
  //       center: { lat: 37.5462, lng: 127.0411 }, // 성수동 위치 API
  //       zoom: 12,
  //     });
  //   };
  // }, []);

  return (
    <div className="bg-pink-50 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center relative">
        <button className="absolute left-0 top-0 text-gray-500 hover:text-gray-700">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div id="map" className="w-full h-64 rounded-lg"></div>
        <h1 className="text-2xl font-bold text-pink-800 mt-4">데이트코스 생성 결과</h1>
        <p className="text-gray-700 mt-2">오늘의 데이트코스에 관해</p>
        <p className="text-gray-700 mt-1">
          정말 로맨틱한 데이트가 되겠군요!
          <br />
          캐주얼할 듯 설레는 데이트로 연인의 마음을 움직이는 하루가 되길
          바래요!
        </p>
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-pink-600">
          내 컬렉션에 추가하기
        </button>
        <button className="mt-4 text-gray-500 hover:text-gray-700">
          <svg
            className="h-6 w-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 17l4-4 4 4m0-8l-4 4-4-4"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};


