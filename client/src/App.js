
import './App.css';
import SideNavbarAdmin from './components/admin/sideNavbarAdmin';
import Login from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <SideNavbarAdmin/>
     <Login/>
     <SignUp/>
    </div>
  );
}

export default App;
