import React from 'react';

interface IBackButton {
	onClick: () => void;
}

export const BackButton: React.FC<IBackButton> = ({ onClick }) => {
	return (
		<div
			className='back-icon'
			role='button'
			data-testid='back-button'
			onClick={onClick}
		></div>
	);
};
