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
						role: faker.helpers.arrayElement(Object.keys(Role) as Role[])
					}
				});
			})
	);
	const seasons = await Promise.all(
		Array(1)
			.fill(undefined)
			.map(() => {
				return prisma.season.create({
					data: {}
				});
			})
	);
	const games = await Promise.all(
		Array(2)
			.fill(undefined)
			.map(() => {
				return prisma.game.create({
					data: {
						ended: faker.datatype.boolean(),
						season: { connect: { id: seasons[Math.ceil(Math.random() * seasons.length)].id } }
					}
				});
			})
	);
	const rounds = await Promise.all(
		Array(2)
			.fill(undefined)
			.map(() => {
				return prisma.round.create({
					data: {
						misdeal: faker.datatype.boolean(),
						card: Math.ceil(Math.random() * 4),
						dealer: { connect: { id: users[Math.ceil(Math.random() * users.length)].id } },
						game: { connect: { id: games[Math.ceil(Math.random() * games.length)].id } },
						auction: { connect: { id: auctions[Math.ceil(Math.random() * auctions.length)].id } }
					}
				});
			})
	);
	const auctions = await Promise.all(
		Array(4)
			.fill(undefined)
			.map(() => {
				return prisma.auction.create({
					data: {
						name: faker.music.genre(),
						value: Math.ceil(Math.random() * 3) * 50
					}
				});
			})
	);
	const scores = await Promise.all(
		Array(rounds.length * 5)
			.fill(undefined)
			.map((_, i) => {
				return prisma.score.create({
					data: {
						value: Math.floor(Math.random() * 10) * 5,
						user: { connect: { id: users[Math.ceil(Math.random() * users.length)].id } },
						round: { connect: { id: users[Math.floor(i / 5)].id } }
					}
				});
			})
	);
	const calendars = await Promise.all(
		Array(rounds.length * 5)
			.fill(undefined)
			.map(() => {
				return prisma.calendar.create({
					data: {
						date: faker.date.future()
					}
				});
			})
	);
};
