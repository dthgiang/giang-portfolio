import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/ContactPage/Contact";
import About from "./pages/AboutPage/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
