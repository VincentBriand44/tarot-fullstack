import type { Player } from '$types/app';

export const load = () => {
	return {
		players: [
			{ name: 'Player 1', score: 4 },
			{ name: 'Player 2', score: 6 },
			{ name: 'Player 3', score: 6 },
			{ name: 'Player 4', score: 7 },
			{ name: 'Player 5', score: 8 }
		] as Player[]
	};
};
