import React, { useEffect } from "react";
import { useUser } from "./components/UserContext.jsx";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

// Icons as simple SVGs
const HomeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ProjectsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const AnalyticsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/><circle cx="12" cy="16" r="5"/><path d="M12 11v5"/></svg>;
const TeamIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const SettingsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;

function Dashboard() {
    const { user, error } = useUser();

    // Format user's initials for avatar (you'll replace with actual firstName/lastName from backend)
    const getInitials = () => {
        if (user?.firstName && user?.lastName) {
            return `${user.firstName[0]}${user.lastName[0]}`;
        }
        return "U";
    };

    // Format full name (you'll replace with actual data from backend)
    const getFullName = () => {
        if (user?.firstName && user?.lastName) {
            return `${user.firstName} ${user.lastName}`;
        }
        return user?.userEmail?.split('@')[0] || "User";
    };

    if (error) {
        return (
            <div className="loading-container">
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#d93025', marginBottom: '1rem' }}>Error</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{error}</p>
                    <button className="start-button" onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>Charlie<span>Fx</span></h2>
                    <p>Trading Dashboard</p>
                </div>

                <nav className="sidebar-nav">
                    <Link to="/dashboard" className="nav-item active">
                        <HomeIcon />
                        <span>Overview</span>
                    </Link>
                    <Link to="/dashboard/projects" className="nav-item">
                        <ProjectsIcon />
                        <span>Projects</span>
                    </Link>
                    <Link to="/dashboard/analytics" className="nav-item">
                        <AnalyticsIcon />
                        <span>Analytics</span>
                    </Link>
                    <Link to="/dashboard/team" className="nav-item">
                        <TeamIcon />
                        <span>Team</span>
                    </Link>
                    <Link to="/dashboard/settings" className="nav-item">
                        <SettingsIcon />
                        <span>Settings</span>
                    </Link>
                </nav>

                <div className="user-profile">
                    <div className="user-avatar">
                        {getInitials()}
                    </div>
                    <div className="user-info">
                        <h4>{getFullName()}</h4>
                        <p>{user.userEmail}</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <h1>Welcome back, {getFullName().split(' ')[0]}! 👋</h1>
                    <p>Here's what's happening with your projects today.</p>
                </div>

                {/* Stats Grid - matches the image */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header">
                            <h3>Total Projects</h3>
                            <span className="stat-badge blue">+12%</span>
                        </div>
                        <p className="stat-number">24</p>
                        <p className="stat-label">active projects</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <h3>Ended Projects</h3>
                            <span className="stat-badge red">-2%</span>
                        </div>
                        <p className="stat-number">10</p>
                        <p className="stat-label">completed</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <h3>Running Projects</h3>
                            <span className="stat-badge green">+5%</span>
                        </div>
                        <p className="stat-number">12</p>
                        <p className="stat-label">in progress</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <h3>Pending Projects</h3>
                            <span className="stat-badge orange">3</span>
                        </div>
                        <p className="stat-number">2</p>
                        <p className="stat-label">awaiting review</p>
                    </div>
                </div>

                {/* Dashboard Grid - matches the image layout */}
                <div className="dashboard-grid">
                    {/* Project Analysis */}
                    <div className="grid-card">
                        <div className="card-header">
                            <h3>Project Analysis</h3>
                            <a href="#" className="action">View all</a>
                        </div>
                        <div className="analysis-item">
                            <span className="label">Completed</span>
                            <span className="value">0</span>
                        </div>
                        <div className="analysis-item">
                            <span className="label">In Progress</span>
                            <span className="value">1</span>
                        </div>
                        <div className="analysis-item">
                            <span className="label">Pending</span>
                            <span className="value">0</span>
                        </div>
                    </div>

                    {/* Reminders */}
                    <div className="grid-card">
                        <div className="card-header">
                            <h3>Reminders</h3>
                            <a href="#" className="action">+ Add</a>
                        </div>
                        <div className="reminder-card">
                            <h4 className="reminder-title">Meeting with Aro Company</h4>
                            <p className="reminder-company">Aro Company</p>
                            <button className="start-button">Start Meeting</button>
                        </div>
                    </div>

                    {/* Team Collaboration */}
                    <div className="grid-card">
                        <div className="card-header">
                            <h3>Team Collaboration</h3>
                            <a href="#" className="action">+ Invite</a>
                        </div>
                        <div className="analysis-item">
                            <span className="label">Completed</span>
                            <span className="value">0</span>
                        </div>
                        <div className="analysis-item">
                            <span className="label">In Progress</span>
                            <span className="value">1</span>
                        </div>
                        <div className="analysis-item">
                            <span className="label">Pending</span>
                            <span className="value">0</span>
                        </div>
                        
                        {/* Team members list */}
                        <ul className="team-list" style={{ marginTop: '1rem' }}>
                            <li className="team-item">
                                <div className="team-avatar">JD</div>
                                <div className="team-info">
                                    <p className="team-name">John Doe</p>
                                    <p className="team-role">Project Lead</p>
                                </div>
                                <span className="team-status">active</span>
                            </li>
                            <li className="team-item">
                                <div className="team-avatar">AS</div>
                                <div className="team-info">
                                    <p className="team-name">Alice Smith</p>
                                    <p className="team-role">Developer</p>
                                </div>
                                <span className="team-status">away</span>
                            </li>
                        </ul>
                    </div>

                    {/* Project Progress */}
                    <div className="grid-card">
                        <div className="card-header">
                            <h3>Project Progress</h3>
                            <span className="stat-badge green">4/5</span>
                        </div>
                        <div className="progress-container">
                            <div className="progress-header">
                                <span className="progress-title">Overall completion</span>
                                <span className="progress-percent">41%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '41%' }}></div>
                            </div>
                            <p className="progress-footer">Completed (4/5 tasks)</p>
                        </div>
                    </div>

                    {/* Time Tracker */}
                    <div className="grid-card">
                        <div className="card-header">
                            <h3>Time Tracker</h3>
                            <a href="#" className="action">details</a>
                        </div>
                        <div className="time-tracker">
                            <div className="timer-display">01:24:08</div>
                            <div className="timer-controls">
                                <button className="timer-btn">▶</button>
                                <button className="timer-btn">⏸</button>
                                <button className="timer-btn">⏹</button>
                            </div>
                        </div>
                    </div>

                    {/* Empty grid space for balance - matches image layout */}
                    <div className="grid-card" style={{ background: 'transparent', boxShadow: 'none' }}>
                        {/* This can be used for additional content */}
                    </div>
                </div>

                {/* Outlet for nested routes */}
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;