import Button from '@components/shared/Button';
import Typography from '@components/shared/Typography';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<div
			className="container"
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100dvh',
				gap: '1rem',
			}}
		>
			<Typography variant="h1" align="center">
				Oops! You're Lost 🧐
			</Typography>
			<Typography variant="p">
				The page you're looking for doesn't exist. Please check the URL
				and try again.
			</Typography>
			<Button
				onClick={() => navigate('/')}
				bgColor="#fde047"
				hoverBg="#f9c74f"
				color="black"
			>
				Go to Homepage
			</Button>
		</div>
	);
}
