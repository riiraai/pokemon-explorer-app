import Typography from '@components/shared/Typography';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	padding: 1rem 0;

	.container {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			img {
				height: 1.5rem;
			}
		}

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: start;
			gap: 1rem;
		}
	}
`;

export default function Footer() {
	return (
		<FooterContainer>
			<div className="container">
				<div className="">
					<Typography variant="p" size="sm">
						Pokémon Explorer App - ReactJS, TypeScript, Styled Components .
					</Typography>
					<Typography variant="p" size="sm">
						A project by
						<a
							href="https://github.com/riiraai"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: 'inline',
								marginInline: '0.3rem',
								textDecoration: 'underline',
							}}
						>
							<strong>Ari Saputra</strong>
						</a>
						for an online test system for the hiring process at PT.
						Digdaya Olah Teknologi (DOT) Indonesia.
					</Typography>
				</div>
				<a
					href="https://pokeapi.co/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Typography variant="span" size="sm">
						Data provided by{' '}
					</Typography>
					<img src="./images/pokeapi_256.png" alt="PokeAPI" />
				</a>
			</div>
		</FooterContainer>
	);
}
