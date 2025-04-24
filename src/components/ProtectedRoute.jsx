// import { Navigate } from 'react-router-dom';
import { useAuth } from '../content/AuthContext.jsx';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your custom spinner component
  }

  if (!user || !localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
///


///mene aak saat changes kea hu protected routes or authcontext.jsx me
