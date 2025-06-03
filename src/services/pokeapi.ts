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

export const fetchPokemonEvolutions = async (pokemonName: string) => {
  const detailsRes = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${pokemonName}`);
  const details = detailsRes.data as { species: { url: string } };

  const speciesRes = await axios.get(details.species.url);
  const species = speciesRes.data as { evolution_chain: { url: string } };

  const evolutionChainRes = await axios.get(species.evolution_chain.url);
  const evolutionChain = evolutionChainRes.data as {
    chain: any;
  };

  const evolutions: string[] = [];
  let evoData = evolutionChain.chain;
  do {
    evolutions.push(evoData.species.name.toLowerCase());
    evoData = evoData.evolves_to[0];
  } while (evoData && evoData.hasOwnProperty("evolves_to"));

  const evolutionDetails = await Promise.all(
    evolutions.map(async (name) => {
      try {
        const res = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
        return res.data;
      } catch (error) {
        return null;
      }
    })
  );

  // Remove evoluções não encontradas (null)
  return evolutionDetails.filter(Boolean);
};