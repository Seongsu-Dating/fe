const moveToPreviousCategory = ({navigate}) => {
    const index = localStorage.getItem('index')
    navigate(-1)
    localStorage.setItem('index', parseInt(index)-1)
}

export default moveToPreviousCategory