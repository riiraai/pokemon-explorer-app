import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	min-height: 200px;
`;

const Spinner = styled.div`
	width: 40px;
	height: 40px;
	border: 4px solid ${({ theme }) => theme.colors.lightGray};
	border-top: 4px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
	margin-top: 1rem;
	font-size: 1rem;
	font-weight: 600;
`;

interface LoadingProps {
	text?: string;
	className?: string;
	style?: React.CSSProperties;
}

export default function Loading({ text = 'Loading...', className, style }: LoadingProps) {
	return (
		<LoadingContainer className={className} style={style}>
			<Spinner />
			<LoadingText>{text}</LoadingText>
		</LoadingContainer>
	);
}
