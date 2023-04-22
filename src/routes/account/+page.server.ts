import { prisma } from '$lib/prisma';

export const load = async () => {
	const users = await prisma.user.findMany({
		take: 1,
		skip: 0,
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

	const scores = await prisma.score.findMany({
		where: {
			season: {
				id: season.id,
			},
			userId: user.id,
		},
	});

	const total = scores.reduce((a, b) => a + b.value, 0);

	return {
		user,
		total,
	};
};
