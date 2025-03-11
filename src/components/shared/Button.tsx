import styled from 'styled-components';
import { ReactNode, ReactElement } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	bgColor?: string;
	color?: string;
	size?: 'small' | 'medium' | 'large';
	borderRadius?: string;
	hoverBg?: string;
	iconSize?: string;
	children: ReactNode;
	icon?: ReactNode;
	onClick?: () => void;
	style?: React.CSSProperties;
	hideContentOnMobile?: boolean;
}

const sizes = {
	small: '0.25rem 0.5rem',
	medium: '0.5rem 1rem',
	large: '1rem 2rem',
};

const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ bgColor, theme }) =>
		bgColor || `${theme.colors.white}`};
	color: ${({ color, theme }) => color || `${theme.colors.text}`};
	padding: ${({ size }) => sizes[size || 'medium']};
	border-radius: ${({ borderRadius }) => borderRadius || '8px'};
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	min-height: 24px;
	scale: 0.9;
	transition: scale 0.2s linear, background-color 0.2s linear;

	&:hover {
		background-color: ${({ hoverBg }) => hoverBg || '#f0f0f0'};
		scale: 1;
	}

	&:active {
		scale: 0.9;
	}

	& svg {
		width: ${({ iconSize }) => iconSize || '1.25rem'};
		height: ${({ iconSize }) => iconSize || '1.25rem'};
		stroke-width: 2.5;
	}

	${({ hideContentOnMobile }) =>
		hideContentOnMobile &&
		`
		@media (max-width: 768px) {
			& .content {
				display: none;
			}
		}
	`}

	&:disabled {
		user-select: none;
		pointer-events: none;
		background-color: ${({ theme }) => theme.colors.lightGray};
		color: ${({ theme }) => theme.colors.darkGray};
		cursor: not-allowed;
	}
`;

const Button = ({
	children,
	icon,
	size = 'medium',
	style,
	hideContentOnMobile,
	className,
	...props
}: ButtonProps): ReactElement => {
	return (
		<StyledButton
			size={size}
			style={style}
			hideContentOnMobile={hideContentOnMobile}
			className={className}
			{...props}
		>
			{icon && icon}
			<div className="content">{children}</div>
		</StyledButton>
	);
};

export default Button;
