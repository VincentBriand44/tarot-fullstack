import type { Calendar, User } from '$types/app';

export const load = () => {
	return {
		players: [
			{ name: 'Player 1', scoreSeason: 4 },
			{ name: 'Player 2', scoreSeason: 6 },
			{ name: 'Player 3', scoreSeason: 6 },
			{ name: 'Player 4', scoreSeason: 7 },
			{ name: 'Player 5', scoreSeason: 8 },
			{ name: 'Player 6', scoreSeason: 9 }
		] as User[],

		calendar: [
			//
			{ date: '01-02-2023' },
			{ date: '01-03-2023' },
			{ date: '01-04-2023' },
			{ date: '01-05-2023' }
		] as Calendar[],

		games: [
			//
			{
				start: '01-02-2023',
				end: '01-02-2023',
				players: [
					{ name: 'Player 1', scoreSeason: 4 },
					{ name: 'Player 2', scoreSeason: 6 },
					{ name: 'Player 3', scoreSeason: 6 },
					{ name: 'Player 4', scoreSeason: 7 },
					{ name: 'Player 5', scoreSeason: 8 }
				],
				rounds: [
					{
						dealer: { name: 'Player 1', scoreSeason: 4 },
						dealerLoose: false,
						scores: [
							{ user: { name: 'Player 1', scoreSeason: 4 }, value: 100 },
							{ user: { name: 'Player 2', scoreSeason: 6 }, value: 50 },
							{ user: { name: 'Player 3', scoreSeason: 6 }, value: -50 },
							{ user: { name: 'Player 4', scoreSeason: 7 }, value: -50 },
							{ user: { name: 'Player 5', scoreSeason: 8 }, value: -50 }
						]
					},
					{
						dealer: { name: 'Player 2', scoreSeason: 6 },
						dealerLoose: false,
						scores: [
							{ user: { name: 'Player 1', scoreSeason: 4 }, value: -20 },
							{ user: { name: 'Player 2', scoreSeason: 6 }, value: 40 },
							{ user: { name: 'Player 3', scoreSeason: 6 }, value: -20 },
							{ user: { name: 'Player 4', scoreSeason: 7 }, value: -20 },
							{ user: { name: 'Player 5', scoreSeason: 8 }, value: 20 }
						]
					}
				]
			}
		]
	};
};
