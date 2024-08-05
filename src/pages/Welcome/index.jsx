import React from "react";
import { useNavigate } from "react-router-dom";
import { donutImage } from "../../constants/Welcome/path";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/main");
  };

  return (
    <div className="bg-[#FED8DF] flex flex-col h-screen items-center">
      <div>
        <img src={donutImage} alt="Donuts" className="pop-animation" />
      </div>
      <div className="fixed bottom-[173px]">
        <div className="flex flex-col mb-[10px] text-[#FF7074] font-[700] text-[35px] leading-[42.46px]">
          <span>AI추천</span>
          <span>데이트코스</span>
        </div>
        <div className="mb-[97px] text-[#FF7074] font-[700] text-[54px]">
          성수데이팅
        </div>
        <div className="flex flex-col w-[348px] h-[88px] text-[#FF9494] font-[500] text-[18px] leading-[21.78px]">
          <span>밥 먹고, 카페 가고, 팝업 가고, ...</span>
          <span>데이트코스를 어디서부터 어떻게 짜야할 지</span>
          <span>모르겠다면? AI추천을 활용해서 골라봐!</span>
          <span>신개념 데이트코스 메이커, 성수데이팅</span>
        </div>
      </div>
      <button
        type="button"
        className="fixed bottom-[46px] bg-white w-[348px] h-[67px] rounded-[50px] font-[600] text-[20px]"
        onClick={handleButtonClick}
      >
        데이트코스 생성하기
      </button>
    </div>
  );
};

export default Welcome;