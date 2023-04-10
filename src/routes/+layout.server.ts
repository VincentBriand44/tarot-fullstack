import type { Nav } from '$types/app';

// import home from '$img/icons/activity.svg';

export const load = () => {
	return {
		nav: [
			{
				name: 'Home',
				href: '/',
				icon: undefined,
				active: true
			},
			{
				name: 'About',
				href: '/about',
				icon: undefined,
				active: false
			}
		] as Nav[]
	};
};
