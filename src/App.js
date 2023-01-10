import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// page components:
import Home from "./pages/Home";
import About from "./pages/About";
import MySites from "./pages/MySites";
import BlogsAndArt from "./pages/BlogsAndArt";
import ContactMe from "./pages/ContactMe";
import DesignGuide from "./pages/design/DesignGuide";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <div className="site-content"> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sites" element={<MySites />} />
          <Route path="/blogs-and-art" element={<BlogsAndArt />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/design-guide" element={<DesignGuide />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
