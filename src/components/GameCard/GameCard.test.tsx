import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GameCard } from '@/components';
import { CardState } from '@/models';

describe('GameCard Component', () => {
	const mockCard = {
		id: 1,
		pairId: 1,
		path: 'path/to/image.svg',
		state: CardState.Initial
	};

	const mockOnClick = jest.fn();

	test('renders correctly with initial state', () => {
		render(<GameCard card={mockCard} onClick={mockOnClick} />);
		const gameCard = screen.getByRole('button');
		expect(gameCard).toHaveClass('game-card');
		expect(gameCard).not.toHaveStyle(
			`backgroundImage: url(${mockCard.path})`
		);
	});

	test('calls onClick prop when clicked', () => {
		render(<GameCard card={mockCard} onClick={mockOnClick} />);
		const gameCard = screen.getByRole('button');
		fireEvent.click(gameCard);
		expect(mockOnClick).toHaveBeenCalledWith(mockCard);
	});

	test('applies active class and style when card state is active', () => {
		const activeCard = { ...mockCard, state: CardState.Active };
		render(<GameCard card={activeCard} onClick={mockOnClick} />);
		const gameCard = screen.getByRole('button');
		expect(gameCard).toHaveClass('game-card__active');
		expect(gameCard).toHaveStyle(
			`backgroundImage: url(${activeCard.path})`
		);
	});

	test('applies done class when card state is done', () => {
		const doneCard = { ...mockCard, state: CardState.Done };
		render(<GameCard card={doneCard} onClick={mockOnClick} />);
		const gameCard = screen.getByRole('button');
		expect(gameCard).toHaveClass('game-card__done');
	});
});
