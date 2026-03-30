const WA_BASE = "https://wa.me/5493513569171";

const navLinks = [
  { label: "Pastelería", href: "#catalogo" },
  { label: "Menú Ejecutivo", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: `${WA_BASE}?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82`,
    icon: "chat",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "photo_camera",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-outline-variant/40">

          {/* Column 1: Brand + description + socials */}
          <div>
            <div className="font-headline font-extrabold text-2xl text-on-surface tracking-tighter mb-4">
              Todo Dulce by Andu
            </div>
            <p className="font-body italic text-secondary text-base leading-relaxed mb-6 max-w-xs">
              Pastelería artesanal y menús ejecutivos hechos con amor, precisión
              y mucho dulce de leche. Córdoba, Argentina.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explorar links */}
          <div>
            <h3 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs mb-6">
              Explorar
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-label text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacto & Envíos */}
          <div>
            <h3 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs mb-6">
              Contacto &amp; Envíos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
                <div>
                  <p className="font-label text-sm font-semibold text-on-surface">
                    WhatsApp
                  </p>
                  <a
                    href={`${WA_BASE}?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%8E%82`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body italic text-secondary text-sm hover:text-primary transition-colors"
                  >
                    +54 9 351 356-9171
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
                <div>
                  <p className="font-label text-sm font-semibold text-on-surface">
                    Horarios de atención
                  </p>
                  <p className="font-body italic text-secondary text-sm">
                    Mar–Dom · 09:00–20:00
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  directions_bike
                </span>
                <div>
                  <p className="font-label text-sm font-semibold text-on-surface">
                    Envíos
                  </p>
                  <p className="font-body italic text-secondary text-sm">
                    A domicilio en bicicleta — zona Córdoba ciudad
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  storefront
                </span>
                <div>
                  <p className="font-label text-sm font-semibold text-on-surface">
                    Retiro en cocina
                  </p>
                  <p className="font-body italic text-secondary text-sm">
                    Consultá dirección por WhatsApp
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-label text-xs text-on-surface-variant">
            © 2024 Todo Dulce by Andu. Todos los derechos reservados.
          </p>
          <p className="font-body italic text-xs text-outline">
            Hecho con amor artesanal en Córdoba, Argentina.
          </p>
        </div>

      </div>
    </footer>
  );
}
