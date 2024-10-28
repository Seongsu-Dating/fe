const checkIsLastPage = () => {
  const index = parseInt(localStorage.getItem('index'));
  const category = JSON.parse(localStorage.getItem('category')); 
  
  if (index === category.length) return true
  else return false
}

export default checkIsLastPage