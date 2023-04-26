import SideNavbarAdmin from "./components/admin/sideNavbarAdmin";
import Login from "./components/login";
import ResetPassword from "./components/reset";
import SignUp from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCategories from "./components/admin/createCategories";
import LandingPage from "./components/landingPage";
import UserList from "./components/admin/userList";
import AdminLogin from "./components/admin/adminLogin";
import ModeratorLogin from "./components/moderator/moderatorLogin";
import RoleLogin from "./components/roleLogin";
import NewsFeed from "./components/newsFeed";
import ProfilePage from "./components/profilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/sideNavbarAdmin" element={<SideNavbarAdmin />}></Route>
        <Route path="/createCategories" element={<CreateCategories />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/moderatorLogin" element={<ModeratorLogin />}></Route>
        <Route path="/roleLogin" element={<RoleLogin />}></Route>
        <Route path="/feed" element={<NewsFeed />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
