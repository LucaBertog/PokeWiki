"use client"
import './globals.css'
import React from "react";
import { FaStar, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-blue-50 text-black flex flex-col">
        <header className="bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center justify-between max-w-4xl mx-auto px-4 py-4 w-full">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="text-2xl font-bold text-blue-600 select-none bg-transparent border-none p-0 m-0 cursor-pointer"
              style={{ background: "none" }}
              aria-label="Ir para a página inicial"
            >
              PokeWiki
            </button>
            <div className="flex-1 flex justify-center">
            </div>
            <button
              className="ml-4 cursor-pointer flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              onClick={() => router.push("/favorites")}
              aria-label="Ver favoritos"
            >
              <FaStar className="text-2xl" />
            </button>
          </div>
        </header>
        {children}
        <footer className="mt-auto w-full bg-gray-100 border-t py-6 flex flex-col items-center gap-4">
          <span className="text-sm text-gray-700 font-medium text-center">
            Desenvolvido por Lucas Bertoli para Case
          </span>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://wa.me/5541991295522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/lucabertog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:brightness-110 transition"
            >
              <FaInstagram className="text-lg" />
              Instagram
            </a>
            <a
              href="https://lucabertog.bio.link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              <span className="font-bold">Bio.link</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}