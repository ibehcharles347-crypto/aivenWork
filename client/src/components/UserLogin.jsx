import React, { useState } from "react";
import API from "../util/api.js";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import { useUser } from "./UserContext.jsx";

function UserLogin() {
    const {fetchUser} = useUser()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/api/login", formData);

            localStorage.setItem("token", response.data.token);

            await fetchUser();
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return (
        <div className="gmail-login-container">
            <div className="gmail-login-card ">
                <div className="gmail-header">
                    <div className="gmail-logo">
                        <span>C</span>
                    </div>
                    <h1>Welcome back</h1>
                    <p>
                        Not you? <a href="/">Use another account</a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="gmail-form">

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="floating-input"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email" className="floating-label">
                            Email or phone
                        </label>
                    </div>

                    <div className="input-group">
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="floating-input"
                                placeholder=" "
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password" className="floating-label">
                                Password
                            </label>
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex="-1"
                            >
                                {showPassword ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <a href="/forgot-password" className="forgot-link">
                        Forgot password?
                    </a>

                    <div className="form-actions">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="/create-account" className="forgot-link">
                                Create account
                            </a>
                            <button type="submit" className="login-button">
                                Next
                            </button>
                        </div>
                    </div>
                </form>

                <div className="guest-section">
                    <p>Or continue as a guest</p>
                    <div className="guest-buttons">
                        <button
                            className="guest-button"
                            onClick={() => {
                                setFormData({
                                    email: "guest@example.com",
                                    password: "guest123"
                                });
                            }}
                        >
                            Guest demo
                        </button>
                        <button
                            className="guest-button"
                            onClick={() => navigate("/register")}
                        >
                            Sign up
                        </button>
                    </div>
                </div>

                <div className="helper-text">
                    One account. All of CharlieFx.
                    <br />
                    <a href="/learn-more">Learn more</a>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;