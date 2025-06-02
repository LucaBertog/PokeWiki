"use client"

import React, { useEffect, useState } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokeapi';
import { Pokemon } from '../types';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC<{ search?: string; type?: string | null }> = ({ search = "", type = null }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [limit] = useState<number>(20);
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const loadPokemon = async () => {
            setLoading(true);
            const data = await fetchPokemonList(limit, offset);
            const results = (data as { results: { name: string }[] }).results;
            const details = await Promise.all(
                results.map((item: { name: string }) => fetchPokemonDetails(item.name))
            );
            setPokemonList((prev) => [...prev, ...(details as Pokemon[])]);
            setLoading(false);
        };

        loadPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, limit]);

    const loadMore = () => {
        setOffset((prev) => prev + limit);
    };

    const toggleFavorite = (pokemonName: string) => {
        setFavorites((prev) =>
            prev.includes(pokemonName)
                ? prev.filter((name) => name !== pokemonName)
                : [...prev, pokemonName]
        );
    };

    const getEvolutionsFor = (pokemon: Pokemon) => {
        // Lógica para obter as evoluções de um Pokémon
        return [];
    };

    const filteredList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
        (type ? pokemon.types.some((t: any) => t.type.name === type) : true)
    );

    return (
        <div>
            {loading && pokemonList.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
                    {filteredList.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemon={pokemon}
                            isFavorite={favorites.includes(pokemon.name)}
                            onToggleFavorite={toggleFavorite}
                            evolutions={getEvolutionsFor(pokemon)}
                        />
                    ))}
                </div>
            )}
            <button
                onClick={loadMore}
                disabled={loading}
                className="mt-8 mx-auto block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Carregando..." : "Carregar mais"}
            </button>
        </div>
    );
};

export default PokemonList;