export interface Nav {
	name: string;
	href: string;
	icon: string | undefined;
	active: boolean;
}

export interface User {
	id: number;
	name: string;
	scoreSeason: number;
}

export interface Calendar {
	date: string;
}

export interface Game {
	id: number;
	start: string;
	end: string | undefined;
	players: User[];
	rounds: {
		id: number;
		dealer: User;
		dealerLoose: boolean;
		scores: {
			user: User;
			value: number;
		}[];
	}[];
}
