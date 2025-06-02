"use client";
import React, { useState } from "react";
import { FaStar, FaWhatsapp, FaInstagram } from "react-icons/fa";
import PokemonList from "../components/PokemonList";
import { pokemonTypes } from "../utils/pokemonTypes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between max-w-4xl mx-auto px-4 py-4 w-full">
          <span className="text-2xl font-bold text-blue-600 select-none">PokeWiki</span>
          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Buscar pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black bg-white"
            />
          </div>
          <button
            className="ml-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            onClick={() => {
              alert("Página de favoritos ainda não implementada!");
            }}
            aria-label="Ver favoritos"
          >
            <FaStar className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Filtro por tipo */}
      <div className="w-full bg-white">
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-1 rounded-full border-2 font-semibold transition-all
              ${selectedType === null
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"}
            `}
          >
            Todos
          </button>
          {Object.entries(pokemonTypes).map(([type, info]) => {
            const Icon = info.icon;
            const isSelected = selectedType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`
                  flex items-center gap-2 px-4 py-1 rounded-full border-2 font-semibold capitalize transition-all
                  ${info.border} ${info.text}
                  ${isSelected
                    ? `${info.bg} text-white`
                    : "bg-white hover:bg-blue-600 hover:text-white"}
                `}
              >
                <Icon className="text-base" />
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <main className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
        <PokemonList search={search} type={selectedType} />
      </main>

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
    </div>
  );
}