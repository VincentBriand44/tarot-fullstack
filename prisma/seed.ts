/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	const users = await Promise.all(
		Array(6)
			.fill(undefined)
			.map((_, i) => {
				return prisma.user.create({
					data: {
						username: faker.internet.userName(),
						password: faker.internet.password(),
						name: faker.name.firstName() + ' ' + faker.name.lastName(),
						email: faker.internet.email(),
						selected: i < 5,
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
			.map((_, i, arr) => {
				return prisma.game.create({
					data: {
						ended: i !== arr.length - 1,
						season: { connect: { id: seasons[Math.trunc(Math.random() * seasons.length)].id } },
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

	const auctions = await Promise.all([
		await prisma.auction.create({
			data: {
				name: 'Skip',
				value: 0,
				type: 'HIDDEN',
			},
		}),
		await prisma.auction.create({
			data: {
				name: 'Garde',
				value: 0,
				type: 'UNIQUE',
			},
		}),
		await prisma.auction.create({
			data: {
				name: 'Garde sans',
				value: 10,
				type: 'UNIQUE',
			},
		}),
		await prisma.auction.create({
			data: {
				name: 'Garde contre',
				value: 20,
				type: 'UNIQUE',
			},
		}),
		await prisma.auction.create({
			data: {
				name: 'Petit',
				value: 10,
				type: 'OPTIONAL',
			},
		}),
		await prisma.auction.create({
			data: {
				name: 'Poignée',
				value: 20,
				type: 'OPTIONAL',
			},
		}),
	]);

	const rounds = await Promise.all(
		Array(20)
			.fill(undefined)
			.map(() => {
				return prisma.round.create({
					data: {
						misdeal: faker.datatype.boolean(),
						card: faker.helpers.arrayElement(['HEART', 'TILE', 'CLOVER', 'PIKE']),
						dealer: { connect: { id: users[Math.trunc(Math.random() * users.length)].id } },
						game: { connect: { id: games[Math.trunc(Math.random() * games.length)].id } },
						auction: {
							connect: { id: auctions[Math.trunc(Math.random() * auctions.length - 1) + 1].id },
						},
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
						value: Math.trunc(Math.random() * 10) * 5,
						user: { connect: { id: users[Math.trunc(Math.random() * users.length)].id } },
						round: { connect: { id: rounds[Math.trunc(i / 5)].id } },
						game: { connect: { id: games[Math.trunc(Math.random() * games.length)].id } },
						season: { connect: { id: seasons[Math.trunc(Math.random() * seasons.length)].id } },
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

	const medals = await Promise.all(
		Array(100)
			.fill(undefined)
			.map(() => {
				return prisma.medal.create({
					data: {
						seasonId: seasons[Math.trunc(Math.random() * seasons.length)].id,
						medal: faker.helpers.arrayElement(['GOLD', 'SILVER', 'BRONZE']),
						user: { connect: { id: users[Math.trunc(Math.random() * users.length)].id } },
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
