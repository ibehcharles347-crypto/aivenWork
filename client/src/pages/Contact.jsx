import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feedback, or inquiries, please feel free to reach out to us. We are here to help and would love to hear from you!</p>
            <h2>Contact Information</h2>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:contact@example.com">contact@example.com</a></li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Address:</strong> 123 Main Street, City, State 12345</li>
            </ul>
        </div>
    );
};

export default Contact;