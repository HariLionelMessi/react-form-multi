import frameImg from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, img, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex justify-center items-center flex-col sm:flex-row mx-auto w-[90%] max-w-[1100px] py-12 gap-y-10 sm:gap-x-28">

            <div className="w-11/12 max-w-[350px] mx-0 ">
                <h1
                    className="text-[1.875rem] font-semibold text-wrap">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="my-5">{desc1}</span>
                    <br />
                    <span className="text-[skyblue] italic">{desc2}</span>
                </p>
                {
                    formtype === "signup"
                        ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />)
                        : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className="flex w-full items-center gap-x-3">
                    <div className="h-[1px] bg-[grey] w-full"></div>
                    <p className="font-medium text-[gray] leading-[1.375rem]">OR</p>
                    <div className="h-[1px] bg-[grey] w-full"></div>
                </div>
                <button className="w-full items-center my-3
                p-2 flex justify-center gap-x-3 rounded-[8px] font-medium
                bg-[#000814] hover:border-[#141923] border border-[#393939] hover:bg-[rgba(0,0,0,0.7)]">  <FcGoogle /> Sign Up with Google</button>
            </div>
            <div className="relative w-11/12 max-w-[450px] self-center md:self-start">
                <img
                    src={frameImg}
                    alt="pic"
                    width={558}
                    height={504}
                    loading="lazy" />

                <img
                    src={img}
                    className="absolute bottom-3 right-3"
                    alt="pic"
                    width={558}
                    height={504}
                    loading="lazy" />
            </div>
        </div>
    )
}

export default Template