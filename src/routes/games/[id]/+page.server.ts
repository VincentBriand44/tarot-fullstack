import { prisma } from '$lib/prisma';

export const load = async ({ params }) => {
	const game = await prisma.game.findUnique({
		where: {
			id: params.id,
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
