
import './App.css';
import SideNavbarAdmin from './components/admin/sideNavbarAdmin';
import Login from './components/login';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <SideNavbarAdmin />

    </div>
  );
}

export default App;
