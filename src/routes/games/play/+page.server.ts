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
		// prisma.game.update(); //TODO - Add logic
	},
};
