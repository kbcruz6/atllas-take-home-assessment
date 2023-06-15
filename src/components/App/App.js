//! Components
import Navbar from "../../components/Agents/Navbar";
import Footer from "../Agents/Footer.jsx";

//! Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewAgent from "./pages/NewAgent.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="bg-gray-200 text-black duration-300">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newagent/" element={<NewAgent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
