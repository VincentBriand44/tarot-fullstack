import { prisma } from '$lib/prisma';

export const load = async ({ params }) => {
	const game = await prisma.game.findUnique({
		where: {
			id: params.id,
		},
		include: {
			rounds: true,
			scores: true,
			season: true,
			users: true,
		},
	});

	return {
		game,
	};
};
