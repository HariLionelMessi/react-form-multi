import { Link } from "react-router-dom"
import Logo from '../assets/Logo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    // const pages = ['Home', "Dashboard", 'Signup', 'Login']
    console.log("From navbar el" + isLoggedIn);


    return (
        <div className="flex justify-between mx-auto w-[90%] max-w-[1100px] p-3 bg-slate-500">
            <Link to='/'>
                <img src={Logo} alt="Logo" loading="lazy" />
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - signup - Dashboard - Logout */}
            <div className="flex ml-5 mr-3 gap-3">
                {
                    !isLoggedIn &&
                    <Link to={'/Login'} >
                        <button>Login</button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to={'/Signup'} >
                        <button>Signup</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to={'/'} >
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to={'/Dashboard'} >
                        <button>Dashboard</button>
                    </Link>
                }
            </div>





        </div>
    )
}

export default Navbar