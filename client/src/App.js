
import './App.css';
import SideNavbarAdmin from './components/admin/sideNavbarAdmin';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Routes> */}
        <Login/>
        <SignUp/>
        <SideNavbarAdmin/>
        {/* <Route path="/" element={Home}></Route> */}
        {/* <Route path="/Login" element={Login}></Route>
        <Route path="/SignUp" element={SignUp}></Route>
        <Route path="/SideNavbarAdmin" element={SideNavbarAdmin}></Route> */}
     
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
