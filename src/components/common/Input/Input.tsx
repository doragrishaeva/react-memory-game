import React from 'react';

interface IInput {
	onChange: (value: string) => void;
	onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({ onChange, onKeyPress }) => {
	const [value, setValue] = React.useState('');

	const onValueChange = (value: string) => {
		setValue(value);
		onChange(value);
	};

	return (
		<input
			className='bg-transparent border-b border-dashed outline-none p-small2 text-overflow font-semibold selection:bg-text selection:text-bg'
			onChange={({ target }) => onValueChange(target.value)}
			onKeyPress={onKeyPress}
			value={value}
		/>
	);
};
