const stats = [
  {
    value: "3+",
    label: "años horneando en el barrio",
    icon: "storefront",
  },
  {
    value: "India",
    label: "la escuela que no se planea",
    icon: "travel_explore",
  },
  {
    value: "Jorgito",
    label: "delivery oficial desde siempre",
    icon: "directions_bike",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── Text Column ─── */}
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Quiénes somos
            </span>
            <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mt-4 mb-8 tracking-tighter">
              Nosotros
            </h2>

            {/* Story paragraphs */}
            <div className="space-y-5 mb-10">
              <p className="font-body text-on-surface text-lg leading-relaxed">
                Todo empezó con Andrea — <em>Andu</em> para todos — y una
                cocina chica en el corazón del barrio. Pastelera de alma,
                inquieta de espíritu, un día empacó todo y se fue a vivir un
                año a{" "}
                <strong className="font-semibold text-primary">
                  Rajastán, India
                </strong>
                . No para aprender recetas de curry —eso quedó claro desde el
                principio—, sino para entender lo que las especias le hacen al
                tiempo, la textura y la paciencia.
              </p>
              <p className="font-body italic text-secondary text-lg leading-relaxed">
                De ese viaje volvió con una mirada distinta sobre los sabores:
                más precisa, más audaz, con ese equilibrio que solo te da
                pararte en el medio del mundo y ver todo desde lejos. La
                pastelería siguió siendo argentina, artesanal, urbana. Pero
                algo en la mano cambió.
              </p>
              <p className="font-body text-on-surface text-lg leading-relaxed">
                Hoy, cada torta sale de esa misma cocina. Cada alfajor lleva la
                misma atención que una pieza única. Y los pedidos llegan en
                bicicleta, de la mano de{" "}
                <strong className="font-semibold text-primary">Jorgito</strong>
                , su novio, que convirtió el delivery en un arte de puntualidad
                y buena onda.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-10">
              <p className="font-body italic text-xl text-on-surface leading-relaxed mb-3">
                "No somos solo una pastelería. Somos el refugio donde lo dulce
                encuentra su mejor versión urbana."
              </p>
              <cite className="font-label text-sm text-secondary not-italic font-semibold">
                — Andrea "Andu" Benítez
              </cite>
            </blockquote>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="bg-surface-container-low rounded-xl p-5 text-center shadow-[0_10px_30px_rgba(27,28,25,0.06)]"
                >
                  <span
                    className="material-symbols-outlined text-2xl text-primary mb-2 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {stat.icon}
                  </span>
                  <p className="font-headline font-extrabold text-xl text-primary tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="font-label text-xs text-secondary mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Visual Column ─── */}
          <div className="relative flex items-center justify-center min-h-[520px]">
            {/* Main portrait card */}
            <div
              className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(27,28,25,0.15)]"
              style={{ transform: "rotate(2deg)" }}
            >
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #c4756a 0%, #874c42 40%, #6b5e4f 75%, #30312e 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 35% 60%, #ffdad4 0%, transparent 55%), radial-gradient(circle at 75% 25%, #ffb4a8 0%, transparent 45%)",
                }}
              />

              {/* Centered icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60">
                <span
                  className="material-symbols-outlined text-7xl mb-3"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  person
                </span>
                <p className="font-label text-xs uppercase tracking-widest">
                  Foto de Andu próximamente
                </p>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-on-surface/50 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute bottom-8 -left-4 bg-surface rounded-xl p-5 shadow-[0_10px_30px_rgba(27,28,25,0.12)]"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div
                className="w-20 h-20 rounded-lg mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #d4a574 0%, #b8895a 100%)",
                }}
              />
              <p className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">
                La cocina
              </p>
              <p className="font-body italic text-secondary text-xs">
                Donde todo nace
              </p>
            </div>

            {/* Floating chip — Rajastán */}
            <div className="absolute top-6 -right-2 bg-primary text-on-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                travel_explore
              </span>
              <span className="font-label text-xs font-bold">
                Rajastán, India
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
