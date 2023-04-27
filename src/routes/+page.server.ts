import { prisma } from '$lib/prisma';

export const load = async () => {
	const users = await prisma.user.findMany({
		include: {
			scores: {
				select: {
					value: true,
				},
			},
		},
	});
	const calendars = await prisma.calendar.findMany({
		orderBy: {
			date: 'asc',
		},
	});
	const games = await prisma.game.findMany({
		include: {
			rounds: {
				include: {
					scores: {
						include: {
							user: true,
						},
					},
				},
			},
			season: {},
			users: {},
		},
	});

	return {
		users,
		calendars,
		games,
	};
};
