import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

// MetaForge core pages
import Metadata from "./pages/Metadata";
import DuplicateDetector from "./pages/DuplicateDetector";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* MetaForge Core */}
        <Route path="/metadata" element={<Metadata />} />
        <Route
          path="/duplicate-detector"
          element={<DuplicateDetector />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ padding: "80px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


