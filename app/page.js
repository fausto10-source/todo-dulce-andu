"use client";

import Catalogo from "@/components/Catalogo";
import MenuEjecutivo from "@/components/MenuEjecutivo";
import Galeria from "@/components/Galeria";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";

const WA_BASE = "https://wa.me/5493513569171";

export default function Home() {
  return (
    <>
      {/* ─── Fixed Navigation ─── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(27,28,25,0.06)] glass-nav">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="font-headline font-extrabold text-xl text-on-surface tracking-tighter">
            Todo Dulce by Andu
          </div>

          {/* Nav links — center */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#catalogo"
              className="text-primary font-bold font-label tracking-tight py-1 transition-all duration-300 hover:opacity-80"
            >
              Pastelería
            </a>
            <a
              href="#menu"
              className="text-secondary font-medium hover:text-on-surface font-label tracking-tight py-1 transition-all duration-300"
            >
              Menú Ejecutivo
            </a>
            <a
              href="#galeria"
              className="text-secondary font-medium hover:text-on-surface font-label tracking-tight py-1 transition-all duration-300"
            >
              Galería
            </a>
            <a
              href="#nosotros"
              className="text-secondary font-medium hover:text-on-surface font-label tracking-tight py-1 transition-all duration-300"
            >
              Nosotros
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`${WA_BASE}?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-container text-on-primary font-label px-6 py-2.5 rounded-full scale-95 active:scale-90 transition-transform shadow-sm text-sm font-semibold"
          >
            Hacé tu Pedido
          </a>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background gradient placeholder (replaces image) */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, #4a3f35 0%, #874c42 30%, #6b5e4f 60%, #30312e 100%)",
            }}
          />
          {/* Radial accents */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 50%, rgba(255,180,168,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(135,76,66,0.25) 0%, transparent 55%)",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-on-surface/40 z-10" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white tracking-tighter mb-8 leading-[0.9]">
            Todo Dulce by Andu.
            <span className="font-body italic font-normal text-4xl md:text-5xl block mt-4 text-surface-container-low">
              El toque urbano del sabor artesanal.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`${WA_BASE}?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-primary hover:bg-primary-container text-on-primary px-10 py-5 rounded-full font-label font-bold text-lg transition-all flex items-center gap-3 shadow-xl"
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>
              Pedir por WhatsApp
            </a>

            <a
              href="#menu"
              className="text-white font-body italic text-2xl hover:text-surface-container-low transition-colors"
            >
              Ver Menú Ejecutivo
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-white text-3xl">
            expand_more
          </span>
        </div>
      </header>

      {/* ─── Main Content ─── */}
      <main className="relative z-10 bg-surface">

        {/* ─── Bento Category Cards ─── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Pastelería Card — md:col-span-7 */}
            <div className="md:col-span-7 group relative overflow-hidden rounded-xl h-[600px] bg-surface-container-low">
              {/* Gradient image placeholder */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #c4756a 0%, #a46359 40%, #874c42 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 70%, #ffdad4 0%, transparent 55%), radial-gradient(circle at 80% 20%, #ffb4a8 0%, transparent 45%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <span className="font-label text-xs uppercase tracking-widest mb-4 block text-primary-container font-bold">
                  Artesanal
                </span>
                <h2 className="font-headline font-extrabold text-4xl mb-4">
                  Pastelería
                </h2>
                <p className="font-body italic text-xl text-surface-container-highest max-w-md mb-6">
                  Texturas que cuentan historias, desde clásicos reversionados
                  hasta creaciones de autor.
                </p>
                <a
                  href="#catalogo"
                  className="inline-block bg-white text-on-surface font-label px-8 py-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  Explorar Colección
                </a>
              </div>
            </div>

            {/* Menús Ejecutivos Card — md:col-span-5 */}
            <div className="md:col-span-5 group relative overflow-hidden rounded-xl h-[600px] bg-surface-container-low">
              {/* Gradient image placeholder */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #595f66 0%, #7e7362 40%, #4a3f35 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 60% 80%, #dde3eb 0%, transparent 55%), radial-gradient(circle at 20% 20%, #c1c7cf 0%, transparent 45%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <span className="font-label text-xs uppercase tracking-widest mb-4 block text-primary-container font-bold">
                  Urbano
                </span>
                <h2 className="font-headline font-extrabold text-4xl mb-4">
                  Menús Ejecutivos
                </h2>
                <p className="font-body italic text-xl text-surface-container-highest max-w-xs mb-6">
                  El equilibrio perfecto para tu mediodía corporativo.
                </p>
                <a
                  href="#menu"
                  className="inline-block bg-white text-on-surface font-label px-8 py-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  Ver Menú Semanal
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Section Components ─── */}
        <Catalogo />
        <MenuEjecutivo />
        <Galeria />
        <Nosotros />
        <Footer />
      </main>
    </>
  );
}
