import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect, useLocation } from 'react';

import SideNavbarAdmin from "./components/admin/sideNavbarAdmin";
import Login from "./components/login";
import ResetPassword from "./components/reset";
import SignUp from "./components/signup";
import CreateCategories from "./components/admin/createCategories";
import LandingPage from "./components/landingPage";
import UserList from "./components/admin/userList";
import AdminLogin from "./components/admin/adminLogin";
import ModeratorLogin from "./components/moderator/moderatorLogin";
import RoleLogin from "./components/roleLogin";
import AddArticles from "./components/AddArticles";
import ArticleList from "./components/ArticleList";

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


    const handleLogin = (user) => {
      setIsLoggedIn(true);
      console.log(user)
      // sessionStorage.setItem("user", JSON.stringify(user));
      setUser(user)
    };

    const handleLogout = () => {
      console.log("Hi")
      setIsLoggedIn(false);
      // handle successful logout
      setUser(null); // set user state to null
    };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}></Route>
        <Route path="/signup" element={<SignUp handleLogin={handleLogin} />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/sideNavbarAdmin" element={<SideNavbarAdmin />}></Route>
        <Route path="/createCategories" element={<CreateCategories />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/moderatorLogin" element={<ModeratorLogin />}></Route>
        <Route path="/roleLogin" element={<RoleLogin />}></Route>
        <Route path="/addArticle" element={<AddArticles user={user} />}></Route>
        <Route path="/articleList" element={<ArticleList loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} user={user} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
