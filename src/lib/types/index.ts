export type NavigationItemType = {
	title: string;
	pageTitle?: string;
	path: string;
};

export type PreferencesContext = {
	getColorScheme: () => string | null;
	getReducedMotion: () => boolean | null;
	setColorScheme: (v: string) => void;
	setReducedMotion: (v: boolean) => void;
};

export type Tag = {
	name: string;
	count: number;
};
export type Post = {
	title: string;
	slug: string;
	date: string;
	featured: boolean;
	tags: string[];
	excerpt: string;
	readingStats: {
		text: string;
		minutes: number;
		time: number;
		words: number;
	};
};
