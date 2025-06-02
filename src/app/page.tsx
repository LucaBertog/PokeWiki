"use client";
import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import { pokemonTypes } from "../utils/pokemonTypes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-blue-50 text-black flex flex-col">
      <title>PokeWiki</title>

      <div className="w-full bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-center max-w-4xl mx-auto px-4 py-4 w-full">
          <input
            type="text"
            placeholder="Buscar pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black bg-white"
          />
        </div>
      </div>

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
    </div>
  );
}