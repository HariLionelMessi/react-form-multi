import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import Signup from './pages/Signup.jsx'
import NotFound from './pages/NotFound.jsx'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {
            isLoggedIn &&
            <Route exact path='/Dashboard' element={<Dashboard />} />
          }
          <Route exact path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
