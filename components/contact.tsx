"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const formRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      });
    }, observerOptions);

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0");
          setVisibleCards((prev) => [...new Set([...prev, index])]);
        }
      });
    }, observerOptions);

    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      });
    }, observerOptions);

    const sidebarObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSidebarVisible(true);
        }
      });
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (formRef.current) formObserver.observe(formRef.current);
    if (sidebarRef.current) sidebarObserver.observe(sidebarRef.current);

    cardsRef.current.forEach((el) => {
      if (el) cardsObserver.observe(el);
    });

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();
      formObserver.disconnect();
      sidebarObserver.disconnect();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Teléfono",
      main: "+57 (5) 300-123-4567",
      sub: "Disponible de lunes a viernes",
    },
    {
      icon: Mail,
      title: "Email",
      main: "info@aspinturas.com",
      sub: "Respuesta en 24 horas",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      main: "Barranquilla, Colombia",
      sub: "Zona industrial centro",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-950 py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Contacto
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            ¿Tienes preguntas? Nuestro equipo está disponible para ayudarte.
            Contáctanos en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-index={index}
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-700 hover:border-orange-500 hover:shadow-lg ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                {card.main}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                {card.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 ${
              isFormVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="+57 (5) 300-123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all"
                  placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Enviar Mensaje
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-100 font-semibold">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Hours */}
          <div
            ref={sidebarRef}
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isSidebarVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-slate-900 dark:text-white">
                    Respuesta rápida a tus consultas en menos de 24 horas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-slate-900 dark:text-white">
                    Equipo especializado con asesoría técnica profesional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-slate-900 dark:text-white">
                    Soluciones personalizadas para tus necesidades específicas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-slate-900 dark:text-white">
                    Promociones especiales para clientes mayoristas
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock
                  size={20}
                  className="text-orange-600 dark:text-orange-400"
                />
                Horario de Atención
              </h4>
              <div className="space-y-2 text-slate-600 dark:text-slate-400">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Lunes - Viernes:
                  </span>{" "}
                  8:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Sábado:
                  </span>{" "}
                  9:00 AM - 2:00 PM
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Domingo:
                  </span>{" "}
                  Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
