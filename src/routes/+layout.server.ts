import type { Nav } from '$types/app';

export const load = () => {
	return {
		nav: [
			{
				name: 'Accueil',
				href: '/',
				icon: 'mi-home',
				active: true
			},

			{
				name: 'Parties',
				href: '/',
				icon: 'mi-flag',
				active: false
			}
		] as Nav[],

		accountDropdown: [
			{
				name: 'Mon compte',
				href: '/',
				icon: undefined,
				active: false
			}
		] as Nav[]
	};
};
