import { fail } from '@sveltejs/kit';

import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const user = await prisma.user.findFirst({
		skip: 4,
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

		const game = await prisma.game.findFirst({
			where: {
				ended: false,
			},
			select: {
				id: true,
				rounds: {
					select: {
						dealerId: true,
					},
				},
				users: {
					select: {
						id: true,
					},
				},
			},
		});
		console.log('🚀 ~ file: +page.server.ts:60 ~ default: ~ game:', game);

		const taker = data.get('taker');
		// const conscript = data.get('conscript');
		// const score = data.get('score');
		const gameId = game?.id;
		console.log('🚀 ~ file: +page.server.ts:74 ~ default: ~ gameId:', gameId);

		if (game) {
			if (taker !== '') {
				console.log('taker');
			} else {
				console.log('skip');
			}
		} else {
			console.log('Game not found');
			return fail(500, { message: 'Game not found' });
		}

		// const gameId =

		// await prisma.round.create({});
	},
};
