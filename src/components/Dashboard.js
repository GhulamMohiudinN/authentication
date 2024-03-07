import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const responce = await axios.get(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(responce.data);
        }
      } catch (error) {
        console.error("error fething user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/"); // Navigate to sign-in page
  };

  console.log(user?.name ? user.name : "loading");

  return (
    <>
      <h2>Welcome to Dashboard</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Dashboard;
