import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
	id: string;
	email: string;
}

interface AuthContextType {
	user: User | null;
	loading: boolean;
	isAuthModalOpen: boolean;
	openAuthModal: () => void;
	closeAuthModal: () => void;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

	// Modal control functions
	const openAuthModal = () => setIsAuthModalOpen(true);
	const closeAuthModal = () => setIsAuthModalOpen(false);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		const users = JSON.parse(localStorage.getItem('users') || '[]');

		if (users.length === 0) {
			const defaultUser = {
				id: Math.random().toString(36).substr(2, 9),
				email: 'default@example.com',
				password: 'password123',
			};
			users.push(defaultUser);
			localStorage.setItem('users', JSON.stringify(users));
		}

		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const signIn = async (email: string, password: string) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const users = JSON.parse(localStorage.getItem('users') || '[]');
		const user = users.find(
			(u: User & { password: string }) =>
				u.email === email && u.password === password
		);

		if (!user) {
			setLoading(false);
			throw new Error('Invalid email or password');
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password: _, ...userWithoutPassword } = user;
		localStorage.setItem('user', JSON.stringify(userWithoutPassword));
		setUser(userWithoutPassword);
		setLoading(false);
	};

	const signUp = async (email: string, password: string) => {
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const users = JSON.parse(localStorage.getItem('users') || '[]');

		if (users.some((u: User) => u.email === email)) {
			setLoading(false);
			throw new Error('Email already exists');
		}

		const newUser = {
			id: crypto.randomUUID(),
			email,
			password,
		};

		users.push(newUser);
		localStorage.setItem('users', JSON.stringify(users));

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password: _, ...userWithoutPassword } = newUser;
		localStorage.setItem('user', JSON.stringify(userWithoutPassword));
		setUser(userWithoutPassword);
		setLoading(false);
	};

	const signOut = async () => {
		localStorage.removeItem('user');
		setUser(null);
		window.location.href = '/';
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				isAuthModalOpen,
				openAuthModal,
				closeAuthModal,
				signIn,
				signUp,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
