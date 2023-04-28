import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const [user] = await prisma.user.findMany({
		skip: 2,
		take: 1,
	});

	return {
		user,
	};
};
