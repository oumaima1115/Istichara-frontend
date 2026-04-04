import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Attorneys from './pages/Attorneys';
import Istichara from './pages/Istichara';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import Register from './pages/Register';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';

function App() {
  const { state, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <Router>
      <Routes>
         
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={state.user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/account" element={state.user ? <Account /> : <Navigate to="/login" />} />
        <Route path="/istichara" element={state.user ? <Istichara /> : <Navigate to="/login" />} />

        <Route path="/" element={<Home />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Navigate to="/not-found" />} />
        
      </Routes>
    </Router>
  );
}

export default App;