import './App.css'
import Home from './pages/home'
import Login from './pages/login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Signup from './pages/signup'
import ForgotPassword from './pages/forgotpassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the home page */}
        <Route path="/home" element={<Home />} />

        {/* Route for the login page */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for the login page */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
