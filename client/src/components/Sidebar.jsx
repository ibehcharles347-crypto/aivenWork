import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  UserPlus, 
  Users, 
  Menu, 
  ChevronLeft,
  LogOut,
  Settings
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? "open" : "collapsed"}`} 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
      </button>
      
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className={`sidebar d-flex flex-column ${isOpen ? "open" : "collapsed"}`}
      >
        <div className="sidebar-header">
          <Navbar.Brand as={NavLink} to="/admin/login" className="fw-bold brand">
            <LayoutDashboard className="brand-icon" size={24} />
            <span className="brand-text">Admin Dashboard</span>
          </Navbar.Brand>
        </div>

        <div className="sidebar-content">
          <Nav className="flex-column w-100">
            <div className="nav-section">
              <h6 className="nav-section-title">MAIN MENU</h6>
              <Nav.Link
                as={NavLink}
                to="/admin/login"
                className={`nav-link-custom ${getActiveClass("/admin/login")}`}
              >
                <UserPlus className="nav-icon" size={25} />
                <span className="nav-text">Login</span>
                {getActiveClass("/admin/login") && <span className="active-indicator" />}
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/admin/users"
                className={`nav-link-custom ${getActiveClass("/admin/users")}`}
              >
                <Users className="nav-icon" size={25} />
                <span className="nav-text">Manage Users</span>
                {getActiveClass("/admin/users") && <span className="active-indicator" />}
              </Nav.Link>
            </div>

            <div className="nav-section mt-4">
              <h6 className="nav-section-title">SETTINGS</h6>
              <Nav.Link
                as={NavLink}
                to="/admin/settings"
                className={`nav-link-custom ${getActiveClass("/admin/settings")}`}
              >
                <Settings className="nav-icon" size={20} />
                <span className="nav-text">Settings</span>
                {getActiveClass("/admin/settings") && <span className="active-indicator" />}
              </Nav.Link>
            </div>
          </Nav>
        </div>

        <div className="sidebar-footer">
          <Nav.Link as={NavLink} to="/logout" className="nav-link-custom logout-link">
            <LogOut className="nav-icon" size={20} />
            <span className="nav-text">Logout</span>
          </Nav.Link>
          
          <div className="user-info">
            <div className="user-avatar">C</div>
            <div className="user-details">
              <span className="user-name">Charles Ibeh</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Sidebar;