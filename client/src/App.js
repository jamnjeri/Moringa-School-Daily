import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect, useLocation } from 'react';
import LandingPage from "./pages/LandingPage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboards from "./pages/Dashboards";
import Categories from "./components/Categories";
import PrivateRoutes from "./utils/PrivateRoutes";
import ModeDashboard from "./pages/ModeDashboard";
import TwDashboard from "./pages/TwDashboard";
import ResetPassword from "./pages/Reset";
import ArticleCard from "./components/ArticleCard";

function App() {

  // Keep track of if user is Logged in or not
  const [loggedIn, setIsLoggedIn] = useState(false);

  // Keep track of the user
  const [user, setUser] = useState(null);

  // Keep track of user role
  const [role, setRole] = useState(null);

  const location = useLocation

  useEffect(() => {
    // auto-login user
    fetch("http://localhost:3000/me")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the response data
        setUser(data);
        setRole(data.role)
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);


  const handleLogin = (user) => {
    setIsLoggedIn(true);
    console.log(user)
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log(loggedIn)
    setUser(user)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // handle successful logout
    setUser(null); // set user state to null
    sessionStorage.removeItem("user")
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}></Route>
        <Route path="/signup" element={<Signup handleLogin={handleLogin} />}></Route>
        <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
          <Route path="/dashboard" element={<Dashboards user={user} handleLogout={handleLogout} />}></Route>
          <Route path="/modedashboard" element={<ModeDashboard user={user} handleLogout={handleLogout} />}></Route>
          <Route path="/twdashboard" element={<TwDashboard user={user} handleLogout={handleLogout} />}></Route>
          <Route path="/article/:id" element={<ArticleCard user={user} />}></Route>
          <Route path="/categories" element={<Categories user={user} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
