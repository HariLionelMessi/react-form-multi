import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import Signup from './pages/Signup.jsx'
import NotFound from './pages/NotFound.jsx'
import { useState } from 'react'
import PrivateRouter from './components/PrivateRouter.jsx'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div className='overflow-x-hidden min-h-[100vh] bg-[#000814] text-white'>
        <Router>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            {/* {
              isLoggedIn &&
              <Route exact path='/Dashboard' element={<Dashboard />} />
            } */}
            {/* <PrivateRouter isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRouter> */}
            <Route
              exact path="/Dashboard"
              element={
                <PrivateRouter isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </PrivateRouter>
              }
            />
            <Route exact path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
