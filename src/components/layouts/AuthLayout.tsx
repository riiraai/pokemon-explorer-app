import { Outlet } from 'react-router';
import BaseLayout from './BaseLayout';
import { useAuth } from '@contexts/AuthContext';
import { LogIn } from 'lucide-react';
import Loading from '@components/ui/Loading';
import styled from 'styled-components';
import Typography from '@components/shared/Typography';
import Button from '@components/shared/Button';

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100dvh - 140px);
	gap: 1rem;
`;

export default function AuthLayout() {
	const { user, openAuthModal, loading } = useAuth();

	return (
		<BaseLayout>
			{loading && (
				<LoadingContainer>
					<Loading text="Checking your credentials..." />
				</LoadingContainer>
			)}
			{!loading && user === null && (
				<div
					className="container"
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						height: 'calc(100dvh - 140px)',
						gap: '1rem',
					}}
				>
					<Typography variant="h1" align="center">
						Oops! Access Denied 🚫
					</Typography>
					<Typography variant="p">
						You need to login to access this page. Please sign in or
						sign up to continue.
					</Typography>
					<Button
						icon={<LogIn />}
						onClick={openAuthModal}
						bgColor="#fde047"
						hoverBg="#f9c74f"
						color="black"
					>
						Sign In / Sign Up
					</Button>
				</div>
			)}
			{!loading && user && <Outlet />}
		</BaseLayout>
	);
}
