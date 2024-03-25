import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { LevelRange } from '@/components';
import '@testing-library/jest-dom';

import { Level, LevelRangeSize } from '@/models';

describe('LevelRange Component', () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with static levels', () => {
		const { getAllByTestId } = render(
			<LevelRange
				level={Level.Two}
				dynamic={false}
				size={LevelRangeSize.Small}
			/>
		);

		const stars = getAllByTestId('star');
		expect(stars.length).toBe(5);
		expect(stars[1].getAttribute('fill')).toBe('black');
	});

	it('changes hovered level on mouse enter when dynamic', () => {
		const { getAllByTestId } = render(
			<LevelRange
				level={Level.Four}
				dynamic={true}
				size={LevelRangeSize.Small}
			/>
		);

		const stars = getAllByTestId('star');
		fireEvent.mouseEnter(stars[4]);
		expect(stars[4].getAttribute('fill')).toBe('black');
	});

	it('resets hovered level on mouse leave when dynamic', async () => {
		const { getAllByTestId } = render(
			<LevelRange
				level={Level.Three}
				dynamic={true}
				size={LevelRangeSize.Small}
			/>
		);

		const stars = getAllByTestId('star');
		fireEvent.mouseEnter(stars[4]);
		fireEvent.mouseLeave(stars[4]);
		expect(stars[4].getAttribute('fill')).not.toBe('black');
	});

	it('calls onClick with the correct level when a star is clicked', () => {
		const { getAllByTestId } = render(
			<LevelRange
				level={Level.Five}
				dynamic={true}
				size={LevelRangeSize.Small}
				onClick={mockOnClick}
			/>
		);

		const stars = getAllByTestId('star');
		fireEvent.click(stars[4]);
		expect(mockOnClick).toHaveBeenCalledWith(Level.Five);
	});
});
