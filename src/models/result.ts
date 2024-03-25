import { Level, Theme } from '@/models';

export interface IResult {
	id: number;
	name: string;
	level: Level;
	theme: Theme;
	moves: number;
}
