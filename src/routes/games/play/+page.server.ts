import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const [user] = await prisma.user.findMany({
		skip: 2,
		take: 1,
	});
	const [game] = await prisma.game.findMany({
		where: {
			ended: false,
		},
		select: {
			id: true,
			ended: true,
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
		take: 1,
	});

	return {
		game,
		user,
	};
};
