import { useEffect, useState } from "react";
import API from "./util/api.js";
import LoginForm from "./components/LoginForm.jsx";
import UsersTable from "./components/UserTable.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import AdminDashboardLayout from "./AdminDashboard.jsx";

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
        <Header />

        <div className="app-routes">
          <Routes>
            <Route path="/admin/*" element={<AdminDashboardLayout />}>
              <Route path="login" element={<LoginForm onUserAdded={fetchUsers} />} />
              <Route path="users" element={<UsersTable users={users} refresh={fetchUsers} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App
