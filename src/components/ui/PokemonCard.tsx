import styled from 'styled-components';
import Loading from './Loading';
import { usePokemonByName } from '@services/pokemonApiService';
import { PokemonModal } from './PokemonModal';
import { useState } from 'react';
import Card from '@components/shared/Card';

interface PokemonCardProps {
	name: string;
}

const PokemonImage = styled.img`
	width: 120px;
	height: 120px;
	margin-bottom: 1rem;
`;

const PokemonName = styled.h3`
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: var(--text-color);
`;

const TypeBadgeContainer = styled.div`
	display: flex;
	gap: 0.5rem;ƒ
	margin-top: 0.5rem;
`;

interface TypeBadgeProps {
	type: string;
}

const typeColors: { [key: string]: string } = {
	fire: 'rgba(240, 128, 48, 0.8)',
	water: 'rgba(104, 144, 240, 0.8)',
	grass: 'rgba(120, 200, 80, 0.8)',
	electric: 'rgba(248, 208, 48, 0.8)',
	psychic: 'rgba(248, 88, 136, 0.8)',
	ice: 'rgba(152, 216, 216, 0.8)',
	dragon: 'rgba(112, 56, 248, 0.8)',
	dark: 'rgba(112, 88, 72, 0.8)',
	fairy: 'rgba(238, 153, 172, 0.8)',
	normal: 'rgba(168, 168, 120, 0.8)',
	fighting: 'rgba(192, 48, 40, 0.8)',
	flying: 'rgba(168, 144, 240, 0.8)',
	poison: 'rgba(160, 64, 160, 0.8)',
	ground: 'rgba(224, 192, 104, 0.8)',
	rock: 'rgba(184, 160, 56, 0.8)',
	bug: 'rgba(168, 184, 32, 0.8)',
	ghost: 'rgba(112, 88, 152, 0.8)',
	steel: 'rgba(184, 184, 208, 0.8)',
	default: 'rgba(168, 168, 120, 0.8)',
};

const typeBackgroundColors: { [key: string]: string } = {
	fire: 'rgba(240, 128, 48, 0.1)',
	water: 'rgba(104, 144, 240, 0.1)',
	grass: 'rgba(120, 200, 80, 0.1)',
	electric: 'rgba(248, 208, 48, 0.1)',
	psychic: 'rgba(248, 88, 136, 0.1)',
	ice: 'rgba(152, 216, 216, 0.1)',
	dragon: 'rgba(112, 56, 248, 0.1)',
	dark: 'rgba(112, 88, 72, 0.1)',
	fairy: 'rgba(238, 153, 172, 0.1)',
	normal: 'rgba(168, 168, 120, 0.1)',
	fighting: 'rgba(192, 48, 40, 0.1)',
	flying: 'rgba(168, 144, 240, 0.1)',
	poison: 'rgba(160, 64, 160, 0.1)',
	ground: 'rgba(224, 192, 104, 0.1)',
	rock: 'rgba(184, 160, 56, 0.1)',
	bug: 'rgba(168, 184, 32, 0.1)',
	ghost: 'rgba(112, 88, 152, 0.1)',
	steel: 'rgba(184, 184, 208, 0.1)',
	default: 'rgba(168, 168, 120, 0.1)',
};

const TypeBadge = styled.span<TypeBadgeProps>`
	padding: 4px 8px;
	border-radius: 16px;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	color: ${(props) => typeColors[props.type] || typeColors.default};
	backdrop-filter: blur(4px);
	background-color: ${(props) =>
		typeBackgroundColors[props.type] || typeBackgroundColors.default};
`;

export default function PokemonCard({ name }: PokemonCardProps) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { data: pokemon, error, isLoading } = usePokemonByName(name);

	if (isLoading || error || !pokemon) {
		return (
			<Card elevated={false} padding="16px">
				<Loading text="" />
			</Card>
		);
	}

	return (
		<>
			<Card
				elevated={false}
				clickable
				onClick={() => setIsModalOpen(true)}
			>
				<PokemonImage
					src={
						pokemon.sprites.other['official-artwork']
							.front_default || pokemon.sprites.front_default
					}
					alt={pokemon.name}
				/>
				<PokemonName>{pokemon.name}</PokemonName>
				<TypeBadgeContainer>
					{pokemon.types.map((typeInfo) => (
						<TypeBadge
							key={typeInfo.type.name}
							type={typeInfo.type.name}
						>
							{typeInfo.type.name}
						</TypeBadge>
					))}
				</TypeBadgeContainer>
			</Card>
			<PokemonModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				pokemon={pokemon}
			/>
		</>
	);
}
