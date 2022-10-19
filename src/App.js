import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// import speckleBg from "./assets/speckle-bg.svg";

function App() {
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: speckleBg,
      // }}
    >
      <BrowserRouter>
        <header>
          <h1>My Portfolio</h1>
        </header>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element=<Home />></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
