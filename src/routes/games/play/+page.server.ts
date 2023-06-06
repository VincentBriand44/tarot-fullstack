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

	const auctions = await prisma.auction.findMany({
		select: {
			id: true,
			name: true,
		},
	});

	return {
		game,
		user,
		auctions,
	};
};

// TODO: all refoctoring
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('🚀 ~ file: +page.server.ts:47 ~ default: ~ data:', data);

		const taker = data.get('gameId') ?? '';
		console.log('🚀 ~ file: +page.server.ts:49 ~ default: ~ taker:', taker);

		// prisma.round.create({
		// 	data: {
		// 		auction: {
		// 			connect: {
		// 				id: auction?.id,
		// 			},
		// 		},
		// 		game: {
		// 			connect: {
		// 				id: game.id,
		// 			},
		// 		},
		// 		dealer: {
		// 			connect: {
		// 				id: game.rounds[0].dealerId,
		// 			},
		// 		},
		// 		scores: {
		// 			createMany: {
		// 				data: game?.users.map((user) => ({
		// 					userId: user.id,
		// 					gameId: game?.id,
		// 					seasonId: game?.seasonId,
		// 					value: 0,
		// 				})),
		// 			},
		// 		},
		// 	},
		// });

		// const gameId =

		// await prisma.round.create({});
	},
};
