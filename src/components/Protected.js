// PrivateRoute.js

import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
// { element: Element, ...rest },
const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      navigate("../signup");
    }
  });
  //   const { component } = props;
  //   const isLoggedIn = () => {
  //     return localStorage.getItem("token") !== null;
  //   };
  return (
    <>
      <h1>this is protected</h1>
      <Component />
      {/* Route
       {...rest}
       render={(props) =>
        isLoggedIn() ? <Element {...props} /> : <Navigate to="/" />
      } */}
    </>
  );
};

export default Protected;
