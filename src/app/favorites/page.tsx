"use client";
import React, { useEffect, useState } from "react";
import { getFavorites } from "../../utils/pokemonFavs";
import PokemonCard from "../../components/PokemonCard";
import { fetchPokemonDetails, fetchPokemonEvolutions } from "../../services/pokeapi";

export default function FavoritosPage() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [evolutionsMap, setEvolutionsMap] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const favs = getFavorites();
    Promise.all(favs.map((name) => fetchPokemonDetails(name))).then(setPokemons);
  }, []);

  useEffect(() => {
    const fetchEvos = async () => {
      const entries = await Promise.all(
        pokemons.map(async (pokemon) => {
          const evolutions = await fetchPokemonEvolutions(pokemon.name);
          return [pokemon.name, evolutions];
        })
      );
      setEvolutionsMap(Object.fromEntries(entries));
    };
    if (pokemons.length > 0) fetchEvos();
  }, [pokemons]);

  return (
    <div className="min-h-screen bg-blue-50 text-black flex flex-col">
      <div className="w-full bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-center max-w-4xl mx-auto px-4 py-4 w-full">
          <h1 className="text-2xl font-bold text-blue-600 text-center w-full">
            Pokémons Favoritos
          </h1>
        </div>
      </div>
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
          {pokemons.length === 0 ? (
            <span className="col-span-full text-center text-gray-600">
              Nenhum favorito ainda.
            </span>
          ) : (
            pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                evolutions={evolutionsMap[pokemon.name] || []}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}