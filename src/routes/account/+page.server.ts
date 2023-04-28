import { prisma } from '$lib/prisma';

export const load = async () => {
	const user = await prisma.user.findUnique({
		where: {
			id: 'clh0eog5n0000tsrgt4opns7b',
		},
		select: {
			id: true,
			name: true,
			username: true,
			role: true,
		},
	});

	const medals = await prisma.medal.groupBy({
		by: ['medal'],
		where: {
			userId: user?.id,
		},
		_count: {
			_all: true,
		},
	});
	console.log('🚀 ~ file: +page.server.ts:25 ~ load ~ medals:', medals);

	const medalsCounter = () => {
		const arr = [0, 0, 0];
		medals?.map((e) => {
			if (e.medal.includes('GOLD')) {
				arr[0] = e._count._all;
			} else if (e.medal.includes('SILVER')) {
				arr[1] = e._count._all;
			} else if (e.medal.includes('BRONZE')) {
				arr[2] = e._count._all;
			}
		});
		return arr;
	};
	const medalsCount = medalsCounter();

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
			medals: [],
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

	const games = await prisma.season.findUnique({
		where: {
			id: season.id,
		},
		select: {
			games: {
				where: {
					users: {
						some: {
							id: user?.id,
						},
					},
				},
				include: {
					scores: {
						where: {
							userId: user?.id,
						},
						select: {
							value: true,
						},
					},
				},
			},
			_count: {
				select: {
					games: true,
				},
			},
		},
	});
	const playedGames = games?._count.games;

	return {
		user,
		total,
		position,
		playedGames,
		games,
		medalsCount,
	};
};
