import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is Home page</h1>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default Home;
