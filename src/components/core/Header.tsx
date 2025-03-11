import Button from '@components/shared/Button';
import { useAuth } from '@contexts/AuthContext';
import { BookHeart, Home, LogIn, LogOut, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	height: var(--header-height);
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 1rem 0;
	position: sticky;
	top: 0;
	z-index: 100;

	.container {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`;

export default function Header() {
	const navigate = useNavigate();
	const { user, signOut, openAuthModal } = useAuth();

	return (
		<HeaderContainer>
			<div className="container">
				<Logo to="/">
					<Zap color="#fde047" strokeWidth="2.5" />
					PokéExplorer
				</Logo>
				<Nav>
					<Button
						icon={<Home />}
						onClick={() => navigate('/')}
						hideContentOnMobile
					>
						Home
					</Button>
					{user ? (
						<>
							<Button
								icon={<BookHeart />}
								onClick={() => navigate('/pokedex')}
								hideContentOnMobile
							>
								Pokédex
							</Button>
							<Button
								icon={<LogOut />}
								onClick={signOut}
								bgColor="#fde047"
								hoverBg="#f9c74f"
								color="black"
								hideContentOnMobile
							>
								Sign Out
							</Button>
						</>
					) : (
						<Button
							icon={<LogIn />}
							onClick={openAuthModal}
							bgColor="#fde047"
							hoverBg="#f9c74f"
							color="black"
							hideContentOnMobile
						>
							Sign In
						</Button>
					)}
				</Nav>
			</div>
		</HeaderContainer>
	);
}
