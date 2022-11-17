import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Events from "./pages/events/Events";
import Membership from "./pages/membership/Membership";
import Blog from "./pages/blog/Blog";
import Children from "./pages/children/Children";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/children" element={<Children />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
