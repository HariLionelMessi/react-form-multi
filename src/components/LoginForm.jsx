import { useState } from "react"
import toast from "react-hot-toast";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";



const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()
    console.log("I am from loginform component");


    const [showPassword, setShowPassword] = useState(false)
    const [formData, submitFormData] = useState({
        email: "",
        password: ""
    })

    function handleFormSubmit(e) {
        e.preventDefault()
    }

    function handleSubmitBtn() {
        if (formData.email && formData.password.length !== 0) {
            navigate('/Dashboard')
            setIsLoggedIn(true)
            toast.success("Successfully logged in")

        } else if (!formData.email) {
            toast.error('Enter valie email')
        } else {
            toast.error(`Don't leave password empty`)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        submitFormData((previous) => {
            return ({
                ...previous,
                [name]: value
            })
        })
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <p className="my-1">Email Address <sup style={{ color: "red" }}>*</sup></p>
            <input
                className="bg-[#161d29] w-full p-2 rounded-[8px]"
                style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                type="email"
                required
                name="email"
                value={formData.email}
                placeholder="Enter email id"
                onChange={handleChange} />

            <p className="my-1">Password <sup style={{ color: "red" }}>*</sup></p>
            <div className="relative">
                <input type={showPassword ? "text" : "password"}
                    required
                    style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                    className="bg-[#161d29] w-full p-2 rounded-[8px]"
                    name="password"
                    value={formData.password}
                    placeholder="Enter email id"
                    onChange={handleChange} />
                <span className="absolute right-2 cursor-pointer bottom-2 text-[gray]" onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? (<IoIosEye fontSize={'20px'} />) : <IoIosEyeOff fontSize={'20px'} />
                    }
                </span>
            </div>
            <Link to='#'>
                <p className="text-right text-xs mt-1 text-[skyblue]">Forgot password?</p>
            </Link>

            <p>
                <button className="w-full items-center my-3
                p-2 flex justify-center gap-x-3 rounded-[8px] text-black font-medium
                bg-[#FFD60A]" onClick={handleSubmitBtn}>Log in</button>
            </p>
        </form>
    )
}

export default LoginForm