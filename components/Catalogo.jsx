"use client";

const WA_BASE = "https://wa.me/5493513569171";

const products = [
  {
    id: "tortas",
    badge: "Estrella",
    icon: "cake",
    gradientFrom: "#c4756a",
    gradientVia: "#a46359",
    gradientTo: "#874c42",
    accentA: "#ffdad4",
    accentB: "#ffb4a8",
    name: "Tortas Personalizadas",
    description:
      "Diseñadas a medida para tu ocasión especial. Elegís sabor, relleno, cobertura y la dedicatoria que haga llorar a alguien de la emoción.",
    price: "Desde $18.000",
    waLink: `${WA_BASE}?text=Hola!%20Me%20gustar%C3%ADa%20encargar%20una%20torta%20personalizada%20%F0%9F%8E%82%20%C2%BFPodr%C3%ADas%20contarme%20las%20opciones%3F`,
  },
  {
    id: "alfajores",
    badge: "Favorito",
    icon: "cookie",
    gradientFrom: "#d4a574",
    gradientVia: "#b8895a",
    gradientTo: "#7e6248",
    accentA: "#f0e0cc",
    accentB: "#d3c4b1",
    name: "Alfajores & Cookies",
    description:
      "Maicena rellenos de dulce de leche artesanal, cookies de manteca con chips belgas. El tipo de cosa que pedís \"una sola\" y terminás pidiendo seis.",
    price: "$900 c/u · Caja x6: $4.800",
    waLink: `${WA_BASE}?text=Hola!%20Quiero%20pedir%20alfajores%20y%20cookies%20%F0%9F%8D%AA%20%C2%BFTen%C3%A9s%20disponibilidad%20esta%20semana%3F`,
  },
  {
    id: "combos",
    badge: "Oferta",
    icon: "redeem",
    gradientFrom: "#8a7968",
    gradientVia: "#6b5e4f",
    gradientTo: "#4a3f35",
    accentA: "#e4e2dd",
    accentB: "#d3c4b1",
    name: "Combos",
    description:
      "La solución perfecta para regalos, reuniones o caprichos personales. Armamos el combo ideal con torta, alfajores y cookies a tu gusto.",
    price: "Desde $5.200",
    waLink: `${WA_BASE}?text=Hola!%20Me%20interesa%20un%20combo%20%F0%9F%8E%81%20%C2%BFPod%C3%A9s%20contarme%20qu%C3%A9%20opciones%20hay%3F`,
  },
];

export default function Catalogo() {
  return (
    <section
      id="catalogo"
      className="bg-surface-container py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            Nuestros productos
          </span>
          <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mt-4 tracking-tighter">
            Catálogo
          </h2>
          <p className="font-body italic text-xl text-secondary mt-4 max-w-xl">
            Cada pieza, pensada. Cada sabor, recordado.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-surface rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(27,28,25,0.06)] hover:shadow-[0_20px_50px_rgba(27,28,25,0.12)] transition-shadow"
            >
              {/* Gradient image placeholder */}
              <div
                className="relative h-72 overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientVia} 50%, ${product.gradientTo} 100%)`,
                }}
              >
                {/* Radial accent overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, ${product.accentA} 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${product.accentB} 0%, transparent 50%)`,
                  }}
                />

                {/* Icon + label */}
                <div className="relative text-center text-white/80 px-6 z-10">
                  <span
                    className="material-symbols-outlined text-6xl mb-3 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {product.icon}
                  </span>
                  <p className="font-label text-xs uppercase tracking-widest">
                    Foto próximamente
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <span className="font-label text-xs font-bold text-white uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7">
                <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-2">
                  {product.name}
                </h3>
                <p className="font-body italic text-secondary text-base leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="font-label font-bold text-primary text-lg mb-6">
                  {product.price}
                </p>
                <a
                  href={product.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-label font-bold py-3 rounded-full hover:bg-primary-container transition-colors shadow-[0_10px_30px_rgba(135,76,66,0.25)]"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
