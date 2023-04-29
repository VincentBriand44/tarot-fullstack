import { prisma } from '$lib/prisma';

export const load = async () => {
	//TODO - Add logic
	const [user] = await prisma.user.findMany({
		skip: 2,
		take: 1,
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
