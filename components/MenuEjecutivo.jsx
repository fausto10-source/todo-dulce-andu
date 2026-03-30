import menuData from "@/data/menu.json";

const WA_BASE = "https://wa.me/5493513569171";

const courseConfig = [
  {
    key: "entrada",
    label: "Entrada",
    icon: "soup_kitchen",
    accentClass: "text-tertiary",
    bgClass: "bg-tertiary-fixed/30",
  },
  {
    key: "principal",
    label: "Principal",
    icon: "restaurant",
    accentClass: "text-primary",
    bgClass: "bg-primary-fixed/30",
  },
  {
    key: "postre",
    label: "Postre",
    icon: "cake",
    accentClass: "text-on-tertiary-fixed-variant",
    bgClass: "bg-tertiary-fixed-dim/30",
  },
];

export default function MenuEjecutivo() {
  return (
    <section id="menu" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
            De lunes a viernes
          </span>
          <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mt-4 tracking-tighter">
            Menú Ejecutivo
          </h2>
          <p className="font-body italic text-xl text-secondary mt-4 max-w-xl">
            Cocina de autor para tu pausa del mediodía. Cambia cada semana,
            siempre artesanal.
          </p>
        </div>

        {/* Menu cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {menuData.map((day) => (
            <div
              key={day.dia}
              className="bg-surface-container-low rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(27,28,25,0.06)] hover:shadow-[0_20px_50px_rgba(27,28,25,0.10)] transition-shadow flex flex-col"
            >
              {/* Card header */}
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <h3 className="font-headline font-extrabold text-lg text-on-primary tracking-tight">
                  {day.dia}
                </h3>
                <span className="font-label font-bold text-primary-fixed text-sm bg-on-primary/10 px-3 py-1 rounded-full">
                  {day.precio}
                </span>
              </div>

              {/* Courses */}
              <div className="flex flex-col divide-y divide-outline-variant/40 flex-1">
                {courseConfig.map((course) => {
                  const item = day[course.key];
                  return (
                    <div key={course.key} className="px-5 py-4">
                      {/* Course label */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${course.bgClass} mb-3`}>
                        <span
                          className={`material-symbols-outlined text-sm ${course.accentClass}`}
                          style={{ fontVariationSettings: "'FILL' 1, 'opsz' 20" }}
                        >
                          {course.icon}
                        </span>
                        <span className={`font-label text-xs font-bold uppercase tracking-widest ${course.accentClass}`}>
                          {course.label}
                        </span>
                      </div>

                      {/* Dish info */}
                      <p className="font-label font-semibold text-on-surface text-sm leading-snug mb-1">
                        {item.nombre}
                      </p>
                      <p className="font-body italic text-secondary text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-surface-container-low rounded-xl p-10 shadow-[0_10px_30px_rgba(27,28,25,0.06)]">
          <span
            className="material-symbols-outlined text-4xl text-primary mb-4 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lunch_dining
          </span>
          <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-2 tracking-tight">
            ¿Querés reservar tu menú?
          </h3>
          <p className="font-body italic text-secondary text-base max-w-md mx-auto mb-6">
            Pedí el día que querés, coordinamos entrega o retiro. Incluye
            entrada, principal y postre.
          </p>
          <a
            href={`${WA_BASE}?text=Hola!%20Quiero%20reservar%20un%20men%C3%BA%20ejecutivo%20%F0%9F%8D%BD%20%C2%BFPod%C3%A9s%20contarme%20los%20d%C3%ADas%20disponibles%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label font-bold px-10 py-4 rounded-full transition-colors shadow-[0_10px_30px_rgba(135,76,66,0.25)]"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
