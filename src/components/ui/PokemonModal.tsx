import styled from 'styled-components';
import { X } from 'lucide-react';
import { Pokemon } from 'src/types/pokemonApiType';
import { useMemo } from 'react';
import Typography from '@components/shared/Typography';
import Badge from '@components/shared/Badge';

interface PokemonModalProps {
	pokemon: Pokemon;
	isOpen: boolean;
	onClose: () => void;
}

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	z-index: 100;
`;

const ModalContainer = styled.div`
	background: white;
	border-radius: 8px;
	max-width: 40rem;
	width: 100%;
	position: relative;
	padding: 2rem;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	color: gray;
	&:hover {
		color: black;
	}
`;

const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Image = styled.img`
	width: 16rem;
	height: 16rem;
	object-fit: contain;
`;

const ID = styled.span`
	font-size: 1.25rem;
	color: gray;
`;

const StatBar = styled.div`
	height: 0.5rem;
	background: #e5e7eb;
	border-radius: 9999px;
	overflow: hidden;
	width: 100%;
`;

const StatFill = styled.div<{ width: number; value: number }>`
	height: 100%;
	background: ${(props) =>
		props.value >= 100
			? props.theme.typeColors.fighting
			: props.value > 50
			? props.theme.typeColors.electric
			: props.theme.typeColors.grass};
	width: ${(props) => props.width}%;
	border-radius: 9999px;
`;

export function PokemonModal({ pokemon, isOpen, onClose }: PokemonModalProps) {
	const stats = useMemo(
		() => ({
			HP: pokemon.stats[0].base_stat,
			Attack: pokemon.stats[1].base_stat,
			Defense: pokemon.stats[2].base_stat,
			'Sp. Attack': pokemon.stats[3].base_stat,
			'Sp. Defense': pokemon.stats[4].base_stat,
			Speed: pokemon.stats[5].base_stat,
		}),
		[pokemon.stats]
	);
	return (
		isOpen && (
			<Overlay>
				<ModalContainer>
					<CloseButton onClick={onClose}>
						<X size={24} />
					</CloseButton>
					<ContentContainer>
						<Image
							src={
								pokemon.sprites.other['official-artwork']
									.front_default
							}
							alt={pokemon.name}
						/>
						<div style={{ flex: 1 }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '1rem',
								}}
							>
								<Typography
									variant="h2"
									size="xl"
									transform="capitalize"
								>
									{pokemon.name}
								</Typography>
								<ID>#{String(pokemon.id).padStart(3, '0')}</ID>
							</div>
							<div
								style={{
									display: 'flex',
									gap: '0.5rem',
									marginTop: '0.5rem',
									marginBottom: '1.5rem',
								}}
							>
								{pokemon.types.map((type) => (
									<Badge
										type={type.type.name}
										key={type.type.name}
										text={type.type.name}
									/>
								))}
							</div>
							<Typography variant="h3" size="base">
								Base Stats
							</Typography>
							{Object.entries(stats).map(([stat, value]) => (
								<div
									key={stat}
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '0.5rem',
									}}
								>
									<Typography
										variant="span"
										size="sm"
										color="gray"
										style={{ width: '100%' }}
									>
										{stat}
									</Typography>
									<StatBar>
										<StatFill
											width={(Number(value) / 100) * 100}
											value={value}
										/>
									</StatBar>
									<Typography
										variant="span"
										size="sm"
										color="gray"
									>
										{value}
									</Typography>
								</div>
							))}
						</div>
					</ContentContainer>
				</ModalContainer>
			</Overlay>
		)
	);
}
