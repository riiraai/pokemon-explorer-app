import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '@contexts/AuthContext';
import styled from 'styled-components';
import TextField from '@components/shared/TextField';

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

const Modal = styled.div`
	background: white;
	border-radius: 0.5rem;
	padding: 2rem;
	max-width: 28rem;
	width: 100%;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	color: #6b7280;
	&:hover {
		color: #374151;
	}
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.div`
	background: #fef2f2;
	border: 1px solid #fca5a5;
	color: #b91c1c;
	padding: 0.75rem 1rem;
	border-radius: 0.375rem;
	margin-bottom: 1rem;
`;

const Form = styled.form``;

const FormGroup = styled.div`
	margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	padding: 0.5rem;
	border-radius: 0.375rem;
	&:hover {
		background: #dc2626;
		transition: background 0.2s;
	}

	&:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
`;

const ToggleText = styled.p`
	margin-top: 1rem;
	text-align: center;
	font-size: 0.875rem;
	color: #6b7280;
`;

const ToggleButton = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	&:hover {
		color: #dc2626;
	}
`;

export function AuthModal() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { signIn, signUp, isAuthModalOpen, closeAuthModal, loading } = useAuth();

	if (!isAuthModalOpen) return null;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		try {
			if (isSignUp) {
				await signUp(email, password);
			} else {
				await signIn(email, password);
			}
			closeAuthModal();
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('An unknown error occurred');
			}
		}
	};

	return (
		<Overlay>
			<Modal>
				<CloseButton onClick={closeAuthModal}>
					<X size={24} />
				</CloseButton>
				<Title>{isSignUp ? 'Create Account' : 'Sign In'}</Title>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<TextField
							label="Email"
							name="email"
							type="email"
							placeholder="your.email@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</FormGroup>
					<FormGroup>
						<TextField
							label="Password"
							name="password"
							type="password"
							placeholder="********"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</FormGroup>
					<SubmitButton type="submit" disabled={loading}>
						{loading
							? 'Loading...'
							: isSignUp
							? 'Sign Up'
							: 'Sign In'}
					</SubmitButton>
				</Form>

				<ToggleText>
					{isSignUp
						? 'Already have an account?'
						: "Don't have an account?"}{' '}
					<ToggleButton onClick={() => setIsSignUp(!isSignUp)}>
						{isSignUp ? 'Sign In' : 'Sign Up'}
					</ToggleButton>
				</ToggleText>
			</Modal>
		</Overlay>
	);
}
