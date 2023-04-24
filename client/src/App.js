
import './App.css';
import SideNavbarAdmin from './components/admin/sideNavbarAdmin';
import Login from './components/login';
import ResetPassword from './components/reset';
import SignUp from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateCategories from './components/admin/createCategories';

function App() {
  return (
    <BrowserRouter>
      <Login/>
      <Routes>
        
        {/* <Route path="/" element={Login}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/reset" element={<ResetPassword/>}></Route>
        <Route path="/sideNavbarAdmin" element={<SideNavbarAdmin/>}></Route>
        <Route path="/createCategories" element={<CreateCategories/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
