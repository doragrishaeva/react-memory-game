import React from 'react';

import { Theme } from '@/models';
import { RadioButton } from '@/components';

interface IThemeList {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeList: React.FC<IThemeList> = ({ theme, setTheme }) => {
	return (
		<div className='flex flex-col'>
			{Object.values(Theme).map((themeValue) => (
				<RadioButton
					checked={theme === themeValue}
					key={themeValue}
					onClick={() => setTheme(themeValue)}
				>
					{themeValue}
				</RadioButton>
			))}
		</div>
	);
};
