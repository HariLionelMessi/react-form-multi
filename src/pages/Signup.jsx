import Template from "../components/Template"
import signupImg from "../assets/signup.png"

const Signup = ({ setIsLoggedIn, isLoggedIn }) => {
    return (
        <>

            <div>
                <Template
                    title="Join the millions learning to code with StudyNotion for free"
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