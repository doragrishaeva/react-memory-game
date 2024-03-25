import React from 'react';
import clsx from 'classnames';

interface IRadioButton {
	checked: boolean;
	children?: React.ReactNode;
	onClick: () => void;
}

export const RadioButton: React.FC<IRadioButton> = ({
	checked,
	children,
	onClick
}) => {
	const [hovered, setHovered] = React.useState(false);

	return (
		<div className='flex items-center'>
			<div
				className='w-[20px] h-[20px] rounded-full border border-text relative'
				onClick={onClick}
				onMouseOver={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div
					className={clsx(
						'transition-colors duration-300 w-[14px] h-[14px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
						{
							'bg-text': checked || hovered,
							'bg-transparent': !checked && !hovered
						}
					)}
				></div>
			</div>
			<span className='ml-default'>{children}</span>
		</div>
	);
};
