const galleryItems = [
  {
    id: "a",
    className: "gallery-item-a",
    caption: "Tortas de autor",
    gradient: "linear-gradient(135deg, #c4756a 0%, #874c42 60%, #4a3f35 100%)",
    accentGradient:
      "radial-gradient(circle at 30% 60%, rgba(255,218,212,0.35) 0%, transparent 60%), radial-gradient(circle at 75% 25%, rgba(255,180,168,0.25) 0%, transparent 50%)",
    icon: "cake",
  },
  {
    id: "b",
    className: "gallery-item-b",
    caption: "Alfajores de maicena",
    gradient: "linear-gradient(135deg, #d4a574 0%, #b8895a 50%, #7e6248 100%)",
    accentGradient:
      "radial-gradient(circle at 70% 50%, rgba(240,224,204,0.3) 0%, transparent 60%)",
    icon: "cookie",
  },
  {
    id: "c",
    className: "gallery-item-c",
    caption: "Proceso artesanal",
    gradient: "linear-gradient(135deg, #655a4b 0%, #4f4537 60%, #30312e 100%)",
    accentGradient:
      "radial-gradient(circle at 40% 70%, rgba(211,196,177,0.25) 0%, transparent 55%)",
    icon: "precision_manufacturing",
  },
  {
    id: "d",
    className: "gallery-item-d",
    caption: "Combos regalo",
    gradient: "linear-gradient(135deg, #8a7968 0%, #6b5e4f 50%, #4a3f35 100%)",
    accentGradient:
      "radial-gradient(circle at 60% 40%, rgba(228,226,221,0.2) 0%, transparent 50%)",
    icon: "redeem",
  },
  {
    id: "e",
    className: "gallery-item-e",
    caption: "Menú ejecutivo",
    gradient: "linear-gradient(135deg, #595f66 0%, #7e7362 40%, #4a3f35 100%)",
    accentGradient:
      "radial-gradient(circle at 25% 75%, rgba(193,199,207,0.3) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(221,227,235,0.2) 0%, transparent 45%)",
    icon: "restaurant",
  },
  {
    id: "f",
    className: "gallery-item-f",
    caption: "La cocina de Andu",
    gradient: "linear-gradient(135deg, #a46359 0%, #874c42 50%, #6e372f 100%)",
    accentGradient:
      "radial-gradient(circle at 50% 50%, rgba(255,218,212,0.2) 0%, transparent 65%)",
    icon: "countertops",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="bg-surface-container-low py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            Momentos visuales
          </span>
          <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mt-4 tracking-tighter">
            Galería
          </h2>
          <p className="font-body italic text-xl text-secondary mt-4 max-w-xl">
            Cada sabor merece una imagen. Las fotos reales llegan pronto.
          </p>
        </div>

        {/* Disclaimer note */}
        <div className="flex items-center gap-2 mb-10 bg-surface-container px-5 py-3 rounded-full inline-flex w-fit shadow-[0_4px_12px_rgba(27,28,25,0.06)]">
          <span
            className="material-symbols-outlined text-tertiary text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            info
          </span>
          <p className="font-label text-sm text-on-surface-variant">
            Fotos reales próximamente. Por ahora, imaginá algo lindo.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.className} relative rounded-xl overflow-hidden group cursor-pointer`}
              style={{ background: item.gradient }}
            >
              {/* Accent overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundImage: item.accentGradient }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/30 transition-colors duration-300" />

              {/* Center icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined text-white text-5xl mb-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-on-surface/60 to-transparent">
                <p className="font-body italic text-white text-sm leading-tight">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
