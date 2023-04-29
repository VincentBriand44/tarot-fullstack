import { prisma } from '$lib/prisma';

export const load = async () => {
	const game = await prisma.game.findUnique({
		where: {
			id: 'clh0eog9n000etsrgzb175t4e',
		},
		select: {
			id: true,
			rounds: {
				select: {
					scores: {
						select: {
							userId: true,
							value: true,
						},
					},
				},
			},
			users: {
				select: {
					id: true,
					name: true,
				},
			},
		},
	});

	return {
		game,
	};
};
