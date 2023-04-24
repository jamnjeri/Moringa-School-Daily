import SideNavbarAdmin from "./components/admin/sideNavbarAdmin";
import Login from "./components/login";
import ResetPassword from "./components/reset";
import SignUp from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCategories from "./components/admin/createCategories";
import LandingPage from "./components/landingPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
