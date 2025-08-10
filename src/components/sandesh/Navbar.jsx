import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ data, onCoffeeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ];

  const API_BASE_URL = "http://localhost:8080"; // <-- Hardcoded backend URL here

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setSearchResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/sandesh?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (data.success) {
        setSearchResult({
          answer: data.answer,
          model: data.model,
        });
      } else {
        alert("❌ Error: " + (data.error || "Unknown Error"));
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("⚠️ Failed to connect to AI API.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${
        scrolled
          ? "bg-[#0A0020]/80 backdrop-blur-lg shadow-xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-unbounded font-bold text-gradient"
          >
            {data.name.split(" ")[0]} G.
          </motion.a>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center flex-1"
          >
            <div className="flex items-center space-x-1 bg-slate-800/50 border border-slate-700/50 rounded-full p-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/50 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Search & Button for Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isLoading ? "Thinking..." : "Ask anything..."}
                disabled={isLoading}
                className="bg-slate-800/70 border border-slate-700/50 text-gray-300 placeholder-gray-500 text-sm rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all w-40 focus:w-56"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <Button
              onClick={onCoffeeClick}
              className="button-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-pink-500/30 flex items-center gap-2"
            >
              <Coffee size={18} /> Buy Coffee
            </Button>
          </div>

          {/* Mobile menu & search buttons */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setShowMobileSearch(true)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label="Open search"
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-[#0A0020]/95 shadow-xl fixed top-20 z-50 w-full backdrop-blur-md border-t border-purple-500/20"
        >
          <nav className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-purple-600/30 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 px-3">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  onCoffeeClick();
                }}
                className="w-full button-gradient text-white py-3 rounded-md text-base font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                <Coffee size={18} /> Buy me a Coffee
              </Button>
            </div>
          </nav>
        </motion.div>
      )}

      {/* 🔍 Search Result Modal */}
      {searchResult && (
        <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0020] text-white rounded-xl shadow-xl p-6 max-w-lg w-full border border-purple-500/20 relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSearchResult(null)}
              aria-label="Close popup"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">🤖 {searchResult.model?.name || "AI"} says:</h3>
            <p className="text-sm text-gray-200 whitespace-pre-line">
              {searchResult.answer}
            </p>
          </motion.div>
        </div>
      )}

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0020] text-white rounded-xl shadow-xl p-5 w-full max-w-md relative border border-purple-500/20"
          >
            <button
              onClick={() => setShowMobileSearch(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Close search"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
onKeyDown={handleKeyDown}
placeholder={isLoading ? "Thinking..." : "Ask anything..."}
className="flex-1 bg-slate-800 border border-slate-700 text-sm text-white rounded-full px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
/>
<Button onClick={handleSearch} disabled={isLoading}>
{isLoading ? "..." : <Search size={18} />}
</Button>
</div>
</motion.div>
</div>
)}
</header>
);
};

export default Navbar;