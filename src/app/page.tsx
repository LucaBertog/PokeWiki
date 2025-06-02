"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import PokemonList from "../components/PokemonList";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-10">
        <span className="text-2xl font-bold text-blue-600 select-none">PokeWiki</span>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Buscar pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          className="ml-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          onClick={() => {
            // Aqui você pode implementar a navegação para a página de favoritos futuramente
            alert("Página de favoritos ainda não implementada!");
          }}
          aria-label="Ver favoritos"
        >
          <FaStar className="text-2xl" />
        </button>
      </header>

      {/* Lista de Pokémons */}
      <main className="p-8">
        <PokemonList search={search} />
      </main>
    </div>
  );
}