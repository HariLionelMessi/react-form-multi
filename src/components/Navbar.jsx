import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/Logo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    // const pages = ['Home', "Dashboard", 'Signup', 'Login']
    console.log("From navbar el" + isLoggedIn);


    return (
        <div className="flex justify-between items-center mx-auto w-[90%] max-w-[1100px] p-3">
            <Link to='/'>
                <img src={Logo} alt="Logo" loading="lazy" />
            </Link>
            <nav className="hidden sm:block">
                <ul className="flex items-center space-x-4">
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
            <div className="flex ml-5 mr-3 gap-x-5 items-center">
                {
                    !isLoggedIn &&
                    <NavLink style={{ borderRadius: '10px' }} to={'/Login'} >
                        <button className="px-2 py-1">Login</button>
                    </NavLink>
                }
                {
                    !isLoggedIn &&
                    <NavLink style={{ borderRadius: '10px' }} to={'/Signup'} >
                        <button className="px-2 py-1">Signup</button>
                    </NavLink>
                }
                {
                    isLoggedIn &&
                    <NavLink style={{ borderRadius: '10px' }} to={'/'} >
                        <button className="px-2 py-1" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </NavLink>
                }
                {
                    isLoggedIn &&
                    <NavLink style={{ borderRadius: '10px' }} to={'/Dashboard'} >
                        <button className="px-2 py-1">Dashboard</button>
                    </NavLink>
                }
            </div>





        </div>
    )
}

export default Navbar