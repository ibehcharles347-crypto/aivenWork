import { useState } from "react";
import API from "../util/api.js";
import "./loginform.css";
import Spinner from 'react-bootstrap/Spinner';

const LoginForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
    setLoading(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("image", formData.image);

      const response = await API.post("/api/addUser", data
      );

      onUserAdded();
      console.log("User added successfully:", response.data);

      setFormData({
        name: "",
        email: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  }

  return (<div className="login-container">
    <div className="login-box">
      <h2>Applicant Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          placeholder="Image Url"
        />

        <button onClick={() => { setLoading(true); }} type="submit" className="btn btn-success">
          {loading ? <Spinner animation="border" /> : "Submit"}
        </button>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;

