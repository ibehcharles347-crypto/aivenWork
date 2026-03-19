import React from "react";
import "./Help.css";

const Help = () => {
    return (
        <div className="help-container container">
            <h1>Help Page</h1>
            <p>Welcome to the Help Page! Here you can find resources and support for using our application.</p>
            <h2>Frequently Asked Questions</h2>
            <ul>
                <li><strong>How do I create an account?</strong> - You can create an account by clicking on the "Sign Up" button on the login page and filling out the registration form.</li>
                <li><strong>How do I reset my password?</strong> - If you've forgotten your password, click on the "Forgot Password" link on the login page and follow the instructions to reset it.</li>
                <li><strong>How do I contact support?</strong> - You can contact our support team by emailing
                    <a href="mailto:support@example.com">support@example.com</a>
                </li>
            </ul>
        </div>
    );
};

export default Help;