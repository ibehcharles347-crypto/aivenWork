import { useEffect, useState } from "react";
import API from "./util/api.js";
import LoginForm from "./components/LoginForm.jsx";
import UsersTable from "./components/UserTable.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import AdminDashboardLayout from "./AdminDashboard.jsx";
import CharlieFxLanding from "./pages/CharlieFxLanding.jsx";
import HomePage from "./HomePage.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Dashboard from "./Dashboard.jsx";
import UserLogin from "./components/UserLogin.jsx";
import UserRegister from "./components/UserRegister.jsx";
import ProtectedRoute from "./components/Protectedroute.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Router>
        <div className="app-routes">
          <Routes>
            <Route  path="/dashboard" element={<ProtectedRoute>
                  <Dashboard></Dashboard>
            </ProtectedRoute>}>
            </Route>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/" element={<HomePage />}>
              <Route index element={<CharlieFxLanding />} />
              <Route path="home" element={<CharlieFxLanding />} />
              <Route path="contact" element={<Contact />} />
              <Route path="help" element={<Help />} />
              <Route path="*" element={<CharlieFxLanding />} />
            </Route>
            <Route path="/admin" element={<AdminDashboardLayout />}>
              <Route path="login" element={<LoginForm onUserAdded={fetchUsers} />} />
              <Route path="users" element={<UsersTable users={users} refresh={fetchUsers} />} />
              <Route index element={<UsersTable users={users} refresh={fetchUsers} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App
