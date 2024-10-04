import React from "react";
import { useNavigate } from "react-router-dom";
//import { donutImage } from "../../constants/Welcome/path";
import "../App.css";
export default function DateCourseResult(){
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">데이트코스 생성 결과</div>
          <p className="mt-2 text-gray-500">오늘의 데이트코스에 관해</p>
          <p className="mt-2 text-gray-500">세부내용 세부내용 세부내용 ...</p>
          
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex-1 bg-blue-100 p-4 rounded-lg mr-4">
                <div className="text-gray-700 font-bold">할머니의 레시피</div>
                <div className="text-gray-500">서울특별시 성동구 서울숲2길 44-12</div>
                <a href="https://booking.naver.com/" target="_blank" rel="noopener noreferrer" className="text-green-500">네이버 예약</a>
              </div>
            </div>
            <p className="text-gray-500 mt-2">도보 이동 시간은 약 15분입니다.</p>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex-1 bg-green-100 p-4 rounded-lg mr-4">
                <div className="text-gray-700 font-bold">팝업2</div>
                <div className="text-gray-500">서울특별시 성동구 왕십리로 5길 9-10</div>
                <a href="https://booking.naver.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 flex items-center">
                  <span>네이버 예약 </span>
                  <img src="/path-to-your/naver-icon.png" alt="네이버 아이콘" className="ml-2" />
                </a>
              </div>
            </div>
            <p className="text-gray-500 mt-2">총 예상 소요 시간은 2시간입니다.</p>
          </div>

          <div className="mt-4">
            <button className="bg-pink-500 text-white p-4 rounded-lg w-full">내 컬렉션에 추가하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

