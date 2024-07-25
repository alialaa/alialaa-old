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
