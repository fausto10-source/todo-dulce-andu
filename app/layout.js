import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata = {
  title: "Todo Dulce by Andu | Artesanal & Urbano",
  description:
    "Pastelería artesanal y menús ejecutivos en Córdoba. Tortas personalizadas, alfajores, cookies y combos con entrega a domicilio. Pedí por WhatsApp.",
  keywords: "pastelería artesanal, tortas personalizadas, alfajores, menú ejecutivo, Córdoba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${newsreader.variable} bg-surface text-on-surface font-body selection:bg-primary/20`}
      >
        {children}
      </body>
    </html>
  );
}
