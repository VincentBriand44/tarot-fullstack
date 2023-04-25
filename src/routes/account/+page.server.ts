import { prisma } from '$lib/prisma';

export const load = async () => {
	const user = await prisma.user.findUnique({
		where: {
			id: 'clgsfglsv0002tsmf9fv0k8ws',
		},
		select: {
			id: true,
			name: true,
			username: true,
			role: true,
		},
	});

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
			userId: user?.id,
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
	const position = scoresAll.map((e) => e._sum.value).indexOf(scores[0]._sum.value) + 1;

	const playedGames = await prisma.game.count({
		where: {
			season: {
				id: season.id,
			},
			users: {
				some: {
					id: user?.id,
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
