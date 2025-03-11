export interface Pokemon {
	id: number;
	name: string;
	sprites: {
		front_default: string;
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
	types: {
		type: {
			name: string;
		};
	}[];
	height: number;
	weight: number;
	abilities: {
		ability: {
			name: string;
		};
	}[];
	stats: {
		base_stat: number;
		stat: {
			name: string;
		};
	}[];
}

export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}
