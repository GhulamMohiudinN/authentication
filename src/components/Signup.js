import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  });

  const handleSignIn = async () => {
    try {
      const responce = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      console.log(responce, "responce");

      if (responce.data.access_token) {
        localStorage.setItem("token", responce.data.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("error is :", error);
    }
  };

  return (
    <>
      <h1>This is Signup page</h1>
      <h1>you can signup from here</h1>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleSignIn}>Submit</button>
    </>
  );
};

export default Signup;
