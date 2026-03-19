import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import "./AdminDashboard.css";
import Header from "./components/Header.jsx";

const AdminDashboardLayout = () => {

    return (<>
        <Header />
        <div className="admin-dashboard">
            <Sidebar className="sidebar" />
            <main className="content">
                <Outlet />
            </main>
        </div>
    </>
    );

}
export default AdminDashboardLayout;