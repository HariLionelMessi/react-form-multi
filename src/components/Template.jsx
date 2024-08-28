import frameImg from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"

const Template = ({ title, desc1, desc2, img, formtype, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formtype === "signup"
                        ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />)
                        : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div>
                    <div>-----</div>
                    <p>OR</p>
                    <div>-----</div>
                </div>
                <button>Sign in with Google</button>
            </div>
            <div>
                <img
                    src={frameImg}
                    alt="pic"
                    width={558}
                    height={504}
                    loading="lazy" />

                <img
                    src={img}
                    alt="pic"
                    width={558}
                    height={504}
                    loading="lazy" />
            </div>
        </div>
    )
}

export default Template