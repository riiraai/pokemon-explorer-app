import useFetch from '@hooks/useFetch';
import { Pokemon, PokemonListResponse } from '../types/pokemonApiType';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const usePokemonList = (offset = 0, limit = 10) => {
	const cacheKey = `pokemon-list-${offset}-${limit}`;
	const url = `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`;
	return useFetch<PokemonListResponse>(url, { cacheKey });
};

export const usePokemonByName = (name: string, options: { skip?: boolean } = {}) => {
	const cacheKey = `pokemon-name-${name}`;
	const url = `${BASE_URL}/pokemon/${name}`;
	return useFetch<Pokemon>(url, { cacheKey, skip: options.skip });
};