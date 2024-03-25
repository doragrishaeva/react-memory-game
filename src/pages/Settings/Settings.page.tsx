import React from 'react';
import { observer } from 'mobx-react-lite';

import { LevelRange, ThemeList } from '@/components';
import { LevelRangeSize } from '@/models';
import { SettingsStore, settingsStore } from '@/stores';

export const SettingsPage: React.FC = observer(() => {
	const { level, setLevel, theme, setTheme }: SettingsStore = settingsStore;

	return (
		<div
			className='flex items-center justify-center h-screen selection:bg-text selection:text-bg text-3xl'
			data-testid='settings-page'
		>
			<div className='grid grid-cols-2 gap-x-2 gap-y-10'>
				<span className='mr-default font-semibold'>Difficulty:</span>
				<LevelRange
					level={level}
					dynamic={true}
					size={LevelRangeSize.Large}
					onClick={setLevel}
				></LevelRange>
				<span className='mr-default font-semibold'>Theme:</span>
				<ThemeList theme={theme} setTheme={setTheme}></ThemeList>
			</div>
		</div>
	);
});
