import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router';
import { HeroSection, PokemonImages } from './styledComponents';
import Typography from '@components/shared/Typography';
import Button from '@components/shared/Button';
import BaseSection from '@components/shared/BaseSection';
import FeatureCard, { FeatureContainer } from '@components/ui/FeatureCard';
import Card from '@components/shared/Card';

export default function HomePage() {
	const navigate = useNavigate();
	const { user, openAuthModal } = useAuth();

	return (
		<>
			<HeroSection id="jumbotron" style={{ position: 'relative' }}>
				<div className="container">
					<Typography variant="h1" size="5xl" weight="bold">
						Discover the World of Pokémon
					</Typography>
					<Typography variant="p" size="lg">
						Explore hundreds of Pokémon species, their abilities,
						types, and evolutions in our comprehensive Pokémon
						database.
					</Typography>
					{!user && (
						<Button
							size="large"
							style={{ marginTop: '2rem' }}
							onClick={openAuthModal}
						>
							Get Started
						</Button>
					)}
				</div>
				<PokemonImages>
					<img src="./images/pikachu.png" alt="Pikachu" />
					<img src="./images/bulbasaur.png" alt="Bulbasaur" />
					<img src="./images/charmander.png" alt="Charmander" />
				</PokemonImages>
			</HeroSection>
			<BaseSection id="features">
				<div className="container">
					<Typography
						variant="h2"
						size="4xl"
						weight="bold"
						align="center"
					>
						Features of PokéExplorer
					</Typography>
					<Typography variant="p" size="lg" align="center">
						Discover the features that make PokéExplorer the best
						place to learn about Pokémon.
					</Typography>
					<FeatureContainer>
						<FeatureCard
							icon="🔍"
							title="Explore Pokémon"
							description="Browse through hundreds of Pokémon and discover their unique characteristics and abilities."
						/>
						<FeatureCard
							icon="📊"
							title="View Stats"
							description="Get detailed information about each Pokémon's stats, abilities, and evolution chain."
						/>
						<FeatureCard
							icon="🎓"
							title="Become an Expert"
							description="Learn everything there is to know about the world of Pokémon and become a true Pokémon master."
						/>
						<FeatureCard
							icon="🌍"
							title="Explore the World"
							description="Join us on a journey to discover Pokémon across different regions and environments."
						/>
					</FeatureContainer>
				</div>
			</BaseSection>
			<BaseSection id="cta">
				<div className="container">
					<Card
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							padding: '3rem',
						}}
					>
						<Typography
							variant="h2"
							size="4xl"
							weight="bold"
							align="center"
						>
							Ready to start your Pokémon journey?
						</Typography>
						<Typography variant="p" size="lg" align="center">
							Discover the features that make PokéExplorer the
							best place to learn about Pokémon.
						</Typography>
						{!user ? (
							<Button
								bgColor="#fde047"
								hoverBg="#f1c40f"
								color="#333"
								size="large"
								style={{
									marginTop: '2rem',
								}}
								onClick={openAuthModal}
							>
								Sign In to Get Started
							</Button>
						) : (
							<Button
								bgColor="#ef4444"
								hoverBg="#dc2626"
								color="#fff"
								size="large"
								style={{
									marginTop: '2rem',
								}}
								onClick={() => navigate('/pokedex')}
							>
								Start Your Pokémon Adventure
							</Button>
						)}
					</Card>
				</div>
			</BaseSection>
		</>
	);
}
