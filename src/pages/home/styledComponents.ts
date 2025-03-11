import styled from 'styled-components';

export const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 45dvh;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.colors.primary} 0%,
		#dc2626 100%
	);

	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	overflow: hidden;

	.container {
		z-index: 2;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}
`;

export const PokemonImages = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	img {
		user-select: none;
		width: auto;
		height: 300px;
		&:nth-child(1) {
			transform: rotate(-10deg) scaleX(-1) translateX(100px);
		}
		&:nth-child(2) {
			transform: scale(0.7) translateY(180px);
		}
		&:nth-child(3) {
			transform: rotate(10deg) translateX(100px);
		}
	}
`;
