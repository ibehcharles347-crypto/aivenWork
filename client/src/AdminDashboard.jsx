import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import "./AdminDashboard.css";

const AdminDashboardLayout = () => {

    return (
        <div className="admin-dashboard">
            <Sidebar className="sidebar" />
            <main className="content">
                <Outlet />
            </main>

        </div>
    );

}
export default AdminDashboardLayout;