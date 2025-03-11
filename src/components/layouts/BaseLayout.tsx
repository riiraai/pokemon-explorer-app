import styled from 'styled-components';
import Header from '@components/core/Header';
import Footer from '@components/core/Footer';

const Main = styled.main`
	min-height: calc(100vh - 140px);
	width: 100%;
`;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

interface BaseLayoutProps {
	children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
	return (
		<PageContainer>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</PageContainer>
	);
}
