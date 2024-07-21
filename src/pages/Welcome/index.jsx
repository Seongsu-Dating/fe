import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchImage } from "../../constants/Main/path";


const Main = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedSubcategories, setSelectedSubcategories] = useState({});

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(category)) {
        newSelection.delete(category);
      } else {
        newSelection.add(category);
      }
      return newSelection;
    });
  };

  const handleSubcategoryClick = (subcategory, category) => {
    setSelectedSubcategories((prev) => {
      const currentSubcategories = prev[category] || [];
     
      if (currentSubcategories.includes(subcategory)) {
        return {
          ...prev,
          [category]: currentSubcategories.filter((item) => item !== subcategory),
        };
      } else {
        return {
          ...prev,
          [category]: [subcategory], 
        };
      }
    });
  };

  const renderSubcategories = (category) => {
    const subcategories = {
      밥: ["한식", "중식", "일식", "양식"],
      카페: ["디저트", "테마", "커피전문점"],
      문화생활: ["영화", "재즈바", "미술관", "음악회", "전시회"],
      편하게힐링: ["찜질/사우나", "마사지", "호캉스"],
    };

    if (!subcategories[category]) return null;

    return (
      <div className="flex flex-wrap justify-start mb-2 space-x-2">
        {subcategories[category].map((subcategory, index) => (
          <button
            key={index}
            className={`text-xs font-bold py-1 px-2 rounded-full border ${
              (selectedSubcategories[category] || []).includes(subcategory)
                ? "text-[#FF7074] border-[#FF7074]"
                : "text-black-500 border-gray-300"
            }`}
            onClick={() => handleSubcategoryClick(subcategory, category)}
          >
            {subcategory}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xs w-full bg-white p-5 rounded-2xl overflow-hidden relative">
        <header className="flex flex-col items-start mb-5 w-full relative">
          <h1 className="text-pink-500 font-bold text-xl mb-1" style={{ color: "#FF7074" }}>
            데이트코스 생성
          </h1>
          <p className="text-gray-600 text-xs">
            신개념 AI추천 데이트코스 메이커, 성수데이팅
          </p>
          <div className="absolute top-0 right-0">
            <img src={searchImage} alt="Search" /> 
          </div>
        </header>
        <div className="text-black font-bold mb-3 w-full text-left text-sm">
          어떤 데이트를 하고 싶은지 골라보세요
        </div>
        <div className="flex flex-col w-full p-5 bg-white rounded-2xl">
          {["밥", "카페", "팝업", "문화생활", "편하게힐링"].map((category) => (
            <div key={category}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-black-500 text-sm font-bold">{category}</span>
                <button
                  className={`font-bold text-white border-none py-1 px-2 rounded-full text-xs min-w-[80px] ${
                    selectedCategories.has(category) ? "bg-[#DCBFC0]" : "bg-pink-500"
                  }`}
                  style={{ backgroundColor: selectedCategories.has(category) ? "#DCBFC0" : "#FF7074" }}
                  onClick={() => handleCategoryClick(category)}
                >
                  선택
                </button>
              </div>
              {selectedCategories.has(category) && renderSubcategories(category)}
              {(category === "문화생활" || category === "편하게힐링") && (
                <div className="text-xs text-gray-500 mb-2">*복수선택가능</div>
              )}
            </div>
          ))}
        </div>
        <button
          className="bg-pink-500 text-white font-bold border-none py-2.5 px-14 rounded-full mt-5 self-center text-xs block mx-auto"
          style={{ backgroundColor: "#FF7074", marginTop: "2rem", marginBottom: "3rem" }}
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
