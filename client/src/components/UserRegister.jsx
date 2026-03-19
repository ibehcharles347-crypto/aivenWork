import React, { useState } from "react";
import API from "../util/api.js";
import { useNavigate, Link } from "react-router-dom";
import "./UserRegister.css";

function UserRegister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
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
            const response = await API.post("/api/register", formData);
            console.log("Registration successful:", response.data);
            navigate("/login");
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    };

    return (
        <div className="gmail-signup-container">
            <div className="gmail-signup-card">
                <div className="gmail-header">
                    <div className="gmail-logo">
                        <span>C</span>
                    </div>
                    <h1>Create your account</h1>
                    <p>
                        for CharlieFx <a href="/">Learn more</a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="gmail-form">
                    {/* First & Last Name Row - Added for Gmail style */}
                    <div className="input-row">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="floating-input"
                                placeholder=""
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <label htmlFor="firstName" className="floating-label">
                                First name
                            </label>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="floating-input"
                                placeholder=" "
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <label htmlFor="lastName" className="floating-label">
                                Last name
                            </label>
                        </div>
                    </div>

                    {/* Email field */}
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
                            Email
                        </label>
                    </div>

                    {/* Password field with visibility toggle */}
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

                    {/* Terms and conditions */}
                    <div className="terms-text">
                        By creating an account, you agree to our <a href="/terms">Terms of Service</a>{" "}
                        and <a href="/Privacy">Privacy Policy</a>.
                    </div>

                    <div className="form-actions">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link to="/login" className="signin-link">
                                Sign in instead
                            </Link>
                            <button type="submit" className="signup-button">
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="alternate-option">
                        <p>Want to use for your business?</p>
                        <a href="/business-signup" className="business-link">
                            Create a business account →
                        </a>
                    </div>

                    {/* Footer links */}
                    <div className="helper-footer">
                        <a href="/help">Help</a>
                        <span>•</span>
                        <a href="/privacy">Privacy</a>
                        <span>•</span>
                        <a href="/terms">Terms</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegister;