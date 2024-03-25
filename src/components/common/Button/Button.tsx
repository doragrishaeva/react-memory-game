import React from 'react';
import clsx from 'classnames';

interface IButton {
	className?: string;
	children: React.ReactNode;
	outline?: boolean;
	onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
	className,
	children,
	outline = false,
	onClick
}) => {
	const buttonClassName = clsx(
		`transition-colors duration-300 p-default hover:text-bg hover:bg-text rounded-full ${className}`,
		{ 'border border-text': outline }
	);

	return (
		<button onClick={onClick} className={buttonClassName}>
			{children}
		</button>
	);
};
