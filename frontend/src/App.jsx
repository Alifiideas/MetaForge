import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Metadata from "./pages/Metadata";
import DuplicateDetector from "./pages/DuplicateDetector";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metadata" element={<Metadata />} />
        <Route path="/duplicate-detector" element={<DuplicateDetector />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

