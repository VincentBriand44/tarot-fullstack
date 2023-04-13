import type { Calendar, Game, User } from '$types/app';

import calendar from '$lib/json/calendar.json';
import games from '$lib/json/games.json';
import users from '$lib/json/users.json';

export const load = () => {
	return {
		players: users as User[],

		calendar: calendar as Calendar[],

		games: games as Game[]
	};
};
