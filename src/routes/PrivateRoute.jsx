import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * PrivateRoute - Protège une route
 * @param {requiredRole} 'ADMIN' | 'USER' | undefined
 */
const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  // Pas connecté → redirige vers login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Rôle ADMIN requis mais l'user n'est pas admin
  if (requiredRole === 'ADMIN' && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;