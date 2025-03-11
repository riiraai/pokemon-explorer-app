import Button from '@components/shared/Button';
import TextField from '@components/shared/TextField';
import Typography from '@components/shared/Typography';
import Loading from '@components/ui/Loading';
import PokemonCard from '@components/ui/PokemonCard';
import useDebounce from '@hooks/useDebounce';
import { usePokemonByName, usePokemonList } from '@services/pokemonApiService';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
	padding-top: 2rem;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContentContainer = styled.div``;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.5rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonStyled = styled(Button)`
	margin-top: 1rem;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	border: none;

	&:hover {
		background: ${({ theme }) => theme.colors.primaryDark};
	}

	& .content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function PokedexPage() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [offset, setOffset] = useState<number>(0);
	const [limit] = useState<number>(8);
	const { data: pokemonList, isLoading } = usePokemonList(offset, limit);
	const debouncedSearchTerm = useDebounce(searchTerm.toLowerCase(), 500);
	const { data: filteredPokemonList } = usePokemonByName(
		debouncedSearchTerm,
		{
			skip: debouncedSearchTerm.length === 0,
		}
	);

	const handleNext = () => {
		setOffset((prev) => prev + limit);
	};

	const handlePrevious = () => {
		setOffset((prev) => Math.max(prev - limit, 0));
	};

	return (
		<ContainerStyled className="container">
			<HeaderContainer>
				<Typography variant="h1" size="3xl" weight="bold">
					Pokédex
				</Typography>
				<Typography variant="p" size="base">
					Here you can find a list of all the Pokémon species.
				</Typography>
			</HeaderContainer>
			<TextField
				name="search"
				type="search"
				placeholder="Search Pokémon by name"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ContentContainer>
				{isLoading && <Loading />}
				{searchTerm && filteredPokemonList && (
					<div
						className="search-result"
						style={{ marginBottom: '1rem' }}
					>
						<Typography variant="h2" size="2xl" weight="bold">
							Search Result
						</Typography>
						{filteredPokemonList && (
							<Grid>
								<PokemonCard
									key={filteredPokemonList.name}
									name={filteredPokemonList.name}
								/>
							</Grid>
						)}
					</div>
				)}

				<div className="pokemon-list">
					{searchTerm.length > 0 && (
						<Typography variant="h2" size="2xl" weight="bold">
							Pokémon List
						</Typography>
					)}
					{!isLoading && pokemonList && (
						<Grid>
							{pokemonList.results.length > 0 ? (
								pokemonList.results.map((pokemon) => (
									<PokemonCard
										key={pokemon.name}
										name={pokemon.name}
									/>
								))
							) : (
								<Typography variant="p" size="base">
									No Pokémon found.
								</Typography>
							)}
						</Grid>
					)}
				</div>
			</ContentContainer>
			<ButtonContainer>
				<ButtonStyled
					onClick={handlePrevious}
					disabled={offset === 0 || isLoading}
				>
					<ChevronLeft />
					Previous
				</ButtonStyled>
				<ButtonStyled onClick={handleNext} disabled={isLoading}>
					Next
					<ChevronRight />
				</ButtonStyled>
			</ButtonContainer>
		</ContainerStyled>
	);
}
