import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
});

export const metadata = {
  title: "Home - Elyas B",
  description: "Portfolio of Elyas Belkhir, Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
