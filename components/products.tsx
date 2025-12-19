"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [productImageIndex, setProductImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const products = [
    {
      id: 1,
      name: "Pinturas de Tráfico",
      description:
        "Pinturas especializadas para señalización vial y marcas de tránsito. Diseñadas con alta visibilidad reflectante y durabilidad extrema.",
      features: [
        "Alta visibilidad reflectante",
        "Resistencia a la intemperie",
        "Secado rápido",
        "Excelente cobertura",
        "Colores normalizados",
      ],
      images: [
        "/traffic-paint-road-marking.jpg",
        "/traffic-paint-road-markings.jpg",
        "/yellow-white-road-paint-lines.jpg",
      ],
    },
    {
      id: 2,
      name: "Vinilos Tipo 1",
      description:
        "Vinilos de primera calidad para interiores con acabado mate elegante. Ideales para paredes y techos con máxima cobertura.",
      features: [
        "Acabado mate uniforme",
        "Bajo olor",
        "Fácil aplicación",
        "Cobertura excelente",
        "Resistente al lavado",
      ],
      images: [
        "/interior-vinyl-paint-matte-finish.jpg",
        "/interior-matte-paint-wall-finish.jpg",
        "/living-room-painted-walls-matte.jpg",
      ],
    },
    {
      id: 3,
      name: "Vinilos Tipo 2",
      description:
        "Vinilos premium con acabado satinado para espacios comerciales y residenciales. Mayor durabilidad y resistencia.",
      features: [
        "Acabado satinado profesional",
        "Resistencia mejorada",
        "Mayor cobertura",
        "Anti-hongos",
        "Larga durabilidad",
      ],
      images: [
        "/premium-vinyl-paint-satin-finish.jpg",
        "/satin-finish-paint-premium-walls.jpg",
        "/commercial-space-painted-satin.jpg",
      ],
    },
    {
      id: 4,
      name: "Esmaltes",
      description:
        "Esmaltes de alto rendimiento para madera y metal. Acabado brillante con excelente protección y durabilidad.",
      features: [
        "Acabado brillante intenso",
        "Excelente adhesión",
        "Protección superior",
        "Resistencia al tráfico",
        "Secado acelerado",
      ],
      images: [
        "/enamel-paint-wood-metal-glossy.jpg",
        "/glossy-enamel-paint-wood-furniture.jpg",
        "/shiny-enamel-finish-metal-doors.jpg",
      ],
    },
    {
      id: 5,
      name: "Anticorrosivos",
      description:
        "Protección anticorrosiva para estructuras metálicas en ambientes industriales y marinos.",
      features: [
        "Protección contra corrosión",
        "Resistencia marina",
        "Adherencia en metal",
        "Larga vida útil",
        "Múltiples capas opcionales",
      ],
      images: [
        "/anticorrosive-paint-metal-protection.jpg",
        "/anticorrosive-metal-protection-paint.jpg",
        "/industrial-metal-structure-protective-coating.jpg",
      ],
    },
    {
      id: 6,
      name: "Estuco",
      description:
        "Estuco de alta calidad para acabados decorativos y protectores en muros internos y externos. Textura y durabilidad superior.",
      features: [
        "Acabado texturable",
        "Excelente cobertura",
        "Resistencia al agua",
        "Fácil aplicación",
        "Múltiples tonos disponibles",
      ],
      images: [
        "/decorative-stucco-texture-finish.jpg",
        "/textured-stucco-wall-exterior.jpg",
        "/stucco-coating-architectural-finish.jpg",
      ],
    },
        {
      id: 7,
      name: "Elaboración de pinturas",
      description:
        "Pintura de alta calidad elaborada según cada necesidad, ideal para acabados decorativos y protectores en superficies internas y externas. Excelente adherencia, cobertura uniforme y durabilidad superior.",

    features: [
  "Elaboración personalizada según cada necesidad",
  "Excelente cobertura y adherencia",
  "Alta resistencia al agua y la humedad",
  "Fácil aplicación y secado uniforme",
  "Amplia variedad de tonos y acabados",
],

      images: [
        "/decorative-stucco-texture-finish.jpg",
        "/textured-stucco-wall-exterior.jpg",
        "/stucco-coating-architectural-finish.jpg",
      ],
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const initialState: { [key: number]: number } = {};
    products.forEach((product) => {
      initialState[product.id] = 0;
    });
    setProductImageIndex(initialState);
  }, []);

  useEffect(() => {
    const selectedProduct = products[activeProduct];
    const interval = setInterval(() => {
      setProductImageIndex((prev) => ({
        ...prev,
        [selectedProduct.id]:
          ((prev[selectedProduct.id] || 0) + 1) % selectedProduct.images.length,
      }));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [activeProduct, products]);

  return (
    <section
      id="products"
      className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Línea completa de pinturas, vinilos, esmaltes y estuco de la más
            alta calidad para transformar tus espacios con colores vivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                activeProduct === index
                  ? "border-accent bg-white dark:bg-slate-800 shadow-lg scale-105"
                  : "border-transparent bg-white dark:bg-slate-800 hover:border-accent/50"
              }`}
            >
              <p className="font-semibold text-foreground text-base">
                {product.name}
              </p>
            </button>
          ))}
        </div>

        {/* Product Detail with Auto-Carousel */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-border shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="relative group">
              <div className="rounded-xl overflow-hidden h-80 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <img
                  src={
                    products[activeProduct].images[
                      productImageIndex[products[activeProduct].id] || 0
                    ]
                  }
                  alt={products[activeProduct].name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  const currentIndex =
                    productImageIndex[products[activeProduct].id] || 0;
                  const newIndex =
                    (currentIndex - 1 + products[activeProduct].images.length) %
                    products[activeProduct].images.length;
                  setProductImageIndex((prev) => ({
                    ...prev,
                    [products[activeProduct].id]: newIndex,
                  }));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => {
                  const currentIndex =
                    productImageIndex[products[activeProduct].id] || 0;
                  const newIndex =
                    (currentIndex + 1) % products[activeProduct].images.length;
                  setProductImageIndex((prev) => ({
                    ...prev,
                    [products[activeProduct].id]: newIndex,
                  }));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
                {products[activeProduct].images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setProductImageIndex((prev) => ({
                        ...prev,
                        [products[activeProduct].id]: idx,
                      }));
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx ===
                      (productImageIndex[products[activeProduct].id] || 0)
                        ? "bg-white w-8"
                        : "bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {products[activeProduct].name}
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  {products[activeProduct].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Características Principales
                </h4>
                <ul className="space-y-3">
                  {products[activeProduct].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 flex gap-3">
                <button className="flex-1 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors">
                  Solicitar Información
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border hover:border-accent/50 transition-colors">
            <h4 className="text-lg font-bold text-foreground mb-2">
              Colores Vivos
            </h4>
            <p className="text-muted">
              Pigmentos de última generación que garantizan colores brillantes y
              duraderos en tus espacios.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border hover:border-accent/50 transition-colors">
            <h4 className="text-lg font-bold text-foreground mb-2">
              Garantía Premium
            </h4>
            <p className="text-muted">
              Garantía completa en todos nuestros productos con respaldo técnico
              profesional.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border hover:border-accent/50 transition-colors">
            <h4 className="text-lg font-bold text-foreground mb-2">
              Rendimiento Superior
            </h4>
            <p className="text-muted">
              Máxima cobertura y durabilidad para garantizar los mejores
              resultados en tus proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
