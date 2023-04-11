export interface Nav {
	name: string;
	href: string;
	icon: string | undefined;
	active: boolean;
}

export interface Player {
	name: string;
	score: number;
}
