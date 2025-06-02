import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 20, offset = 0) => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
};

export const fetchPokemonDetails = async (pokemonName: string) => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for Pokémon ${pokemonName}:`, error);
        throw error;
    }
};