import { prisma } from '$lib/prisma';

export const load = async () => {
	const seasons = await prisma.season.findMany({
		include: {
			games: {
				include: {
					rounds: {
						include: {
							scores: {
								select: {
									value: true
								}
							}
						}
					},
					users: {
						select: {
							name: true
						}
					}
				}
			}
		}
	});

	return {
		seasons
	};
};
