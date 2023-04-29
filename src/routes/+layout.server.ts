import type { Nav } from '$types/app';

export const load = () => {
	return {
		nav: [
			{
				name: 'Accueil',
				href: '/',
				icon: 'mi-home',
				active: true,
			},
			{
				name: 'Parties',
				href: '/games',
				icon: 'mi-flag',
				active: false,
			},
		] as Nav[],

		accountDropdown: [
			{
				name: 'Mon compte',
				href: '/account',
				active: false,
			},
			{
				name: 'Mes paramètres',
				href: '/settings',
				active: false,
			},
			{
				name: 'Se déconnecter',
				href: '/logout',
				active: false,
			},
		] as Nav[],
	};
};
