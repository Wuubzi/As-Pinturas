"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    setIsLoaded(true);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Quiénes Somos", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Contacto", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className={`flex items-center gap-3 group transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            onClick={closeMenu}
          >
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="/aspinturasimage.jpeg"
                  alt="AS Pinturas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-500 relative group ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`hidden sm:flex gap-2 transition-all duration-700 delay-500 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <a
              href="#contact"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all text-sm hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 text-slate-700 dark:text-slate-300 ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 text-slate-700 dark:text-slate-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-slate-200 dark:border-slate-800 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all text-center text-sm ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }`}
              style={{
                transitionDelay: isOpen ? `${menuItems.length * 50}ms` : "0ms",
              }}
              onClick={closeMenu}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
