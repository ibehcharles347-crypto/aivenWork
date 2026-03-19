import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useUser();

    if (loading) return (
        <div className="loading-container">
            <div className="loading-card">
                <div className="loading-logo">CharlieFx</div>
                <div className="modern-spinner"></div>
                <div className="loading-text">Preparing your workspace</div>
                <div className="progress-loader">
                    <div className="progress-loader-bar"></div>
                </div>
            </div>
        </div>
    );

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;