// inside AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ user: null });
  const [loading, setLoading] = useState(true);

  // Initial check on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setState({ user: { _id: decoded.id, role: decoded.role } });
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
        setState({ user: null });
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ state, setState, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);