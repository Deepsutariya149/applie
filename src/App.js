import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./container/home";
import HAndT from "./container/hAndt";
import About from "./container/about";
import PageNotFound from "./container/pageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/h-and-t" element={<HAndT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
