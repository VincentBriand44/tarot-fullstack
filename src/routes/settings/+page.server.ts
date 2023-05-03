import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const user = await prisma.user.findFirst({
		skip: 4,
	});

	return {
		user,
	};
};
