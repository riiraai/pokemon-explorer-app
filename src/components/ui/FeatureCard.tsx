import Card from '@components/shared/Card';
import Typography from '@components/shared/Typography';
import styled from 'styled-components';

export const FeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.5rem;
	margin-top: 1rem;
	justify-content: center;
`;

const FeatureCardStyled = styled(Card)`
	flex: 1;

	@media (max-width: 768px) {
		flex: 1 1 100%;
	}
`;

const FeatureIcon = styled.div`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
}

export default function FeatureCard({
	icon,
	title,
	description,
}: FeatureCardProps) {
	return (
		<FeatureCardStyled>
			<FeatureIcon>{icon}</FeatureIcon>
			<Typography variant="h3" size="2xl" weight="bold">
				{title}
			</Typography>
			<Typography variant="p" size="base">
				{description}
			</Typography>
		</FeatureCardStyled>
	);
}
