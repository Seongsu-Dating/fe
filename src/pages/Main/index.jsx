import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-start w-full max-w-xs bg-white p-5 rounded-2xl overflow-hidden">
        <header className="flex flex-col items-start mb-5 w-full relative">
          <h1 className="text-pink-500 font-bold text-xl mb-1" style={{ color: '#FF7074' }}>데이트코스 생성</h1>
          <p className="text-gray-600 text-xs">신개념 AI추천 데이트코스 메이커, 성수데이팅</p>
          <div className="absolute top-0 right-0">
            <img src="path-to-your-search-icon" alt="Search" />
          </div>
        </header>
        <div className="text-black font-bold mb-3 w-full text-left text-sm">
          어떤 데이트를 하고 싶은지 골라보세요
        </div>
        <div className="flex flex-col w-full p-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-black-500 text-sm font-bold">밥</span>
            <button className="font-bold bg-pink-500 text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px]" style={{ backgroundColor: '#FF7074' }}>
              선택
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black-500 text-sm font-bold">카페</span>
            <button className="font-bold bg-pink-500 text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px]" style={{ backgroundColor: '#FF7074' }}>
              선택
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black-500 text-sm font-bold">팝업</span>
            <button className="font-bold bg-pink-500 text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px]" style={{ backgroundColor: '#FF7074' }}>
              선택
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black-500 text-sm font-bold">문화생활</span>
            <button className="font-bold bg-pink-500 text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px]" style={{ backgroundColor: '#FF7074' }}>
              선택
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black-500 text-sm font-bold">편하게 힐링</span>
            <button className="font-bold bg-pink-500 text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px]" style={{ backgroundColor: '#FF7074' }}>
              선택
            </button>
          </div>
        </div>
        <button
          className="bg-pink-500 text-white font-bold border-none py-2.5 px-14 rounded-full mt-5 self-center text-xs" 
          style={{ backgroundColor: '#FF7074', width: 'auto' }}
          onClick={() => navigate("/")}
        >
          데이트 코스 만들기
        </button>
        <footer className="flex justify-around w-full absolute bottom-5">
          <div className="w-8 h-8">
            <img src="path-to-your-home-icon" alt="Home" className="w-full h-full" />
          </div>
          <div className="w-8 h-8">
            <img src="path-to-your-heart-icon" alt="Heart" className="w-full h-full" />
          </div>
          <div className="w-8 h-8">
            <img src="path-to-your-profile-icon" alt="Profile" className="w-full h-full" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;
