import React from 'react';
import clsx from 'classnames';

import { CardState, ICard } from '@/models';

export interface IGameCard {
	onClick: (card: ICard) => void;
	card: ICard;
}

export const GameCard: React.FC<IGameCard> = ({ onClick, card }) => {
	const style: any = {};

	if (card.state === CardState.Active) {
		style.backgroundImage = `url(${card.path})`;
	}

	return (
		<div
			className={clsx('game-card', {
				'game-card__active': card.state === CardState.Active,
				'game-card__done': card.state === CardState.Done
			})}
			style={style}
			onClick={() => onClick(card)}
			role='button'
		></div>
	);
};
