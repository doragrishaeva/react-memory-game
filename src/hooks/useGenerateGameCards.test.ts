import { renderHook } from '@testing-library/react-hooks';

import { useGenerateGameCards } from '@/hooks/useGenerateGameCards';
import { Level, Theme } from '@/models';
import { CARDS_AMOUNT } from '@/constants';

describe('useGenerateGameCards', () => {
	it('generates the correct number of cards for a given level and theme', () => {
		const { result } = renderHook(() =>
			useGenerateGameCards(Level.One, Theme.Food)
		);

		expect(result.current.length).toBe(CARDS_AMOUNT[Level.One]);
		expect(
			result.current.every((card) => card.path.includes(Theme.Food))
		).toBe(true);
	});

	it('ensures cards are generated in pairs', () => {
		const { result } = renderHook(() =>
			useGenerateGameCards(Level.One, Theme.Food)
		);

		const pairIds = result.current.map((card) => card.pairId);
		const uniquePairIds = [...new Set(pairIds)];

		uniquePairIds.forEach((pairId) => {
			const count = pairIds.filter((id) => id === pairId).length;
			expect(count).toBe(2);
		});
	});
});
