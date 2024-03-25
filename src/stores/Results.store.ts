import { action, makeObservable, observable } from 'mobx';

import { IResult, Level, Theme } from '@/models';

export class ResultsStore {
	@observable
	results: IResult[] = [];

	@observable
	themeFilter: Theme = null;

	@observable
	levelFilter: Level = null;

	constructor() {
		makeObservable(this);
		this.setLevelFilter = this.setLevelFilter.bind(this);
		this.setThemeFilter = this.setThemeFilter.bind(this);
		this.sortResults = this.sortResults.bind(this);
		this.resetFilters = this.resetFilters.bind(this);
		this.loadResults();
	}

	@action
	setResults(results: IResult[]) {
		this.results = results;
		localStorage.setItem('results', JSON.stringify(this.results));
	}

	@action
	setThemeFilter(theme: Theme) {
		this.themeFilter = theme;
	}

	@action
	setLevelFilter(level: Level) {
		this.levelFilter = level;
	}

	loadResults() {
		const results = localStorage.getItem('results');
		if (results) this.results = JSON.parse(results);
	}

	addResult(result: IResult) {
		const results = [...this.results, result];
		this.setResults(results);
	}

	sortResults(): IResult[] {
		let filteredResults = [...this.results];

		if (this.themeFilter !== null) {
			filteredResults = filteredResults.filter(
				(result) => result.theme === this.themeFilter
			);
		}

		if (this.levelFilter !== null) {
			filteredResults = filteredResults.filter(
				(result) => result.level === this.levelFilter
			);
		}

		filteredResults.sort((a, b) => a.moves - b.moves);

		return filteredResults;
	}

	resetFilters() {
		this.setLevelFilter(null);
		this.setThemeFilter(null);
	}
}

export const resultsStore = new ResultsStore();
