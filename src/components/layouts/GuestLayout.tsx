import { Outlet } from 'react-router';
import BaseLayout from './BaseLayout';

export default function GuestLayout() {
	return (
		<BaseLayout>
			<Outlet />
		</BaseLayout>
	);
}
