import { fail } from '@sveltejs/kit';

import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const user = await prisma.user.findFirst({
		where: {
			role: 'ADMIN',
		},
	});
	const game = await prisma.game.findFirst({
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
	});

	return {
		game,
		user,
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('🚀 ~ file: +page.server.ts:47 ~ default: ~ data:', data);

		const game = await prisma.game.findFirst({
			where: {
				ended: false,
			},
			select: {
				id: true,
				seasonId: true,
				rounds: {
					select: {
						dealerId: true,
					},
					orderBy: {
						createdAt: 'desc',
					},
					take: 1,
				},
				users: {
					select: {
						id: true,
					},
				},
			},
		});

		const auction = await prisma.auction.findFirst({
			where: {
				name: 'skip',
			},
			select: {
				id: true,
			},
		});

		const taker = data.get('taker') ?? '';
		const conscript = data.get('conscript') ?? '';

		const scoreData = data.get('score');
		const score = parseInt(scoreData as string) || 0;

		console.log('🚀 ~ file: +page.server.ts:82 ~ default: ~ score:', data);

		if (game) {
			if (taker !== '') {
				if (conscript === '') {
					console.log('conscript: ', conscript);
					prisma.round.create({
						data: {
							auctionId: auction?.id ?? '',
							gameId: game?.id ?? '',
							dealerId: game?.rounds[0].dealerId ?? '',
							scores: {
								create: game?.users.map((user) => ({
									userId: user.id,
									gameId: game?.id,
									seasonId: game?.seasonId,
									value:
										user.id === taker ? score : user.id === conscript ? score / 2 : -(score / 2),
								})),
							},
						},
					});
				} else {
					console.log('taker :', taker);
					prisma.round.create({
						data: {
							auctionId: auction?.id ?? '',
							gameId: game?.id ?? '',
							dealerId: game?.rounds[0].dealerId ?? '',
							scores: {
								create: game?.users.map((user) => ({
									userId: user.id,
									gameId: game?.id,
									seasonId: game?.seasonId,
									value: user.id === taker ? score : -(score / 4),
								})),
							},
						},
					});
				}
			} else {
				console.log('skip');
				prisma.round.create({
					data: {
						auction: {
							connect: {
								id: auction?.id,
							},
						},
						game: {
							connect: {
								id: game.id,
							},
						},
						dealer: {
							connect: {
								id: game.rounds[0].dealerId,
							},
						},
						scores: {
							createMany: {
								data: game?.users.map((user) => ({
									userId: user.id,
									gameId: game?.id,
									seasonId: game?.seasonId,
									value: 0,
								})),
							},
						},
					},
				});
			}
		} else {
			console.log('Game not found');
			return fail(500, { message: 'Game not found' });
		}

		// const gameId =

		// await prisma.round.create({});
	},
};
