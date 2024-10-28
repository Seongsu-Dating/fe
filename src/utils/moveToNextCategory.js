

const moveToNextCategory = ({navigate}) => {
    const index = localStorage.getItem('index');
 
    const category = JSON.parse(localStorage.getItem('category'))
    if (category.length === 0) {
        alert("선택한 장소가 없습니다.");
        return;
      }
    const nextCategory = category[index];
    if (nextCategory === '밥') {
      navigate("/createDC");
      localStorage.setItem('index',parseInt(index)+1);
    } else if (nextCategory === '카페') {
      navigate("/createDC_cafe");
      localStorage.setItem('index',parseInt(index)+1);
    } else if (nextCategory === '팝업') {
      navigate("/createDC_popUp");
      localStorage.setItem('index',parseInt(index)+1);
    } else if (nextCategory === '문화생활') {
      navigate("/createDC_culLife");
      localStorage.setItem('index',parseInt(index)+1);
    }
}

export default moveToNextCategory