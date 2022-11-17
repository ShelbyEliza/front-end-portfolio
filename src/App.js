import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// page components:
import Home from "./pages/Home";
import About from "./pages/About";
import MySites from "./pages/MySites";
import BlogsAndArt from "./pages/BlogsAndArt";
import ContactMe from "./pages/ContactMe";
import DesignGuide from "./pages/design/DesignGuide";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/about" element={<About />} />
          <Route path="/my-sites" element=<MySites /> />
          <Route path="/blogs-&-art" element=<BlogsAndArt /> />
          <Route path="/contact-me" element=<ContactMe /> />
          <Route path="/design-guide" element=<DesignGuide /> />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
