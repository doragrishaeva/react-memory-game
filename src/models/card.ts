import { CardState } from '@/models';

export interface ICard {
	id: number;
	pairId: number;
	path: string;
	state: CardState;
}
