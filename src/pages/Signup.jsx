import Template from "../components/Template"
import signupImg from "../assets/signup.png"

const Signup = ({ setIsLoggedIn, isLoggedIn }) => {
    return (
        <>

            <div>
                <h2>Signup</h2>
                <Template
                    title="Hi there!"
                    desc1='Build skills and earn more'
                    desc2="Education is future-proof"
                    img={signupImg}
                    formtype="signup"
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </>
    )
}

export default Signup