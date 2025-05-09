import React, { useState, useEffect } from "react";
import { ArrowUpIcon, MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen w-full overflow-x-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a
              href="#"
              className="text-xl md:text-2xl font-bold text-black dark:text-white"
            >
              Precious
              <span className="text-teal-600 dark:text-teal-400">.Design</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-800 dark:text-gray-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 transition-all">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col space-y-4">
                <a
                  href="#about"
                  className="py-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="py-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#portfolio"
                  className="py-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#experience"
                  className="py-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="py-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="w-full">
          <Hero darkMode={darkMode} />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </main>

        <Footer />

        {/* Scroll to top button */}
        {scrolled && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 dark:bg-purple-500 text-white shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 z-40"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
