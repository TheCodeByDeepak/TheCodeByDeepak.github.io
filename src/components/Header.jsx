import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProfessionalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "TheCodeByDeepak";
  const currentIndex = useRef(0); // FIX: useRef instead of local var

 useEffect(() => {
  const typingSpeed = 150;
  let timeoutId;

  function type(currentIndex) {
    if (currentIndex <= fullText.length) {
      setDisplayedText(fullText.substring(0, currentIndex));
      timeoutId = setTimeout(() => type(currentIndex + 1), typingSpeed);
    }
  }

  type(1); // Start from index 1 to avoid 1st letter repeat

  return () => clearTimeout(timeoutId); // cleanup
}, []);


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
     { name: "Snapshot", path: "/snapshot" },
    { name: "Achievements", path: "/achievements" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
            style={{
              fontFamily: "'Dancing Script', cursive",
              minWidth: "14ch",
              display: "inline-block",
            }}
          >
            {displayedText}
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-blue-600 font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative text-blue-600 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              style={{ fontFamily: "'Inter', sans-serif", position: "relative" }}
            >
              Contact Me
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"}`}>
          <nav className="bg-white px-6 py-4 space-y-4 shadow-inner">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-blue-700 font-medium hover:text-blue-600 transition"
              >
                {name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold text-center hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </header>

      <div className={`transition-all duration-500 ease-in-out ${menuOpen ? "h-[260px]" : "h-[80px]"} md:h-[80px]`} />
    </>
  );
}
