// import LoginForm from "../components/LoginForm"
import Template from "../components/Template"
import loginImg from "../assets/login.png"
const Login = ({ setIsLoggedIn }) => {
    return (
        <div>
            <h2>Login</h2>
            <Template
                title="Welcome Back"
                desc1='Build skills and earn more'
                desc2="Education is future-proof"
                img={loginImg}
                formtype="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login