import Navbar from './Components/Navbar';
import Home from './Components/pages/Home.js';
import TrainDetails from './Components/Traindetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/train/:trainNumber" element={<TrainDetails />} />
          </Routes>
      </Router>
    );
}