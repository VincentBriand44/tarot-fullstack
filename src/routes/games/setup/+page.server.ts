import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const user = await prisma.user.findFirst({
		where: {
			role: 'ADMIN',
		},
	});

	const users = await prisma.user.findMany({
		include: {
			scores: {
				select: {
					value: true,
				},
			},
		},
	});

	const selectedReq = await prisma.user.findMany({
		where: {
			selected: true,
		},
		select: {
			id: true,
		},
	});
	const selected = selectedReq.flatMap((user) => user.id);

	return {
		user,
		users,
		selected,
	};
};
