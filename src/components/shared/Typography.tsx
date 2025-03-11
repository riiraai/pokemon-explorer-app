import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

// Font size mappings
const fontSizes = {
	xs: { fontSize: '0.75rem' },
	sm: { fontSize: '0.875rem' },
	base: { fontSize: '1rem' },
	lg: { fontSize: '1.125rem' },
	xl: { fontSize: '1.25rem' },
	'2xl': { fontSize: '1.5rem' },
	'3xl': { fontSize: '1.875rem' },
	'4xl': { fontSize: '2.25rem' },
	'5xl': { fontSize: '3rem' },
	'6xl': { fontSize: '3.75rem' },
	'7xl': { fontSize: '4.5rem' },
	'8xl': { fontSize: '6rem' },
	'9xl': { fontSize: '8rem' },
} as const;

// Line height mappings
const lineHeights = {
	none: '1',
	tight: '1.25',
	snug: '1.375',
	normal: '1.5',
	relaxed: '1.625',
	loose: '2',
} as const;

// Default sizes for HTML elements
const defaultSizes = {
	h1: '5xl',
	h2: '4xl',
	h3: '3xl',
	h4: '2xl',
	h5: 'xl',
	h6: 'lg',
	p: 'base',
	span: 'base',
	div: 'base',
} as const;

type VariantType = keyof typeof defaultSizes;
type SizeType = keyof typeof fontSizes;
type LineHeightType = keyof typeof lineHeights;
type AlignType = 'left' | 'center' | 'right' | 'justify';
type TransformType = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
type DecorationType = 'none' | 'underline' | 'line-through';
type FontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | number;

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	variant?: VariantType;
	size?: SizeType;
	lineHeight?: LineHeightType;
	color?: string;
	weight?: FontWeight;
	align?: AlignType;
	transform?: TransformType;
	decoration?: DecorationType;
	italic?: boolean;
	className?: string;
	children?: React.ReactNode;
}

const StyledTypography = styled.div.attrs<TypographyProps>(({ variant }) => ({
	as: variant, // Menggunakan as prop agar bisa berubah sesuai variant
}))<TypographyProps>`
	margin: 0;

	${(props) => {
		const size =
			props.size ||
			(props.variant && defaultSizes[props.variant]) ||
			'base';
		const styles = fontSizes[size];
		return `
			font-size: ${styles.fontSize};
			line-height: ${lineHeights[props.lineHeight ?? 'normal']};
		`;
	}}
	${(props) => props.color && `color: ${props.color};`}
	${(props) => props.weight && `font-weight: ${props.weight};`}
	${(props) => props.align && `text-align: ${props.align};`}
	${(props) => props.transform && `text-transform: ${props.transform};`}
	${(props) => props.decoration && `text-decoration: ${props.decoration};`}
	${(props) => props.italic && 'font-style: italic;'}
`;

const Typography = ({
	variant = 'p',
	size,
	color,
	weight,
	align,
	transform,
	decoration,
	italic,
	className,
	children,
	...restProps
}: TypographyProps): React.ReactElement => {
	return (
		<StyledTypography
			variant={variant}
			size={size}
			color={color}
			weight={weight}
			align={align}
			transform={transform}
			decoration={decoration}
			italic={italic}
			className={className}
			{...restProps}
		>
			{children}
		</StyledTypography>
	);
};

export default Typography;
