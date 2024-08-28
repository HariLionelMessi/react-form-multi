import { useNavigate } from "react-router-dom"


const NotFound = () => {
    const navigate = useNavigate()
    function clickEvent() {
        navigate('/')
    }
    return (
        <>
            <div>NotFound</div>
            <button onClick={clickEvent}>Go to main page</button>
        </>
    )
}

export default NotFound