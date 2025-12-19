"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [visibleColumns, setVisibleColumns] = useState<number[]>([]);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const columnsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0");
          setVisibleColumns((prev) => [...new Set([...prev, index])]);
        }
      });
    }, observerOptions);

    const socialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSocialVisible(true);
        }
      });
    }, observerOptions);

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
        }
      });
    }, observerOptions);

    const bottomObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsBottomVisible(true);
        }
      });
    }, observerOptions);

    columnsRef.current.forEach((el) => {
      if (el) columnsObserver.observe(el);
    });

    if (socialRef.current) socialObserver.observe(socialRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    if (bottomRef.current) bottomObserver.observe(bottomRef.current);

    return () => {
      columnsObserver.disconnect();
      socialObserver.disconnect();
      ctaObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <footer className="bg-slate-950 text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div
            ref={(el) => {
              columnsRef.current[0] = el;
            }}
            data-index="0"
            className={`transition-all duration-700 ${
              visibleColumns.includes(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/aspinturasimage.jpeg"
                  alt="As Pinturas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Distribuidor exclusivo de As Pinturas. Tu aliado en color, calidad
              y construcción.
            </p>
          </div>

          {/* Quick Links */}
          <div
            ref={(el) => {
              columnsRef.current[1] = el;
            }}
            data-index="1"
            className={`transition-all duration-700 delay-100 ${
              visibleColumns.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="#hero"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Inicio <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Quiénes Somos <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Productos <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors flex items-center gap-2"
                >
                  Contacto <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div
            ref={(el) => {
              columnsRef.current[2] = el;
            }}
            data-index="2"
            className={`transition-all duration-700 delay-200 ${
              visibleColumns.includes(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold mb-4 text-white">Productos</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Pinturas de Tráfico
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Vinilos Tipo 1
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Vinilos Tipo 2
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Esmaltes
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Anticorrosivos
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            ref={(el) => {
              columnsRef.current[3] = el;
            }}
            data-index="3"
            className={`transition-all duration-700 delay-300 ${
              visibleColumns.includes(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+573001234567">+57 (5) 300-123-4567</a>
              </li>
              <li className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@aspinturas.com">info@aspinturas.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          {/* Social Links */}
          <div
            ref={socialRef}
            className={`flex items-center justify-between flex-wrap gap-4 transition-all duration-1000 ${
              isSocialVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-400">
              © {currentYear} Pintura As. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700 transition-all duration-1000 ${
            isCtaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="text-sm text-slate-300 mb-3">
            ¿Necesitas ayuda con tu proyecto?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all hover:scale-105 active:scale-95"
          >
            Solicita una consulta
          </a>
        </div>
      </div>

      {/* Minimal Footer */}
      <div ref={bottomRef} className="border-t border-slate-800 py-6">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500 transition-all duration-1000 ${
            isBottomVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>
            Diseñado para potenciar tu negocio | Soluciones de pintura de clase
            mundial
          </p>
        </div>
      </div>
    </footer>
  );
}
