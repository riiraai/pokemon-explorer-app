import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import GlobalStyle from '@styles/globalStyles.ts';
import theme from '@styles/theme.ts';
import isPropValid from '@emotion/is-prop-valid';
import { AuthProvider } from '@contexts/AuthContext';
import { AuthModal } from '@components/ui/AuthModal';
import AuthLayout from '@components/layouts/AuthLayout';
import GuestLayout from '@components/layouts/GuestLayout';

/**
 * Routes and Pages imports
 */
const HomePage = lazy(() => import('@pages/home'));
const PokedexPage = lazy(() => import('@pages/pokedex'));
const NotFoundPage = lazy(() => import('@pages/error/NotFound'));

export default function App() {
	return (
		<StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<GlobalStyle />
					<BrowserRouter>
						<Routes>
							<Route element={<GuestLayout />}>
								<Route index element={<HomePage />} />
							</Route>
							<Route element={<AuthLayout />}>
								<Route
									path="/pokedex"
									element={<PokedexPage />}
								/>
							</Route>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</BrowserRouter>
					<AuthModal />
				</AuthProvider>
			</ThemeProvider>
		</StyleSheetManager>
	);
}
