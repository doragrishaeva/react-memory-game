import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Loader } from './components';

const GamePage = lazy(() =>
	import('./pages/Game/Game.page').then((module) => ({
		default: module.GamePage
	}))
);
const MainPage = lazy(() =>
	import('./pages/Main/Main.page').then((module) => ({
		default: module.MainPage
	}))
);
const ScorePage = lazy(() =>
	import('./pages/Score/Score.page').then((module) => ({
		default: module.ScorePage
	}))
);
const SettingsPage = lazy(() =>
	import('./pages/Settings/Settings.page').then((module) => ({
		default: module.SettingsPage
	}))
);

import { BackButton } from './components';

export const App: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isNotMainPage = location.pathname !== '/';

	const goToHomePage = () => {
		navigate('/');
	};

	return (
		<div className='bg-bg w-screen h-screen relative'>
			{isNotMainPage && (
				<div className='absolute top-10 right-10 z-[100]'>
					<BackButton onClick={goToHomePage}></BackButton>
				</div>
			)}

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='play' element={<GamePage />} />
					<Route path='settings' element={<SettingsPage />} />
					<Route path='score' element={<ScorePage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
