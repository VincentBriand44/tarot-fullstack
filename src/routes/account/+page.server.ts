import { prisma } from '$lib/prisma';

export const load = async () => {
	const users = await prisma.user.findMany({});
	const seasons = await prisma.season.findMany({
		include: {
			games: {
				include: {
					users: {
						select: {
							scores: {
								select: {
									value: true
								}
							}
						}
					}
				}
			}
		}
	});

	return {
		users,
		seasons
	};
};
