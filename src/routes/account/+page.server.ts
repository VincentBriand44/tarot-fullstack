import { prisma } from '$lib/prisma';

export const load = async () => {
	const users = await prisma.user.findMany({
		take: 1,
		skip: 1, //? change user by userId
		select: {
			id: true,
			name: true,
			username: true,
			role: true,
		},
	});
	const user = users[0];

	const season = await prisma.season.findFirst({
		orderBy: {
			createdAt: 'desc',
		},
		select: {
			id: true,
		},
	});

	if (!season) {
		return {
			users: user,
			scores: [],
		};
	}

	const scores = await prisma.score.groupBy({
		by: ['userId'],
		where: {
			season: {
				id: season.id,
			},
			userId: user.id,
		},
		_sum: {
			value: true,
		},
	});
	const total = scores[0]._sum.value;

	const scoresAll = await prisma.score.groupBy({
		by: ['userId'],
		where: {
			season: {
				id: season.id,
			},
		},
		_sum: {
			value: true,
		},
		orderBy: {
			_sum: {
				value: 'desc',
			},
		},
	});
	console.log('🚀 ~ file: +page.server.ts:67 ~ load ~ scoresAll:', scoresAll);
	const position = scoresAll.map((e) => e._sum.value).indexOf(scores[0]._sum.value) + 1;

	const playedGames = await prisma.game.count({
		where: {
			season: {
				id: season.id,
			},
			users: {
				some: {
					id: user.id,
				},
			},
		},
	});

	return {
		user,
		total,
		position,
		playedGames,
	};
};
