import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// 이미지 경로 설정
const searchImage = "/assets/images/search.svg";

const Main = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedSubcategories, setSelectedSubcategories] = useState({});
  const [clickedButtons, setClickedButtons] = useState(new Set());

  // 카테고리 클릭 처리
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

    setClickedButtons((prev) => {
      const newClicked = new Set(prev);
      if (newClicked.has(category)) {
        newClicked.delete(category);
      } else {
        newClicked.add(category);
      }
      return newClicked;
    });
  };

  // 세부 카테고리 클릭 처리
  const handleSubcategoryClick = (subcategory, category) => {
    const isMultipleSelectAllowed = ["문화생활", "편하게힐링"].includes(category);


    setSelectedSubcategories((prev) => {
      const currentSubcategories = prev[category] || [];

      if (!isMultipleSelectAllowed) {
        if (currentSubcategories.includes(subcategory)) {
          return { ...prev, [category]: [] }; // 선택된 카테고리를 제거
        } else {
          return { ...prev, [category]: [subcategory] }; // 선택한 서브 카테고리로 대체
        }
      } else {
        if (currentSubcategories.includes(subcategory)) {
          return { ...prev, [category]: currentSubcategories.filter((item) => item !== subcategory) };
        } else {
          return { ...prev, [category]: [...currentSubcategories, subcategory] };
        }
      }
    });
  };

  // 세부 카테고리 렌더링
  const renderSubcategories = (category) => {
    const subcategories = {
      밥: ["한식", "중식", "일식", "양식"],
      카페: ["디저트", "테마", "커피전문점"],
      문화생활: ["영화", "재즈바", "미술관", "음악회", "전시회"],
      편하게힐링: ["찜질/사우나", "마사지", "호캉스"],
    };

    if (!subcategories[category]) return null;

    return (
      <div style={{ marginBottom: '40px' }}>
        {subcategories[category].map((subcategory, index) => (
          <button
            key={index}
            style={{
              margin: '10px',
              padding: '18px 30px',  // 버튼 크기 증가
              borderRadius: '9999px',
              border: '1px solid #ccc',
              backgroundColor: selectedSubcategories[category]?.includes(subcategory) ? '#ff7074' : '#fff',
              color: selectedSubcategories[category]?.includes(subcategory) ? '#fff' : '#333',
              fontSize: '24px',  // 서브 카테고리 버튼 폰트 크기 크게 설정
              cursor: 'pointer',
            }}
            onClick={() => handleSubcategoryClick(subcategory, category)}
          >
            {subcategory}
          </button>
        ))}
      </div>
    );
  };

  const handleCreateCourse = () => {
    const selectedCategoriesArray = Array.from(selectedCategories);
    if (selectedCategoriesArray.length === 0) {
      alert("선택한 장소가 없습니다.");
      return;
    }

    const firstCategory = selectedCategoriesArray[0];
    if (firstCategory === '밥') {
      navigate(`/createDC/${selectedSubcategories['밥']}`);
    } else if (firstCategory === '카페') {
      navigate("/createDC_cafe");
    } else if (firstCategory === '팝업') {
      navigate("/createDC_popUp");
    } else if (firstCategory === '문화생활') {
      navigate("/createDC_culLife");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',  // 화면을 꽉 채우도록 minHeight 설정
      backgroundColor: '#f0f4f8',
      margin: '0',
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '60px 80px', // padding을 설정해 내부 공간 조정
        boxShadow: 'none',
        textAlign: 'center',
      }}>
        <header style={{ marginBottom: '50px', position: 'relative' }}>
          <h1 style={{ fontSize: '64px', fontWeight: 'bold', color: '#ff7074' }}>데이트코스 생성</h1>
          <p style={{ fontSize: '30px', color: '#6b7280' }}>신개념 AI 추천 데이트코스 메이커, 성수데이팅</p>
          <img src={searchImage} alt="Search" style={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '0',
            right: '0',
            cursor: 'pointer',
          }} />
        </header>
        <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '60px' }}>뭐 먹으러 가지?</div>
        <div>
          {["밥", "카페", "팝업", "문화생활", "편하게힐링"].map((category) => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px',
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#111827',
              }}>
                <span>{category}</span>
                <button
                  style={{
                    fontSize: '24px',
                    padding: '24px 80px',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: clickedButtons.has(category) ? '#DCBFC0' : '#FF7074',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    width: '240px',
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  선택
                </button>
              </div>
              {selectedCategories.has(category) && renderSubcategories(category)}
              {(category === "문화생활" || category === "편하게힐링") && (
                <div style={{ fontSize: '20px', color: '#6b7280', marginTop: '16px', textAlign: 'left' }}>
                  *복수선택가능
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '80px' }}> {/* 데이트코스 생성 버튼 위쪽 간격 조정 */}
          <button
            style={{
              fontSize: '30px',
              padding: '24px 140px',
              backgroundColor: '#ff7074',
              color: '#fff',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={handleCreateCourse}
          >
            데이트 코스 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
