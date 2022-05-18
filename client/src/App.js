import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './componets/LandingPage';
import Home from './componets/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
