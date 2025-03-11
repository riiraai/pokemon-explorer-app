import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	padding?: string;
	elevated?: boolean;
	onClick?: () => void;
	clickable?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

const StyledCard = styled.div<Omit<CardProps, 'children'>>`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 12px;
	padding: ${(props) => props.padding || '20px'};
	box-shadow: ${(props) =>
		props.elevated
			? '0 8px 16px rgba(0, 0, 0, 0.1)'
			: '0 2px 4px rgba(0, 0, 0, 0.05)'};
	transition: all 0.3s ease;
	cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};

	&:hover {
		transform: ${(props) =>
			props.clickable ? 'translateY(-4px)' : 'none'};
		box-shadow: ${(props) =>
			props.clickable
				? '0 12px 20px rgba(0, 0, 0, 0.15)'
				: props.elevated
				? '0 8px 16px rgba(0, 0, 0, 0.1)'
				: '0 2px 4px rgba(0, 0, 0, 0.05)'};
	}
`;

export default function Card({
	children,
	padding,
	elevated = false,
	onClick,
	clickable = false,
	style,
	className,
}: CardProps): React.ReactElement {
	return (
		<StyledCard
			padding={padding}
			elevated={elevated}
			onClick={onClick}
			clickable={clickable || !!onClick}
			className={className}
			style={style}
		>
			{children}
		</StyledCard>
	);
}
