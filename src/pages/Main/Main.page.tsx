import React from 'react';

import { MENU } from '@/constants';
import { IMenuItem } from '@/models';
import { ButtonLink } from '@/components';

export const MainPage: React.FC = () => {
	return (
		<div
			className='flex flex-col w-screen h-screen justify-center items-center text-5xl gap-8 text-left'
			data-testid='main-page'
		>
			{MENU.map((el: IMenuItem) => {
				return (
					<ButtonLink to={el.link} key={el.id}>
						{el.title}
					</ButtonLink>
				);
			})}
		</div>
	);
};
