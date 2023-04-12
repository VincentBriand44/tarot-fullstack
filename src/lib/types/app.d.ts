export interface Nav {
	name: string;
	href: string;
	icon: string | undefined;
	active: boolean;
}

export interface User {
	name: string;
	scoreSeason: number;
}

export interface Calendar {
	date: string;
}

export interface Game {
	start: string;
	end: string | undefined;
	players: User[];
	rounds: {
		dealer: User;
		dealerLoose: boolean;
		scores: {
			user: User;
			value: number;
		}[];
	}[];
}
