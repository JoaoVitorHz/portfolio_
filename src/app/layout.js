import "./globals.css";

import { Poppins } from "next/font/google";
import { Header } from "../components/header/Header";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Portfolio - João Vitor",
  description: "Portfolio de João Vitor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Coroa.png" sizes="any" />
      <body className={poppins.className + " bg-gray-50 overflow-x-hidden antialiased"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
