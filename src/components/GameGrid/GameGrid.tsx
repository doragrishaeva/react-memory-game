import React from 'react';

import { ICard, Level } from '@/models';
import { GameCard } from '@/components';

import './GameGrid.scss';

interface IGameGrid {
	level: Level;
	cards: ICard[];
	onCardClick: (card: ICard) => void;
}

export const GameGrid: React.FC<IGameGrid> = ({
	level,
	cards,
	onCardClick
}) => {
	const gridClass = `game-grid grid-${level}`;

	const cardClickHandler = (card: ICard) => {
		onCardClick(card);
	};

	return (
		<div className={gridClass}>
			{cards.map((card: ICard) => {
				return (
					<GameCard
						card={card}
						key={card.id}
						onClick={cardClickHandler}
					/>
				);
			})}
		</div>
	);
};
