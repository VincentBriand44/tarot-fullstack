/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	const users = await Promise.all(
		Array(6)
			.fill(undefined)
			.map(() => {
				return prisma.user.create({
					data: {
						username: faker.internet.userName(),
						password: faker.internet.password(),
						name: faker.name.firstName() + ' ' + faker.name.lastName(),
						email: faker.internet.email(),
						role: faker.helpers.arrayElement(Object.keys(Role) as Role[]),
					},
				});
			}),
	);
	const seasons = await Promise.all(
		Array(1)
			.fill(undefined)
			.map(() => {
				return prisma.season.create({
					data: {},
				});
			}),
	);
	const games = await Promise.all(
		Array(5)
			.fill(undefined)
			.map(() => {
				return prisma.game.create({
					data: {
						ended: faker.datatype.boolean(),
						season: { connect: { id: seasons[Math.floor(Math.random() * seasons.length)].id } },
						users: {
							connect: users.filter((_, i) => i < 5).map((user) => Object({ id: user.id })),
						},
					},
				});
			}),
	);
	games.forEach(async (game) => {
		await prisma.season.update({
			data: {
				games: {
					connect: {
						id: game.id,
					},
				},
			},
			where: {
				id: seasons[0].id,
			},
		});
	});
	const auctions = await Promise.all(
		Array(4)
			.fill(undefined)
			.map(() => {
				return prisma.auction.create({
					data: {
						name: faker.music.genre(),
						value: Math.floor(Math.random() * 3) * 50,
					},
				});
			}),
	);
	const rounds = await Promise.all(
		Array(20)
			.fill(undefined)
			.map(() => {
				return prisma.round.create({
					data: {
						misdeal: faker.datatype.boolean(),
						card: Math.ceil(Math.random() * 4),
						dealer: { connect: { id: users[Math.floor(Math.random() * users.length)].id } },
						game: { connect: { id: games[Math.floor(Math.random() * games.length)].id } },
						auction: { connect: { id: auctions[Math.floor(Math.random() * auctions.length)].id } },
					},
				});
			}),
	);
	const scores = await Promise.all(
		Array(rounds.length * 5)
			.fill(undefined)
			.map((_, i) => {
				return prisma.score.create({
					data: {
						value: Math.floor(Math.random() * 10) * 5,
						user: { connect: { id: users[Math.floor(Math.random() * users.length)].id } },
						round: { connect: { id: rounds[Math.floor(i / 5)].id } },
						game: { connect: { id: games[Math.floor(Math.random() * games.length)].id } },
						season: { connect: { id: seasons[Math.floor(Math.random() * seasons.length)].id } },
					},
				});
			}),
	);

	const calendars = await Promise.all(
		Array(2)
			.fill(undefined)
			.map(() => {
				return prisma.calendar.create({
					data: {
						date: faker.date.future(),
						users: {
							connect: users.map((user) => ({ id: user.id })),
						},
					},
				});
			}),
	);
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
