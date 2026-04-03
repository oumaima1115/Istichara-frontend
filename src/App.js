import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Attorneys from './pages/Attorneys';
import Istichara from './pages/Istichara';
import Profile from './pages/Profile';
import Connexion from './pages/Connexion';
import Logout from './pages/Logout';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Routes>
         
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />

        <Route path="/" element={<Home />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/istichara" element={<Istichara />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="/logout" element={<Logout />} />
        
      </Routes>
    </Router>
  );
}

export default App;