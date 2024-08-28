import { useState } from "react"
import toast from "react-hot-toast";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";



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
            <label>Email Address <sup style={{ color: "red" }}>*</sup></label> <br />
            <input type="email"
                required
                name="email"
                value={formData.email}
                placeholder="Enter email id"
                onChange={handleChange} />
            <br />

            <label>Password <sup style={{ color: "red" }}>*</sup></label> <br />
            <input type={showPassword ? "text" : "password"}
                required
                name="password"
                value={formData.password}
                placeholder="Enter email id"
                onChange={handleChange} />
            <button onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? (<IoIosEye fontSize={'20px'} />) : <IoIosEyeOff fontSize={'20px'} />
                }
            </button>

            <p>
                <button type="submit">Log in</button>
            </p>
        </form>
    )
}

export default LoginForm