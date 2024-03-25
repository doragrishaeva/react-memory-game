import { action, makeObservable, observable } from 'mobx';

import { Theme, Level } from '@/models';

export class SettingsStore {
	@observable
	theme: Theme = null;

	@observable
	level: Level = null;

	username: string = '';

	constructor() {
		makeObservable(this);
		this.loadSettings();
	}

	@action
	setTheme = (theme: Theme) => {
		this.theme = theme;
		localStorage.setItem('theme', theme);
	};

	@action
	setLevel = (level: Level) => {
		this.level = level;
		localStorage.setItem('level', `${level}`);
	};

	setUsername = (name: string) => {
		this.username = name;
	};

	private loadSettings() {
		const theme = localStorage.getItem('theme') || Theme.Food;
		const level = localStorage.getItem('level') || Level.One;

		this.setTheme(theme as Theme);
		this.setLevel(level as Level);
	}
}

export const settingsStore = new SettingsStore();
