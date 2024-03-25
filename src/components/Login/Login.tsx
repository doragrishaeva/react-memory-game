import React from 'react';

import loginImg from '@/assets/login.svg';
import { Button, Input } from '@/components';

interface ILogin {
	onSubmit: (login: string) => void;
}

export const Login: React.FC<ILogin> = ({ onSubmit }) => {
	const [login, setLogin] = React.useState('');

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		event.key === 'Enter' && onSubmit(login);
	};

	return (
		<div
			className='flex h-screen w-screen items-center justify-center text-xl tablet:flex-col'
			data-testid='login'
		>
			<img src={loginImg} alt='login' draggable={false} />
			<div className='flex flex-col'>
				<div className='flex items-center mb-large2'>
					<div className='mr-small1 selection:bg-text selection:text-bg'>
						My username is:
					</div>
					<Input onChange={setLogin} onKeyPress={onKeyPress} />
				</div>
				<Button onClick={() => onSubmit(login)} outline={true}>
					....AAAAND Let's start!
				</Button>
			</div>
		</div>
	);
};
