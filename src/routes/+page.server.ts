import type { Calendar, User } from '$types/app';

export const load = () => {
	return {
		players: [
			{ id: 1, name: 'Player 1', scoreSeason: 4 },
			{ id: 2, name: 'Player 2', scoreSeason: 6 },
			{ id: 3, name: 'Player 3', scoreSeason: 6 },
			{ id: 4, name: 'Player 4', scoreSeason: 7 },
			{ id: 5, name: 'Player 5', scoreSeason: 8 },
			{ id: 6, name: 'Player 6', scoreSeason: 9 }
		] as User[],

		calendar: [
			//
			{ date: '01-02-2023' },
			{ date: '01-03-2023' },
			{ date: '01-04-2023' },
			{ date: '01-05-2023' }
		] as Calendar[],

		games: [
			{
				id: 1,
				start: '01-02-2023',
				end: '01-02-2023',
				players: [
					{ id: 1, name: 'Player 1', scoreSeason: 4 },
					{ id: 2, name: 'Player 2', scoreSeason: 6 },
					{ id: 3, name: 'Player 3', scoreSeason: 6 },
					{ id: 4, name: 'Player 4', scoreSeason: 7 },
					{ id: 5, name: 'Player 5', scoreSeason: 8 },
					{ id: 6, name: 'Player 6', scoreSeason: 9 }
				],
				rounds: [
					{
						id: 1,
						dealer: { name: 'Player 1', scoreSeason: 4 },
						dealerLoose: false,
						scores: [
							{ user: { id: 1, name: 'Player 1', scoreSeason: 4 }, value: 100 },
							{ user: { id: 2, name: 'Player 2', scoreSeason: 6 }, value: 50 },
							{ user: { id: 3, name: 'Player 3', scoreSeason: 6 }, value: -50 },
							{ user: { id: 4, name: 'Player 4', scoreSeason: 7 }, value: -50 },
							{ user: { id: 5, name: 'Player 5', scoreSeason: 8 }, value: -50 }
						]
					},
					{
						id: 2,
						dealer: { name: 'Player 2', scoreSeason: 6 },
						dealerLoose: false,
						scores: [
							{ user: { id: 1, name: 'Player 1', scoreSeason: 4 }, value: -20 },
							{ user: { id: 2, name: 'Player 2', scoreSeason: 6 }, value: 40 },
							{ user: { id: 3, name: 'Player 3', scoreSeason: 6 }, value: -20 },
							{ user: { id: 4, name: 'Player 4', scoreSeason: 7 }, value: -20 },
							{ user: { id: 5, name: 'Player 5', scoreSeason: 8 }, value: 20 }
						]
					}
				]
			},
			{
				id: 2,
				start: '01-02-2023',
				end: undefined,
				players: [
					{ id: 1, name: 'Player 1', scoreSeason: 4 },
					{ id: 2, name: 'Player 2', scoreSeason: 6 },
					{ id: 3, name: 'Player 3', scoreSeason: 6 },
					{ id: 4, name: 'Player 4', scoreSeason: 7 },
					{ id: 5, name: 'Player 5', scoreSeason: 8 },
					{ id: 6, name: 'Player 6', scoreSeason: 9 }
				],
				rounds: [
					{
						id: 3,
						dealer: { name: 'Player 1', scoreSeason: 4 },
						dealerLoose: false,
						scores: [
							{ user: { id: 1, name: 'Player 1', scoreSeason: 4 }, value: 90 },
							{ user: { id: 2, name: 'Player 2', scoreSeason: 6 }, value: 45 },
							{ user: { id: 3, name: 'Player 3', scoreSeason: 6 }, value: -45 },
							{ user: { id: 4, name: 'Player 4', scoreSeason: 7 }, value: -45 },
							{ user: { id: 5, name: 'Player 5', scoreSeason: 8 }, value: -45 }
						]
					},
					{
						id: 4,
						dealer: { name: 'Player 2', scoreSeason: 6 },
						dealerLoose: false,
						scores: [
							{ user: { id: 1, name: 'Player 1', scoreSeason: 4 }, value: -10 },
							{ user: { id: 2, name: 'Player 2', scoreSeason: 6 }, value: 20 },
							{ user: { id: 3, name: 'Player 3', scoreSeason: 6 }, value: -10 },
							{ user: { id: 4, name: 'Player 4', scoreSeason: 7 }, value: -10 },
							{ user: { id: 5, name: 'Player 5', scoreSeason: 8 }, value: 10 }
						]
					}
				]
			}
		]
	};
};
