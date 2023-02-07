import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// page components:
import About from "./pages/About";
import Sites from "./pages/Sites";
import BlogsAndArt from "./pages/BlogsAndArt";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="site-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/blogs-and-art" element={<BlogsAndArt />} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
