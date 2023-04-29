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
				icon: undefined,
				active: false,
			},
			{
				name: 'Mes paramètres',
				href: '/settings',
				icon: undefined,
				active: false,
			},
			{
				name: 'Se déconnecter',
				href: '/logout',
				icon: undefined,
				active: false,
			},
		] as Nav[],
	};
};
