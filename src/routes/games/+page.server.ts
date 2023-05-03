import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const user = await prisma.user.findFirst({
		skip: 4,
	});

	const [season] = await prisma.season.findMany({
		take: 1,
		include: {
			games: {
				include: {
					rounds: {
						include: {
							scores: {
								select: {
									value: true,
								},
							},
						},
					},
					users: {
						select: {
							name: true,
						},
					},
				},
			},
		},
	});

	const [isEnded] = await prisma.game.findMany({
		select: {
			ended: true,
		},
		where: {
			ended: false,
		},
	});

	return {
		season,
		user,
		isEnded,
	};
};
