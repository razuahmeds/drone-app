import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DroneDetails from "./pages/DroneDetails";
import Navbars from "./navbars/Navbars";
import DroneCart from "./components/DroneCart";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:drone_id" element={<DroneDetails />} />
        <Route path="/DroneCart" element={<DroneCart />} />
      </Routes>
    </Router>
  );
}

export default App;
