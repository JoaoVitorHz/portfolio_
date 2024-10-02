import "./globals.css";

import { Poppins } from "next/font/google";

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
        <header className="fixed top-0 w-screen h-[70px]  bg-white shadow-md">
          <div className="w-[80%] h-full m-auto flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">João Vitor</h1>
            </div>
            <nav className="flex gap-5 font-bold">
                <a href="#home" className="font-semibold hover:text-[#147efb] transition">Home</a>
                <a href="#aboutMe" className="font-semibold hover:text-[#147efb] transition">About Me</a>
                <a href="#experience" className="font-semibold hover:text-[#147efb] transition">Experience</a>
                <a href="#projects" className="font-semibold hover:text-[#147efb] transition">Projects</a>
                <a href="#technologies" className="font-semibold hover:text-[#147efb] transition">Skills</a>
                <a href="#footer" className="font-semibold hover:text-[#147efb] transition">Contact</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
