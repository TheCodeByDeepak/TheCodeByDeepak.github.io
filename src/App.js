import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import ScrollToTop from "./components/BackToTopButton";
import ScrollToTopNav from "./components/ScrollToTop";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
       <ScrollToTop />
        <ScrollToTopNav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
