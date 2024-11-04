import checkIsLastPage from "../utils/checkIsLastPage"
import moveToNextCategory from "../utils/moveToNextCategory"
import moveToPreviousCategory from "../utils/moveToPreviousCategory"

const BottomButtom = ({navigate}) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px" }}>
        <img
            src="../img/backBtn.png"
            alt="back button"
            style={{ width: "210px", height: "90px", cursor: "pointer"}}
            onClick={() =>  moveToPreviousCategory({navigate})}
        />
        {!!checkIsLastPage() ? (
            <button
                alt="next button"
                style={{ width: "210px", height: "90px", marginLeft: "200px", cursor: "pointer" ,border:"none",backgroundColor:'rgba(255, 112, 116, 1)',color:"rgba(255, 255, 255, 1)",fontSize:'24px',fontWeight:"550",borderRadius:"50px"}}
                onClick={() => navigate("/course_result1")}
            >
                생성 결과 보기
            </button>
        )
        :
        (
            <img
                src="../img/nextBtn.png"
                alt="next button"
                style={{ width: "210px", height: "90px",marginLeft:"150PX",cursor: "pointer" }}
                onClick={() => moveToNextCategory({
                    navigate,
                })}
            />
        )}
        </div>
    )
}

export default BottomButtom