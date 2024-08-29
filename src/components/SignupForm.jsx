import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
// useNavigate

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmpassword: false
    });
    const [validationMessages, setValidationMessages] = useState([]);

    const initialData = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        gender: '',
        receiveEmail: false
    };
    const [formData, setFormData] = useState(initialData);

    const changeHandler = (e) => {
        const { type, name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validateForm = () => {
        const { password, confirmpassword } = formData;
        const passwordMessages = validatePassword(password);

        let messages = [...passwordMessages];

        // Check if passwords match
        if (password !== confirmpassword) {
            messages.push('Passwords do not match.');
        }

        return messages;
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasNumber = /[0-9]/;
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/;

        const messages = [];

        if (password.length < minLength) {
            messages.push('Password must be at least 8 characters long.');
        }
        if (!hasUpperCase.test(password)) {
            messages.push('Password must contain at least one uppercase letter.');
        }
        if (!hasLowerCase.test(password)) {
            messages.push('Password must contain at least one lowercase letter.');
        }
        if (!hasNumber.test(password)) {
            messages.push('Password must contain at least one number.');
        }
        if (!hasSpecialChar.test(password)) {
            messages.push('Password must contain at least one special character.');
        }

        return messages;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const messages = validateForm();

        if (messages.length === 0) {
            // Clear form data and show success message
            setFormData(initialData);
            setIsLoggedIn(true)
            toast.success('Account created successfully!');
            navigate('/Dashboard')
        } else {
            toast.error('Not valid passwords. Check your password')
        }
        // Store validation messages in state for display
        setValidationMessages(messages);
    };

    const [accType, setAccType] = useState("Student")

    return (
        <div>
            <div className="my-5 w-[max-content] flex gap-x-2 bg-[#161d29] py-1 px-3 rounded-full">
                <button onClick={() => setAccType("Student")} style={{ padding: '10px 20px', borderRadius: '40px' }} className={
                    accType === "Student"
                        ? "bg-[#000814] text-white"
                        : "bg-transparent text-[gray]"
                }>Student</button>
                <button style={{ padding: '10px 20px', borderRadius: '40px' }} className={
                    accType === "Instructor"
                        ? "bg-[#000814] text-white"
                        : "bg-transparent text-[gray]"
                } onClick={() => setAccType("Instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex gap-x-2">
                    <label>
                        <p className="my-1">First Name</p>
                        <input
                            type="text"
                            style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                            className="bg-[#161d29] w-full p-2 rounded-[8px]"
                            required
                            name='firstname'
                            onChange={changeHandler}
                            value={formData.firstname}
                            placeholder="Enter first name"
                        />
                    </label>

                    <label>
                        <p className="my-1">Last Name</p>
                        <input
                            type="text"
                            style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                            className="bg-[#161d29] w-full p-2 rounded-[8px]"
                            required
                            name='lastname'
                            onChange={changeHandler}
                            value={formData.lastname}
                            placeholder="Enter last name"
                        />
                    </label>
                </div>


                <p>
                    <p className="my-1">Gender</p>
                    <input type="radio" name="gender" checked={formData.gender === "Male"} onChange={changeHandler} value="Male" />
                    <label htmlFor="male">Male</label>
                    <p>
                        <input type="radio" name="gender" checked={formData.gender === "Female"} onChange={changeHandler} value="Female" />
                        <label htmlFor="gender">Female</label>
                    </p>
                    <p>
                        <input type="radio" name="gender" checked={formData.gender === "Not to say"} onChange={changeHandler} value="Not to say" />
                        <label htmlFor="gender">Not to say</label>
                    </p>
                </p>

                <label>
                    <p className="my-1">Email</p>
                    <input
                        type="email"
                        style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                        className="bg-[#161d29] w-full p-2 rounded-[8px]"
                        required
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Enter Email"
                    />
                </label>

                <p className="my-1">
                    <input type="checkbox" name="receiveEmail" checked={formData.receiveEmail} onChange={changeHandler} />
                    Wanna Receive Emails ?
                </p>

                <div className="flex gap-x-2">
                    <label>
                        <p className="my-1">Password</p>
                        <div className="relative">
                            <input
                                style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                                type={showPassword.password ? "text" : "password"}
                                required
                                className="bg-[#161d29] w-full p-2 rounded-[8px]"
                                name='password'
                                onChange={changeHandler}
                                value={formData.password}
                                placeholder="Enter password"
                            />
                            <button
                                className="absolute right-2 cursor-pointer bottom-2 text-[gray]"
                                type="button"
                                onClick={() => setShowPassword(prev => ({
                                    ...prev,
                                    password: !showPassword.password
                                }))}
                            >
                                {showPassword.password ? <IoIosEye fontSize={'20px'} /> : <IoIosEyeOff fontSize={'20px'} />}
                            </button>
                            <div>
                                {validationMessages.filter(msg => msg.includes('Password')).map((msg, index) => (
                                    <p key={index} style={{ color: 'red' }}>{msg}</p>
                                ))}
                            </div>
                        </div>
                    </label>

                    <label>
                        <p className="my-1">Confirm Password</p>
                        <div className="relative">
                            <input
                                type={showPassword.confirmpassword ? "text" : "password"}
                                style={{ boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset" }}
                                required
                                className="bg-[#161d29] w-full p-2 rounded-[8px]"
                                name='confirmpassword'
                                onChange={changeHandler}
                                value={formData.confirmpassword}
                                placeholder="Confirm password"
                            />
                            <span
                                className="cursor-pointer absolute bottom-2 right-2 text-[gray]"
                                onClick={() => setShowPassword(prev => ({
                                    ...prev,
                                    confirmpassword: !showPassword.confirmpassword
                                }))}
                            >
                                {showPassword.confirmpassword ? <IoIosEye fontSize={'20px'} /> : <IoIosEyeOff fontSize={'20px'} />}
                            </span>
                        </div>
                        <div>
                            {validationMessages.includes('Passwords do not match.') && (
                                <p style={{ color: 'red' }}>Passwords do not match.</p>
                            )}
                        </div>
                    </label>
                </div>


                <button className="w-full items-center my-3
                p-2 flex justify-center gap-x-3 rounded-[8px] text-black font-medium
                bg-[#FFD60A]" type="submit">Create Account</button>
            </form>

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default SignupForm;





