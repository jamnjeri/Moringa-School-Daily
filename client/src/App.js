import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboards from "./pages/Dashboards";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboards />} />
        </Route>
      </Routes>
  );
}

export default App;
