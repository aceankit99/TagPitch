import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />
        
        {/* Route for the home page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
