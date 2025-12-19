"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-40">
        <div
          className={`absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transition-all duration-2000 ${
            isLoaded ? "opacity-40 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl transition-all duration-2000 delay-300 ${
            isLoaded ? "opacity-40 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/4 w-72 h-72 bg-green-400 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
            isLoaded ? "opacity-40 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo Grande */}
            <div
              className={`flex justify-center md:justify-start mb-6 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-75 -translate-y-10"
              }`}
            >
              <div className="relative w-50 h-50 md:w-60 md:h-60 flex items-center justify-center p-3">
                <img
                  src="/logo.png"
                  alt="AS Pinturas Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Badge */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/40">
                <span className="text-yellow-300 font-semibold text-sm">
                  Colores Vivos • Calidad Premium • Innovación
                </span>
              </div>
            </div>

            {/* Title */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Te ayudamos a crear{" "}
                <span className="text-yellow-300">espacios de felicidad</span>
              </h1>
              <p className="text-xl text-blue-100">
                AS Pinturas: La marca que transforma y protege tus espacios con
                los mejores colores vivos y acabados de calidad superior.
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Contáctanos
                <ArrowRight size={20} />
              </a>
              <a
                href="#products"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                Ver Productos
              </a>
            </div>

            {/* Features */}
            <div
              className={`grid grid-cols-2 gap-4 pt-8 transition-all duration-1000 delay-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-300 font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Colores Vivos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-300 font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Alta Calidad</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center text-green-300 font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Innovación</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center text-blue-300 font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Durabilidad</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative h-96 md:h-full flex items-center justify-center transition-all duration-1200 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-20 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-yellow-300 via-red-400 to-blue-500 rounded-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <img
                src="/hero.png"
                alt="AS Pinturas - Colores vivos para transformar espacios"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-blue-200">Descubre más</span>
          <svg
            className="w-6 h-6 text-blue-200"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
