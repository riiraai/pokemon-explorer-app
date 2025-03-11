import styled from 'styled-components';

const SectionStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 400px;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	padding: 4rem 0;
`;

export default function BaseSection({
	children,
	...props
}: {
	children: React.ReactNode;
	[key: string]: unknown;
}) {
	return <SectionStyled {...props}>{children}</SectionStyled>;
}
