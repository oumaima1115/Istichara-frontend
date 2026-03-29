import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Lawyers from './pages/Lawyers';
// import Istichara from './pages/Istichara';
// import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import Signin from './pages/SignUp';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/istichara" element={<Istichara />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;