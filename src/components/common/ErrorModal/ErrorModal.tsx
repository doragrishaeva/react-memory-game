import React from 'react';
import clsx from 'classnames';

interface IErrorModal {
	text: string;
	show: boolean;
}

export const ErrorModal: React.FC<IErrorModal> = ({ text, show }) => {
	return (
		<div
			className={clsx(
				'half-translate absolute border border-text rounded-3xl top-[20%] tablet:top-[5%] phone:top-[15%] left-1/2 p-default animate-bounce transition-opacity duration-300 whitespace-nowrap',
				{ 'opacity-0': !show, 'opacity-100': show }
			)}
			data-testid='error-modal'
		>
			<div className='text-2xl text-text'>{text}</div>
		</div>
	);
};
