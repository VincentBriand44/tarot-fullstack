export interface Nav {
	name: string;
	href: string;
	icon: string | undefined;
	active: boolean;
}

interface Day {
	name: string;
	enabled: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	date: any;
}

interface Item {
	title: string;
	subtitle?: string;
	detailHeader?: string;
	detailContent?: string;
	className: string;
	startCol?: number;
	date: Date;
	len: number;
	vlen?: number;
	startRow?: number;
	isBottom?: boolean;
}
