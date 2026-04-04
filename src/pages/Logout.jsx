
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../services/api';

const Logout = () => {
    const navigate = useNavigate();
    const { setState } = useAuth();

    useEffect(() => {
        const performLogout = async () => {
            try {
                await logout(); // Call the logout API
            } catch (error) {
                console.error('Logout error:', error);
            } finally {
                // Clear local storage and context regardless of API success
                localStorage.removeItem('token');
                setState({ user: null });
                navigate('/'); // Redirect to home
            }
        };

        performLogout();
    }, [navigate, setState]);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;