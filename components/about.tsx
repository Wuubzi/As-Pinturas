"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const values = [
    {
      title: "Especialización",
      description:
        "Expertos en productos de alto rendimiento para mantenimiento, señalización y embellecimiento.",
    },
    {
      title: "Durabilidad",
      description:
        "Pinturas y esmaltes diseñados para resistir condiciones extremas y mantener su calidad.",
    },
    {
      title: "Asesoría Técnica",
      description:
        "Equipo especializado con respaldo profesional para proyectos de cualquier escala.",
    },
    {
      title: "Cumplimiento",
      description:
        "Compromiso con estándares de calidad internacionales y entregas puntuales garantizadas.",
    },
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [visibleValues, setVisibleValues] = useState<number[]>([]);
  const [visibleStats, setVisibleStats] = useState<number[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      });
    }, observerOptions);

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      });
    }, observerOptions);

    const valuesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0");
          setVisibleValues((prev) => [...new Set([...prev, index])]);
        }
      });
    }, observerOptions);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const index = parseInt(entry.target.dataset.index || "0");
          setVisibleStats((prev) => [...new Set([...prev, index])]);
        }
      });
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    valuesRef.current.forEach((el) => {
      if (el) valuesObserver.observe(el);
    });

    statsRef.current.forEach((el) => {
      if (el) statsObserver.observe(el);
    });

    return () => {
      headerObserver.disconnect();
      imageObserver.disconnect();
      contentObserver.disconnect();
      valuesObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Pintura As es una comercializadora especializada con más de una
            década de experiencia en distribución de productos de construcción y
            acabados.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`rounded-xl overflow-hidden shadow-lg h-170 bg-gradient-to-br from-blue-400 to-orange-400 transition-all duration-1000 delay-200 ${
              isImageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src="/aspinturasimage.jpeg"
              alt="Oficina Comercial Prisma"
              className="w-full h-full object-containt"
            />
          </div>

          {/* Text Content */}
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isContentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Ser el distribuidor de referencia de productos de alto
                rendimiento en la región, ofreciendo soluciones profesionales
                que combinen calidad, precio competitivo y asesoría técnica
                confiable. Trabajamos con pinturas de tráfico, vinilos, esmaltes
                y soluciones anticorrosivas diseñadas para ofrecer durabilidad,
                rendimiento y resultados profesionales.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestro Valor
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Somos el aliado ideal para contratistas, empresas constructoras
                y clientes particulares que buscan calidad, cumplimiento y
                asesoría técnica confiable. Cada producto es cuidadosamente
                seleccionado para garantizar que nuestros clientes reciban lo
                mejor del mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                valuesRef.current[index] = el;
              }}
              data-index={index}
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border hover:border-accent transition-all duration-700 ${
                visibleValues.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {[
            { value: "10+", label: "Años de Experiencia" },
            { value: "500+", label: "Clientes Satisfechos" },
            { value: "100%", label: "Calidad Garantizada" },
            { value: "24/7", label: "Disponibilidad" },
          ].map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                statsRef.current[index] = el;
              }}
              data-index={index}
              className={`text-center transition-all duration-700 ${
                visibleStats.includes(index)
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
