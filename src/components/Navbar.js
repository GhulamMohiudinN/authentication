import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
      <br />
    </>
  );
};

export default Navbar;
