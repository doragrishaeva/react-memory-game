import React from 'react';

import { IResult, LevelRangeSize, ScoreTableColumn } from '@/models';
import { LevelRange } from '@/components';

interface IScoreTable {
	results: IResult[];
}

export const ScoreTable: React.FC<IScoreTable> = ({ results }) => {
	return (
		<div className='text-base w-[80%] h-[80%] justify-self-start tablet:col-span-2 tablet:justify-self-center overflow-auto overflow-x-hidden scrolled'>
			<div className='grid grid-cols-4 font-bold min-h-[40px]'>
				{Object.values(ScoreTableColumn).map((column) => (
					<div className='text-center' key={column}>
						{column}
					</div>
				))}
			</div>
			{results.map((result: IResult) => (
				<div
					className='grid grid-cols-4 text-center min-h-[40px]'
					key={result.id}
				>
					<div>{result.name}</div>
					<div>{result.moves}</div>
					<LevelRange
						level={result.level}
						dynamic={false}
						size={LevelRangeSize.Small}
					></LevelRange>
					<div>{result.theme}</div>
				</div>
			))}
		</div>
	);
};
