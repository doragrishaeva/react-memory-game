import { action, makeObservable, observable } from 'mobx';

import { CardState, GameStatus, ICard, IResult } from '@/models';
import { resultsStore, settingsStore } from '@/stores';

export class GameStore {
	@observable
	cards: ICard[] = [];

	@observable
	moves: number = 0;

	@observable
	gameStatus: GameStatus = GameStatus.Login;

	@observable
	selectDisabled: boolean = false;

	selectedCard: ICard = null;

	constructor() {
		makeObservable(this);
		this.resetGame = this.resetGame.bind(this);
	}

	@action
	setCards = (cards: ICard[]) => {
		this.cards = cards;
	};

	@action
	addMoves = () => {
		this.moves++;
	};

	@action
	resetMoves = () => {
		this.moves = 0;
	};

	@action
	setGameStatus = (status: GameStatus) => {
		this.gameStatus = status;
	};

	@action
	setSelectDisabled = (disabled: boolean) => {
		this.selectDisabled = disabled;
	};

	showCard(card: ICard) {
		this.updateCards([card.id], CardState.Active);

		if (this.selectedCard) {
			this.setSelectDisabled(true);
			setTimeout(() => {
				this.checkPair(card);
				this.setSelectDisabled(false);
			}, 2000);
		} else {
			this.selectedCard = card;
		}
	}

	resetGame() {
		this.setGameStatus(GameStatus.InProgress);
		this.resetMoves();
	}

	private updateCards(ids: number[], state: CardState) {
		const cards = this.cards.map((card: ICard) => {
			if (ids.includes(card.id)) {
				return { ...card, state };
			}
			return card;
		});

		this.setCards(cards);
	}

	private checkPair(card: ICard) {
		if (!this.selectedCard) return;

		const state =
			this.selectedCard.pairId === card.pairId
				? CardState.Done
				: CardState.Initial;

		this.updateCards([card.id, this.selectedCard.id], state);

		if (state === CardState.Done) {
			this.checkFinish();
		}

		this.addMoves();
		this.selectedCard = null;
	}

	private checkFinish() {
		const undoneCards = this.cards.filter(
			(card: ICard) => card.state !== CardState.Done
		);

		if (!undoneCards.length) {
			this.setGameStatus(GameStatus.Win);
			resultsStore.addResult(this.sendResult());
		}
	}

	private sendResult(): IResult {
		return {
			id: resultsStore.results.length + 1,
			name: settingsStore.username,
			level: settingsStore.level,
			theme: settingsStore.theme,
			moves: this.moves
		};
	}
}

export const gameStore = new GameStore();
