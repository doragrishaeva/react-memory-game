import React from 'react';
import { observer } from 'mobx-react-lite';

import { GameGrid, LevelRange } from '@/components';
import { GameStore, SettingsStore, gameStore, settingsStore } from '@/stores';
import { useGenerateGameCards } from '@/hooks';
import { ICard, LevelRangeSize } from '@/models';

export const Game: React.FC = observer(() => {
	const { level, theme }: SettingsStore = settingsStore;
	const { moves, selectDisabled }: GameStore = gameStore;

	const cards = useGenerateGameCards(level, theme);

	React.useEffect(() => {
		gameStore.setCards(cards);
	}, [cards]);

	const onCardClick = (card: ICard) => {
		!selectDisabled && gameStore.showCard(card);
	};

	return (
		<div className='relative' data-testid='game'>
			<div className='absolute top-10 left-10 flex flex-col font-semibold'>
				<div className='flex'>
					<span className='mr-small2'>Difficulty: </span>
					<LevelRange
						level={level}
						dynamic={false}
						size={LevelRangeSize.Small}
					></LevelRange>
				</div>
				<div>Moves: {moves}</div>
			</div>
			<GameGrid
				level={level}
				cards={gameStore.cards}
				onCardClick={onCardClick}
			></GameGrid>
		</div>
	);
});
