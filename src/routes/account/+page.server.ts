import type { Game, User } from '$types/app';

import games from '$lib/json/games.json';
import users from '$lib/json/users.json';

export const load = () => {
	return {
		players: users as User[],

		games: games as Game[]
	};
};
