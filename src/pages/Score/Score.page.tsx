import React from 'react';
import { observer } from 'mobx-react-lite';

import { Button, LevelRange, ScoreTable, ThemeList } from '@/components';
import { ResultsStore, resultsStore } from '@/stores';
import { LevelRangeSize } from '@/models';

export const ScorePage: React.FC = observer(() => {
	const {
		results,
		themeFilter,
		levelFilter,
		setThemeFilter,
		setLevelFilter,
		sortResults,
		resetFilters
	}: ResultsStore = resultsStore;

	const [_results, setResults] = React.useState(results);

	React.useEffect(() => {
		const _results = sortResults();
		setResults(_results);
	}, [levelFilter, themeFilter]);

	return (
		<div data-testid='score-page'>
			{results.length ? (
				<div className='grid justify-items-center grid-cols-[200px_auto] w-screen h-screen overflow-hidden text-xl selection:text-bg selection:bg-text'>
					<div className='col-span-2 text-3xl flex justify-center phone:justify-start items-center h-[140px] w-full'>
						<span className='p-default'>Best results</span>
					</div>
					<div className='justify-self-end text-right tablet:col-span-2 tablet:order-3 tablet:grid tablet:grid-cols-1 tablet:justify-self-center'>
						<div className='flex flex-col text-left items-start mb-default tablet:flex-row tablet:items-baseline tablet:mb-0 tablet:justify-between'>
							<div className='mb-small2 tablet:mr-default'>
								Filter by level:
							</div>
							<LevelRange
								level={levelFilter}
								dynamic={true}
								size={LevelRangeSize.Small}
								onClick={setLevelFilter}
							></LevelRange>
						</div>

						<div className='flex flex-col text-left items-start mb-default tablet:flex-row tablet:items-baseline tablet:mb-0 tablet:justify-between'>
							<div className='mb-small2 tablet:mr-default'>
								Filter by Theme:
							</div>
							<div className='text-base'>
								<ThemeList
									theme={themeFilter}
									setTheme={setThemeFilter}
								></ThemeList>
							</div>
						</div>

						<div className='reset-filter flex flex-col text-left items-start mb-default'>
							<Button
								className='p-1'
								outline={false}
								onClick={resetFilters}
							>
								reset filters
							</Button>
						</div>
					</div>
					<ScoreTable results={_results}></ScoreTable>
				</div>
			) : (
				<div className='w-screen h-screen flex flex-col items-center justify-center text-3xl selection:text-bg selection:bg-text'>
					<span>No results yet...</span>
					<span>Play game and your results will be saved here</span>
				</div>
			)}
		</div>
	);
});
