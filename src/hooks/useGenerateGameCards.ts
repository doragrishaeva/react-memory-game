import { useMemo } from 'react';

import { CardState, Level, Theme } from '@/models';
import { CARDS_AMOUNT } from '@/constants';

export const useGenerateGameCards = (level: Level, theme: Theme) => {
	const cardsData = useMemo(() => {
		const generatedCards = [];
		let pairId = 1;

		const totalCards = CARDS_AMOUNT[level];
		let isPair = false;

		for (let i = 0; i < totalCards; i++) {
			let assetPath = new URL(
				`../assets/game-images/${theme}/${pairId}.svg`,
				import.meta.url
			).href;

			let element = {
				id: i + 1,
				pairId,
				path: assetPath,
				state: CardState.Initial
			};

			generatedCards.push(element);

			if (isPair) pairId++;
			isPair = !isPair;
		}

		return generatedCards.sort(() => Math.random() - 0.5);
	}, [level, theme]);

	return cardsData;
};
