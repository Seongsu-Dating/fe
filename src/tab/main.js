import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

// public/assets/images에서 직접 경로를 설정
const homeImage = "/assets/images/home.svg";
const heartImage = "/assets/images/heart.svg";
const profileImage = "/assets/images/profile.svg";
const searchImage = "/assets/images/search.svg";

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

      if (category === "문화생활" || category === "편하게힐링") {
        const isSelected = currentSubcategories.includes(subcategory);
        if (isSelected) {
          // 이미 선택된 경우 삭제
          return {
            ...prev,
            [category]: currentSubcategories.filter((item) => item !== subcategory),
          };
        } else {
          // 선택되지 않은 경우 추가
          return {
            ...prev,
            [category]: [...currentSubcategories, subcategory],
          };
        }
      } else {
        // 그 외 카테고리는 단일 선택
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
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", marginBottom: "8px", gap: "8px" }}>
        {subcategories[category].map((subcategory, index) => (
          <button
            key={index}
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              padding: "4px 8px",
              borderRadius: "9999px",
              border: `1px solid ${(selectedSubcategories[category] || []).includes(subcategory) ? "#FF7074" : "#E5E7EB"}`,
              color: (selectedSubcategories[category] || []).includes(subcategory) ? "#FF7074" : "#000000",
            }}
            onClick={() => handleSubcategoryClick(subcategory, category)}
          >
            {subcategory}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
      <div style={{ maxWidth: "320px", width: "100%", backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "1.5rem", position: "relative" }}>
        <header style={{ display: "flex", flexDirection: "column", alignItems: "start", marginBottom: "20px", width: "100%", position: "relative" }}>
          <h1 style={{ color: "#FF7074", fontWeight: "bold", fontSize: "24px", marginBottom: "8px" }}>데이트코스 생성</h1>
          <p style={{ color: "#4B5563", fontSize: "12px" }}>신개념 AI추천 데이트코스 메이커, 성수데이팅</p>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            <img src={searchImage} alt="Search" style={{ width: "24px", height: "24px" }} />
          </div>
        </header>
        <div style={{ color: "#000000", fontWeight: "bold", marginBottom: "12px", textAlign: "left", fontSize: "14px" }}>
          어떤 데이트를 하고 싶은지 골라보세요
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "20px", backgroundColor: "#FFFFFF", borderRadius: "1.5rem" }}>
          {["밥", "카페", "팝업", "문화생활", "편하게힐링"].map((category) => (
            <div key={category}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ color: "#000000", fontSize: "14px", fontWeight: "bold" }}>{category}</span>
                <button
                  style={{
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "4px 8px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    minWidth: "80px",
                    backgroundColor: selectedCategories.has(category) ? "#DCBFC0" : "#FF7074",
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  선택
                </button>
              </div>
              {selectedCategories.has(category) && renderSubcategories(category)}
              {(category === "문화생활" || category === "편하게힐링") && (
                <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "8px" }}>*복수선택가능</div>
              )}
            </div>
          ))}
        </div>
        <button
          style={{
            backgroundColor: "#FF7074",
            color: "#FFFFFF",
            fontWeight: "bold",
            border: "none",
            padding: "10px 56px",
            borderRadius: "9999px",
            marginTop: "32px",
            marginBottom: "48px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "12px",
          }}
          onClick={() => navigate("/createDC")}
        >
          데이트 코스 만들기
        </button>
        <footer style={{ display: "flex", justifyContent: "space-between", width: "100%", position: "absolute", bottom: "20px", paddingLeft: "20px", paddingRight: "20px", left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={homeImage} alt="Home" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={heartImage} alt="Heart" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={profileImage} alt="Profile" style={{ width: "100%", height: "100%" }} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;
