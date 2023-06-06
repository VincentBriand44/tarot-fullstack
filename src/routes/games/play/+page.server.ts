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

		const gameId = data.get('gameId')?.toString() ?? '';
		const auction = data.get('auction')?.toString() ?? '';
		const dealerId = data.get('dealerId')?.toString() ?? '';
		const playerId = data.getAll('playerId') ?? '';
		const playerScore = data.getAll('playerScore') ?? '';
		const players = playerId.map((id, index) => ({
			id: id.toString(),
			value: Number(playerScore[index]),
		}));
		const seasonId = data.get('seasonId')?.toString() ?? '';

		//TODO: error sending

		await prisma.round.create({
			data: {
				auction: {
					connect: {
						id: auction,
					},
				},
				game: {
					connect: {
						id: gameId,
					},
				},
				dealer: {
					connect: {
						id: dealerId,
					},
				},
				scores: {
					createMany: {
						data: players.map(({ id, value }) => ({
							userId: id,
							gameId: gameId,
							seasonId: seasonId,
							value: value,
						})),
					},
				},
			},
		});
	},
};
