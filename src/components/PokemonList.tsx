"use client"

import React, { useEffect, useState } from 'react';
import { fetchPokemonList, fetchPokemonDetails, fetchPokemonEvolutions } from '../services/pokeapi';
import axios from 'axios';
import { Pokemon } from '../types';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC<{ search?: string; type?: string | null }> = ({ search = "", type = null }) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [limit] = useState<number>(20);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [evolutionsMap, setEvolutionsMap] = useState<Record<string, any[]>>({});

    useEffect(() => {
        const loadPokemon = async () => {
            setLoading(true);
            if (type) {
                const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
                const pokemonsRaw = (res.data as { pokemon: { pokemon: { name: string } }[] }).pokemon.map((p) => p.pokemon.name);
                // Remove duplicatas
                const pokemons = Array.from(new Set(pokemonsRaw));
                const paginated = pokemons.slice(offset, offset + limit);
                const details = await Promise.all(paginated.map((name: string) => fetchPokemonDetails(name)));
                setPokemonList(prev =>
                    offset === 0 ? details as Pokemon[] : [...prev, ...details as Pokemon[]]
                );
            } else {
                const data = await fetchPokemonList(limit, offset);
                const results = (data as { results: { name: string }[] }).results;
                const details = await Promise.all(results.map((item) => fetchPokemonDetails(item.name)));
                setPokemonList(prev =>
                    offset === 0 ? details as Pokemon[] : [...prev, ...details as Pokemon[]]
                );
            }
            setLoading(false);
        };

        loadPokemon();
    }, [type, offset, limit]);

    useEffect(() => {
        // Sempre que a lista de pokémons mudar, busca as evoluções
        const fetchEvos = async () => {
            const entries = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const evolutions = await fetchPokemonEvolutions(pokemon.name);
                    return [pokemon.name, evolutions];
                })
            );
            setEvolutionsMap(Object.fromEntries(entries));
        };
        if (pokemonList.length > 0) fetchEvos();
    }, [pokemonList]);

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
        return [];
    };

    const filteredList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {loading && pokemonList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <span className="text-blue-700 font-semibold text-lg">Carregando Pokémons...</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
                    {filteredList.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemon={pokemon}
                            evolutions={evolutionsMap[pokemon.name] || []}
                        />
                    ))}
                </div>
            )}
            <button
                onClick={loadMore}
                disabled={loading}
                className="mt-8 cursor-pointer mx-auto block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Carregando..." : "Carregar mais"}
            </button>
        </div>
    );
};

export default PokemonList;