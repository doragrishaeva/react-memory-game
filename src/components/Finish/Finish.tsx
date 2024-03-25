import React from 'react';

import finishImg from '@/assets/finish.svg';
import { Button } from '@/components';

interface IFinish {
	moves: number;
	onPlayClick: () => void;
	onQuitClick: () => void;
}

export const Finish: React.FC<IFinish> = ({
	moves,
	onPlayClick,
	onQuitClick
}) => {
	return (
		<div
			className='flex flex-col h-screen w-screen items-center justify-center text-3xl selection:bg-text selection:text-bg'
			data-testid='finish'
		>
			<div>Woo-hoo! Congratulations!</div>
			<div>
				You won in <span className='font-bold'>{moves}</span> moves
			</div>
			<img src={finishImg} alt='finish' draggable={false} />
			<div className='flex gap-8'>
				<Button onClick={onPlayClick}>Play again</Button>
				<Button onClick={onQuitClick}>Quit</Button>
			</div>
		</div>
	);
};
